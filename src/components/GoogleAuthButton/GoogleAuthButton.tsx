import cn from 'classnames';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import React, {FC} from 'react';

interface Props extends TouchableOpacityProps {
  text: string;
}

const GoogleAuthButton: FC<Props> = props => {
  const {text} = props;
  return (
    <TouchableOpacity
      testID={'button-primary'}
      className={cn(
        'm-4 m-1 flex w-32 items-center justify-center rounded-xl py-2 px-4',
      )}>
      <Text className={'capitalize text-white'}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GoogleAuthButton;
