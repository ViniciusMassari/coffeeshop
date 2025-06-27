import { View, Text } from 'react-native';
import React from 'react';
import { InputNumberButton } from './InputNumberButton';
import { AddIcon, RemoveIcon } from '@components/ui/icon';

export const InputNumber = ({
  quantity = 1,
  changeQuantity,
}: {
  quantity: number;
  changeQuantity: (action: 'increase' | 'remove') => void;
}) => {
  return (
    <View className='flex-row rounded-md gap-1 items-center'>
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
