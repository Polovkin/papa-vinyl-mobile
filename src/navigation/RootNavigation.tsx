import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
