import {View, Text, FlatList} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import {useTranslation} from 'react-i18next';
import {LOGOUT} from '../store/auth/auth.slice';
import {useAppDispatch} from '../hooks';
import ButtonPrimary from '../components/ButtonPrimary/button-primary';
import {useQuery} from '@apollo/client';
import {graphql} from '../gql';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const WelcomeScreen: FC<Props> = () => {
  const {navigate} = useNavigation<NativeStackNavigationProp<RootStackList>>();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const {data, refetch} = useQuery(getCategories, {
    variables: {
      offset: 0,
      pageSize: 10,
    },
  });

  useFocusEffect(
    useCallback(() => {
      void refetch();
    }, [refetch]),
  );

  return (
    <View className={'p-2'}>
      <Text>{t('common:contacts')}</Text>
      <View className={'mb-2 flex-row'}>
        <ButtonPrimary text={'Logout'} onPress={() => dispatch(LOGOUT())} />
        <ButtonPrimary text={'Shop'} onPress={() => navigate('Shop')} />
      </View>
      <View />
    </View>
  );
};

const getCategories = graphql(/* GraphQL */ `
  query categories($pageSize: Int!, $offset: Int!) {
    categories(limit: $pageSize, page: $offset) {
      id
      name
      category_order
    }
  }
`);

export default WelcomeScreen;
