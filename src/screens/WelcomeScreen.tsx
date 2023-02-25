import {View, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {useTranslation} from 'react-i18next';
import {useQuery, gql} from '@apollo/client';
interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const WelcomeScreen: FC<Props> = () => {
  const {t} = useTranslation();




  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Text>{t('common:contacts')}</Text>

      {/*    <Button
        onPress={() => i18n.changeLanguage('en')}
        title={t('switchLanguage', {lng: 'en'})}
      />
      <Button
        onPress={() => i18n.changeLanguage('ru')}
        title={t('switchLanguage', {lng: 'ru'})}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />*/}
    </View>
  );
};



export default WelcomeScreen;
