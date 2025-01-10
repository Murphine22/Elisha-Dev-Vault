import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(process.env.VITE_GA_MEASUREMENT_ID || '');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

export const logException = (description: string, fatal = false) => {
  ReactGA.event({
    category: 'Error',
    action: description,
    label: fatal ? 'fatal' : 'non-fatal'
  });
};