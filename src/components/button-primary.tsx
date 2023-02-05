import React, {ComponentProps, FC} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import cn from 'classnames';

interface Props extends ComponentProps<typeof TouchableOpacity> {
  text: string;
}

const ButtonPrimary: FC<Props> = props => {
  const {className, text} = props;
  return (
    <TouchableOpacity
      {...props}
      className={cn(
        'm-4 flex w-32 items-center justify-center rounded-xl bg-primary py-2 px-4',
        className,
      )}>
      <Text className={'text-white'}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
