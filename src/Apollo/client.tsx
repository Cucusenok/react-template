import { ApolloClient, InMemoryCache } from '@apollo/client';

export const ApolloClientConfig = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://spacex-production.up.railway.app',
});
