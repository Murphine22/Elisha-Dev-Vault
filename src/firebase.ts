import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only if we have the required config
let app;
let auth;
let db;
let analytics;

if (typeof window !== 'undefined') {
  try {
    // Only initialize if we have the API key
    if (firebaseConfig.apiKey && firebaseConfig.apiKey !== 'your_api_key_here') {
      app = initializeApp(firebaseConfig);
      auth = getAuth(app);
      db = getFirestore(app);
      analytics = getAnalytics(app);
    } else {
      console.warn('Firebase API key not configured. Authentication features will be disabled.');
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

export { auth, db, analytics };