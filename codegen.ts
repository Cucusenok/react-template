
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app",
  documents: "src/graphql/*.graphql",
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [
        'typescript', 'typescript-operations', 'typescript-react-apollo'
      ]
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
