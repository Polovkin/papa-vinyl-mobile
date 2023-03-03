import React from 'react';
import './src/localization/i18n';
import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation/Navigation';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {baseUrl} from './src/config';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/Toast/toat.config';

const client = new ApolloClient({
  uri: baseUrl + '/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ApolloProvider client={client}>
            <Navigation />
          </ApolloProvider>
        </PersistGate>
      </Provider>
      <Toast config={toastConfig} />
    </>
  );
}

export default App;
