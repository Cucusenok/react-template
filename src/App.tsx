import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ComponentWithQuery } from '@components/ComponentWithQuery/ComponentWithQuery';
import { FragmentQueryExample } from '@components/FragmentQueryExample/FragmentQueryExample';
import { GraphQLExample } from '@components/GraphQLExample/GraphQLExample';
import React from 'react';

import './App.css';
import logo from './logo.svg';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app',
});

function App() {
  // For test no-console
  // const consoleLogChecking = 'some string'
  // console.log(consoleLogChecking)
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <FragmentQueryExample />
          <GraphQLExample />
          <ComponentWithQuery />
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
