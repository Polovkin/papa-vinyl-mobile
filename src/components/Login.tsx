import {LOGIN} from '../store/auth/auth-async.actions';
import {useAppDispatch} from '../hooks';
import {View} from 'react-native';
import ButtonPrimary from './ButtonPrimary/button-primary';
import React from 'react';

const Login = () => {
  const dispatch = useAppDispatch();
  const login = async () => {
    const credentials = {
      username: 'papavinyl-admin',
      password: 'polova1141',
    };
    dispatch(LOGIN(credentials));
  };

  return (
    <View>
      <ButtonPrimary text={'Login'} onPress={login} />
    </View>
  );
};

export default Login;
