import { View, Text } from 'react-native';
import React, { memo } from 'react';
import { InputNumberButton } from './InputNumberButton';
import { AddIcon, RemoveIcon } from '@components/ui/icon';

interface InputNumberProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const InputNumber = memo(
  ({ quantity, onIncrease, onDecrease }: InputNumberProps) => {
    return (
      <View className='flex-row rounded-md gap-1 items-center border border-gray-400'>
        <InputNumberButton icon={RemoveIcon} onPress={onDecrease} />

        <Text className='text-title-sm font-normal'>{quantity}</Text>

        <InputNumberButton icon={AddIcon} onPress={onIncrease} />
      </View>
    );
  },
);
