import {CodegenConfig} from '@graphql-codegen/cli';
import {GRAPHQL_URL} from './src/config';

const config: CodegenConfig = {
  schema: GRAPHQL_URL,
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
