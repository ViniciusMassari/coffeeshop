import React, { useState } from 'react';
import { Button, ButtonIcon } from '@components/ui/button';
import { RemoveIcon } from '@components/ui/icon';
import { ReactComponent } from 'react-native-css-interop/dist/types';

export const InputNumberButton = ({
  icon,
  action,
  changeQuantity,
}: {
  icon: ReactComponent;
  action: 'increase' | 'remove';
  changeQuantity: (action: 'increase' | 'remove') => void;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Button
      className={`${isPressed && 'bg-gray-300'}`}
      isPressed={isPressed}
      onPress={() => {
        setIsPressed(true);
        if (action == 'increase') changeQuantity('increase');
        if (action == 'remove') changeQuantity('remove');
      }}
    >
      <ButtonIcon className='color-purple-300' as={icon} />
    </Button>
  );
};
