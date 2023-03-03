import {useAppDispatch, useAppSelector} from '../hooks';
import {Text} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import React, {FC} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {LOGIN, REGISTER} from '../store/auth/auth-async.actions';
import AuthLayout from '../components/layouts/AuthLayout/AuthLayout';
import {baseUrl} from '../config';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const LoginScreen: FC<Props> = () => {
  const {auth} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const login = async () => {
    dispatch(LOGIN({password: 'polova1141', username: 'papavinyl-admin'}));
  };

  const register = async () => {
    dispatch(
      REGISTER({
        password: 'polova11412',
        username: 'papavinyl-admin2',
        email: 'm@test.ya',
      }),
    );
  };

  return (
    <AuthLayout>
      <ButtonPrimary text={'login'} onPress={login} />
      <ButtonPrimary text={'register'} onPress={register} />
    </AuthLayout>
  );
};

export default LoginScreen;
