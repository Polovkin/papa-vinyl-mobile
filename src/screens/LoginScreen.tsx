import {useAppDispatch, useAppSelector} from '../hooks';
import {Text} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {LOGIN} from '../store/auth/auth-async.actions';
import AuthLayout from '../components/layouts/AuthLayout/AuthLayout';
import {BASE_URL} from '@env';
interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const LoginScreen: FC<Props> = () => {
  const {auth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const login = async () => {
    dispatch(LOGIN({password: 'polova1141', username: 'papavinyl-admin'}));
  };

  return (
    <AuthLayout>
      <ButtonPrimary text={'login'} onPress={login} />

      <Text>фі - {BASE_URL}</Text>
      <Text>{auth.accessToken}</Text>
      <Text>{auth.isAuthenticated ? 'auth' : 'none'}</Text>
    </AuthLayout>
  );
};

export default LoginScreen;
