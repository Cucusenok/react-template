import { FragmentQueryExample } from '@components/FragmentQueryExample/FragmentQueryExample';
import { ComponentWithQuery } from '@components/ComponentWithQuery/ComponentWithQuery';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { GraphQLExample } from '@components/GraphQLExample/GraphQLExample';
import React from 'react';

import logo from './logo.svg';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app',
});

function App() {
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
        <div>{/* <a>Какая-то ссылк</a> */}</div>
      </div>
    </ApolloProvider>
  );
}

export default App;
