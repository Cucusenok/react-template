import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { ApolloClientConfig } from './Apollo/client';
import App from './App';
import { theme } from './common/theme';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClientConfig}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
