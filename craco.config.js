/* eslint-disable */
const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin'
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        // plugin does not take it from tsconfig
        // baseUrl SHOULD be specified
        baseUrl: './src',
        source: 'tsconfig',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" are specified */
        tsConfigPath: './tsconfig.json',
      },
    },
  ],
};
