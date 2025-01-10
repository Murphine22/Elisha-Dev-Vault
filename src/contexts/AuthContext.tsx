import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../firebase';
import { 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { encryptData, decryptData } from '../utils/encryption';
import ReactGA from 'react-ga4';

interface AuthContextType {
  user: User | null;
  userProfile: any;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, userData: any) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: any) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setIsLoading(false);

      if (user && db) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const encryptedData = userDoc.data().encryptedProfile;
            const decryptedProfile = decryptData(encryptedData);
            setUserProfile(decryptedProfile);
          }
          
          ReactGA.event({
            category: 'User',
            action: 'Auto Login',
            label: user.email || 'unknown'
          });
        } catch (error) {
          console.error('Error fetching user profile:', error);
          setError('Failed to load user profile');
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      setIsLoading(true);
      
      if (!auth) throw new Error('Authentication is not initialized');
      
      const result = await signInWithEmailAndPassword(auth, email, password);
      
      ReactGA.event({
        category: 'User',
        action: 'Manual Login',
        label: email
      });
      
      return result;
    } catch (error: any) {
      setError(error.message);
      ReactGA.event({
        category: 'Error',
        action: 'Login Error',
        label: error.message
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, userData: any) => {
    try {
      setError(null);
      setIsLoading(true);
      
      if (!auth || !db) throw new Error('Firebase services are not initialized');
      
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      const encryptedProfile = encryptData(userData);
      
      await setDoc(doc(db, 'users', result.user.uid), {
        email,
        encryptedProfile,
        createdAt: new Date().toISOString()
      });

      ReactGA.event({
        category: 'User',
        action: 'Sign Up',
        label: email
      });

      return result;
    } catch (error: any) {
      setError(error.message);
      ReactGA.event({
        category: 'Error',
        action: 'Signup Error',
        label: error.message
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      if (!auth) throw new Error('Authentication is not initialized');
      
      await signOut(auth);
      setUserProfile(null);
      
      ReactGA.event({
        category: 'User',
        action: 'Logout'
      });
    } catch (error: any) {
      setError(error.message);
      ReactGA.event({
        category: 'Error',
        action: 'Logout Error',
        label: error.message
      });
      throw error;
    }
  };

  const updateProfile = async (data: any) => {
    if (!user || !db) throw new Error('User must be logged in and Firebase must be initialized');
    
    try {
      setError(null);
      setIsLoading(true);
      
      const encryptedProfile = encryptData(data);
      await setDoc(doc(db, 'users', user.uid), {
        encryptedProfile,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      setUserProfile(data);
      
      ReactGA.event({
        category: 'User',
        action: 'Profile Update'
      });
    } catch (error: any) {
      setError(error.message);
      ReactGA.event({
        category: 'Error',
        action: 'Profile Update Error',
        label: error.message
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    userProfile,
    login,
    signup,
    logout,
    updateProfile,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};