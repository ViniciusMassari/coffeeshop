import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { InputNumberButton } from './InputNumberButton';
import { AddIcon, RemoveIcon } from '@components/ui/icon';

const InputNumberComponent = ({
  quantity = 1,
  changeQuantity,
}: {
  quantity: number;
  changeQuantity: (action: 'increase' | 'remove') => void;
}) => {
  return (
    <View className='flex-row rounded-md gap-1 items-center border border-gray-400'>
      <InputNumberButton
        action='remove'
        changeQuantity={changeQuantity}
        icon={RemoveIcon}
      />

      <Text className='text-title-sm font-normal'>{quantity}</Text>
      <InputNumberButton
        action='increase'
        changeQuantity={changeQuantity}
        icon={AddIcon}
      />
    </View>
  );
};

export const InputNumber = memo(InputNumberComponent);
