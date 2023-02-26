import React, {FC} from 'react';
import {TouchableOpacityProps, Text, TouchableOpacity} from 'react-native';
import cn from 'classnames';

export enum ColorType {
  primary = 'primary',
  secondary = 'secondary',
}

interface Props extends TouchableOpacityProps {
  text: string;
  colorType?: ColorType;
}

const ButtonPrimary: FC<Props> = props => {
  const {text, colorType = ColorType.primary, className} = props;

  let typeStyle: string;
  switch (colorType) {
    case ColorType.primary:
      typeStyle = 'bg-primary';
      break;
    case ColorType.secondary:
      typeStyle = 'bg-secondary';
      break;
    default:
      typeStyle = 'bg-secondary';
  }
  console.log(colorType);
  return (
    <TouchableOpacity
      testID={'button-primary'}
      className={cn(
        'm-4 m-1 flex w-32 items-center justify-center rounded-xl py-2 px-4',
        typeStyle,
        className,
      )}>
      <Text className={'capitalize text-white'}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
