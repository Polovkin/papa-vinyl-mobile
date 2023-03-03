import {CodegenConfig} from '@graphql-codegen/cli';
import {baseUrl} from './src/config';

const config: CodegenConfig = {
  schema: baseUrl + '/graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql/': {
      preset: 'client',
    },
  },
};

export default config;
