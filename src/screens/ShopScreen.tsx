import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import React, {FC} from 'react';
import {View} from 'react-native';
import ButtonPrimary, {
  ColorType,
} from '../components/ButtonPrimary/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import HttpService from '../services/http/http.service';
import {useAppDispatch, useAppSelector} from '../hooks';
import {LOGOUT} from '../store/auth/auth-async.actions';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const ShopScreen: FC<Props> = () => {
  const {
    auth: {accessToken},
  } = useAppSelector(state => state.auth);
  const {goBack} = useNavigation<NativeStackNavigationProp<RootStackList>>();

  const dispatch = useAppDispatch();

  const check = async () => {
    await HttpService.post(
      '/auth/refreshtoken',
      {},
      {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
  };
  return (
    <View>
      <ButtonPrimary text={'Logout'} onPress={() => dispatch(LOGOUT())} />
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
