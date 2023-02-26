import React, {FC} from 'react';
import {View} from 'react-native';

type Props = {
  children: React.ReactNode;
};

const AuthLayout: FC<Props> = ({children}) => {
  return (
    <View className={'flex flex-1 items-center justify-center p-2'}>
      {children}
    </View>
  );
};

export default AuthLayout;
