import React, {FC} from 'react';
import {TouchableOpacityProps, Text, TouchableOpacity} from 'react-native';
import cn from 'classnames';

interface Props extends TouchableOpacityProps {
  text: string;
}

const ButtonPrimary: FC<Props> = props => {
  const {className} = props;
  return (
    <TouchableOpacity
      testID={'button-primary'}
      {...props}
      className={cn(
        'm-4 m-1 flex w-32 items-center justify-center rounded-xl bg-primary py-2 px-4',
        className,
      )}>
      <Text className={'text-white'}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
