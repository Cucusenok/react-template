import { MeetSpaceXSeoButton } from '@components/MeetSpaceXSeoButton';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { ApolloClientConfig } from './Apollo/client';

import './App.css';
import logo from './logo.svg';

function App() {
  // For test no-console
  // const consoleLogChecking = 'some string'
  // console.log(consoleLogChecking)
  return (
    <ApolloProvider client={ApolloClientConfig}>
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
        <div>
          <a href="https://google.com">Какая-то ссылк</a>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
