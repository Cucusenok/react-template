import { FragmentQueryExample } from '@components/FragmentQueryExample/FragmentQueryExample';
import { ComponentWithQuery } from '@components/ComponentWithQuery/ComponentWithQuery';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { GraphQLExample } from '@components/GraphQLExample/GraphQLExample';
import { Authentication } from '@components/Authentication';

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
