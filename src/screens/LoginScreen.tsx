import {useAppDispatch, useAppSelector} from '../hooks';
import {Text, View} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/button-primary';
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {LOGIN} from '../store/auth/auth-async.actions';
import {LOGOUT} from '../store/auth/auth.slice';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const LoginScreen: FC<Props> = ({navigation}) => {
  const {auth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const login = async () => {
    console.log('login');
    dispatch(LOGIN({password: 'polova1141', username: 'papavinyl-admin'}));
  };

  const logout = async () => {
    console.log('login');
    dispatch(LOGOUT());
  };

  return (
    <View>
      <ButtonPrimary text={'login'} onPress={login} />
      <ButtonPrimary text={'Logout'} onPress={logout} />
      <Text>{auth.accessToken}</Text>
      <Text>{auth.isAuthenticated ? 'auth' : 'none'}</Text>
    </View>
  );
};

export default LoginScreen;
