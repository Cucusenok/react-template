import { ApolloProvider } from '@apollo/client';
import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { SpaceXLaunchCard } from '@components/SpaceXLaunchCard/SpaceXLaunchCard';
import { ThemeProvider } from '@mui/system';
import React from 'react';

import { ApolloClientConfig } from './Apollo/client';
import './App.css';
import { theme } from './common/theme';
import logo from './logo.svg';

function App() {
  return (
    <ApolloProvider client={ApolloClientConfig}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <MeetSpaceXSeoButton />
            <img className="App-logo" alt="logo" src={logo} />
            <p>
              Edit
              <code>src/App.tsx</code>
              and save to reload.
            </p>
            <a
              href="https://reactjs.org"
              rel="noopener noreferrer"
              className="App-link"
              target="_blank"
            >
              Learn React
            </a>
          </header>

          <SpaceXLaunchCard />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
