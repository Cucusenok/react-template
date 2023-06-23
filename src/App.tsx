import { ApolloProvider } from '@apollo/client';
import { Authentication } from '@components/Authentication';
import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import React from 'react';

import { ApolloClientConfig } from './Apollo/client';
import './App.css';

function App() {
  // For test no-console
  // const consoleLogChecking = 'some string'
  // console.log(consoleLogChecking)
  return (
    <ApolloProvider client={ApolloClientConfig}>
      <div className="App">
        <header className="App-header">
          <MeetSpaceXSeoButton />
          <Authentication />
        </header>
        <div>
          <a href="https://google.com">Какая-то ссылк</a>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
