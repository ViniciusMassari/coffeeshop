import React, { useState } from 'react';
import { Button, ButtonIcon } from '@components/ui/button';
import { ReactComponent } from 'react-native-css-interop/dist/types';
import { ProductInfo } from '@utils/hooks/changeQuantity';

export const InputNumberButton = ({
  icon,
  action,
  changeQuantity,
  productInfo,
}: {
  icon: ReactComponent;
  action: 'increase' | 'remove';
  changeQuantity: (
    action: 'increase' | 'remove',
    productInfo?: ProductInfo
  ) => void;
  productInfo?: ProductInfo;
}) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Button
      className={`${isPressed && 'bg-gray-300'}`}
      isPressed={isPressed}
      onPress={(e) => {
        setIsPressed(true);
        if (action == 'increase') changeQuantity('increase', productInfo);
        if (action == 'remove') changeQuantity('remove', productInfo);
      }}
    >
      <ButtonIcon className='color-purple-300' as={icon} />
    </Button>
  );
};
