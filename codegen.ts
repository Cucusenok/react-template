import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  documents: 'src/**/*.gql.tsx',
  schema: 'https://spacex-production.up.railway.app',
  generates: {
    './src/gql/schema.gql': {
      plugins: ['schema-ast'],
    },

    './src/gql/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
