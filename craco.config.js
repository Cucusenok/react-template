/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const CracoAlias = require('craco-alias');

module.exports = {
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
