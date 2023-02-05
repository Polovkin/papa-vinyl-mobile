import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Provider} from 'react-redux';
import {persistor, store} from './src/store';
import Login from './src/components/Login';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Login />
          </ScrollView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
