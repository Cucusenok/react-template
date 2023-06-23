import { ApolloProvider } from '@apollo/client';
import { ROUTES } from '@common/router';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ApolloClientConfig } from './Apollo/client';

function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <ApolloProvider client={ApolloClientConfig}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
