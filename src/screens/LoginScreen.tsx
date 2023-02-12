import {useAppSelector} from '../hooks';
import {Button, Text, View} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/button-primary';
import React, {FC} from 'react';
import {useGetCategoriesQuery} from '../store/api/categories.slice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const LoginScreen: FC<Props> = ({navigation}) => {
  const Auth = useAppSelector(state => state.auth);

  const {data: categories} = useGetCategoriesQuery({limit: 40});

  const fetchData = async () => {};

  return (
    <View>
      <ButtonPrimary text={'Login'} onPress={fetchData} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Welcome')}
      />
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

export default LoginScreen;
