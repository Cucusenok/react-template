import type { StorybookConfig } from '@storybook/react-webpack5';
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    let configResolvePlugin = config?.resolve?.plugins;
    configResolvePlugin = [
      ...(config?.resolve?.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config?.resolve?.extensions,
      }),
    ];
    return config;
  },
};
export default config;
