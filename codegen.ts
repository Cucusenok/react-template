
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app",
  documents: "src/**/*.gql",
  generates: {
    "./src/gql/graphql.tsx": {
      plugins: [ 'typescript', 'typescript-operations', 'typescript-react-apollo']
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    },

    "./src/gql/schema.gql": {
      plugins: ["schema-ast"]
    }
  }
};

export default config;
