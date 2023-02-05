import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/store';
import Login from './src/components/Login';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Login />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
