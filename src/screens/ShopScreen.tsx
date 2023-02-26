import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../navigation/RootNavigation';
import React, {FC} from 'react';
import {View} from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary/button-primary';
import {useNavigation} from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<RootStackList>;
}

const ShopScreen: FC<Props> = () => {
  const {goBack} = useNavigation<NativeStackNavigationProp<RootStackList>>();
  return (
    <View>
      <ButtonPrimary text={'Back'} onPress={goBack} />
    </View>
  );
};

export default ShopScreen;
