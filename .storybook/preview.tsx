// Use for Apollo Version 3+
import { MockedProvider } from '@apollo/client/testing';
import { ThemeProvider } from '@mui/system';
import type { Preview } from '@storybook/react';

import { theme } from '../src/common/theme';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
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
