import {View, Text, Button} from 'react-native';
import React, {FC} from 'react';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigation';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const WelcomeScreen: FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default WelcomeScreen;
