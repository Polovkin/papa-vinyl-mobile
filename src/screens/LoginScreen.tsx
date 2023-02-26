import {useAppDispatch, useAppSelector} from '../hooks';
import {Text, View} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/button-primary';
import React, {FC, useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {LOGIN} from '../store/auth/auth-async.actions';
import {LOGOUT} from '../store/auth/auth.slice';
import {useQuery} from '@apollo/client';
import {graphql} from '../gql';

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
    <View>
      <ButtonPrimary text={'login'} onPress={login} />

      <Text>{auth.accessToken}</Text>
      <Text>{auth.isAuthenticated ? 'auth' : 'none'}</Text>
    </View>
  );
};

export default LoginScreen;
