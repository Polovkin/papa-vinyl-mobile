import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import * as React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import {useAppSelector} from '../hooks';
import {useEffect} from 'react';
import ShopScreen from '../screens/ShopScreen';

export type RootStackList = {
  Shop: undefined;
  Login: undefined;
  Welcome: undefined;
};
const RootStack = createNativeStackNavigator<RootStackList>();
const RootNavigator = () => {
  const {auth} = useAppSelector(state => state.auth);

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome">
      {auth.isAuthenticated ? (
        <>
          <RootStack.Screen name="Shop" component={ShopScreen} />
        </>
      ) : (
        <>
          <RootStack.Screen name="Welcome" component={WelcomeScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
