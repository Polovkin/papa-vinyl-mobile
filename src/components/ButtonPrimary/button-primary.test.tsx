import React from 'react';
import ButtonPrimary from './button-primary';
import {render, fireEvent} from '@testing-library/react-native';

describe('ButtonPrimary', () => {
  it('renders text', () => {
    const {getByText} = render(<ButtonPrimary text={'button'} />);
    const text = getByText('button');
    expect(text.props.children).toBe('button');
  });

  it('handles onPress', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <ButtonPrimary text={'button'} onPress={onPress} />,
    );
    fireEvent.press(getByTestId('button-primary'));
    expect(onPress).toHaveBeenCalled();
  });
});
