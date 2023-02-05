import {useAppSelector} from '../hooks';
import {Text, View} from 'react-native';
import ButtonPrimary from './ButtonPrimary/button-primary';
import React from 'react';
import {useGetCategoriesQuery} from '../store/api/categories.slice';

const Login = () => {
  const Auth = useAppSelector(state => state.auth);

  const {data: categories} = useGetCategoriesQuery({limit: 40});

  const fetchData = async () => {};

  return (
    <View>
      <ButtonPrimary text={'Login'} onPress={fetchData} />
      <Text>{Auth.auth.accessToken}</Text>
      {categories &&
        categories?.content.map(c => (
          <View key={c.id}>
            <Text>{c.name}</Text>
          </View>
        ))}
    </View>
  );
};

export default Login;
