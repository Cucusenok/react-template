import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/system';
import { theme } from 'theme';

const AppContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
