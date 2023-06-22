import type { Preview } from '@storybook/react';
import { MockedProvider } from '@apollo/client/testing'; // Use for Apollo Version 3+
import { ApolloProvider } from '@apollo/client';
import { ApolloClientConfig } from '../src/Apollo/client';

const preview: Preview = {
  parameters: {
    apolloClient: {
      MockedProvider,
      // any props you want to pass to MockedProvider on every story
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
