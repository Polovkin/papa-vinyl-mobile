import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import ButtonPrimary, {
  ColorType,
} from '../components/ButtonPrimary/ButtonPrimary';
import HttpService from '../services/http/http.service';
import {useAppDispatch, useAppSelector} from '../hooks';
import {LOGOUT} from '../store/auth/auth-async.actions';
import {SET_ACCESS_TOKEN} from '../store/auth/auth.slice';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const ShopScreen: FC<Props> = () => {
  const {
    auth: {accessToken},
  } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const check = async () => {
    await HttpService.post('/categories', {
      name: Math.random().toString(36).substring(7),
      order: 1,
    });
  };

  const brokeToken = async () => {
    dispatch(SET_ACCESS_TOKEN('broke'));
  };
  return (
    <View className={'pt-10'}>
      <Text>{accessToken}</Text>
      <ButtonPrimary text={'Logout'} onPress={() => dispatch(LOGOUT())} />
      <ButtonPrimary text={'broke'} onPress={brokeToken} />
      <ButtonPrimary
        onPress={check}
        className={'mb-auto'}
        text={'check'}
        colorType={ColorType.secondary}
      />
    </View>
  );
};

export default ShopScreen;
