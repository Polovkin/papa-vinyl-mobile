import {Text} from 'react-native';
import React, {FC} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import ButtonPrimary, {
  ColorType,
} from '../components/ButtonPrimary/button-primary';
import AuthLayout from '../components/layouts/AuthLayout/AuthLayout';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const WelcomeScreen: FC<Props> = () => {
  return (
    <AuthLayout>
      <Text className={'mb-10 text-6xl font-bold text-white'}>PAPA VINYL</Text>
      <ButtonPrimary
        className={'mb-auto'}
        text={'login'}
        colorType={ColorType.secondary}
      />
      <ButtonPrimary
        className={'mb-auto'}
        text={'register'}
        colorType={ColorType.secondary}
      />
    </AuthLayout>
  );
};

export default WelcomeScreen;
