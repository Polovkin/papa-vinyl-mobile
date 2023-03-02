import {CodegenConfig} from '@graphql-codegen/cli';
import {BASE_URL} from '@env';
const config: CodegenConfig = {
  schema: BASE_URL + '/graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
