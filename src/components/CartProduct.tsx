import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { coffeeImage } from '@assets/mock/coffeeImage';
import { InputNumber } from './InputNumber';
import { useChangeQuantity } from '@utils/hooks/changeQuantity';
import { Icon } from './ui/icon';
import Trash from '@assets/Trash';

export const CartProduct = () => {
  const { quantity, changeQuantity } = useChangeQuantity();
  return (
    <View className=' h-[117px] flex-1 flex-row items-center py-4 px-8'>
      <Image className='w-16 h-16 mr-5' source={coffeeImage['cappucino']} />
      <View>
        <Text className='text-title-sm font-body font-normal color-gray-900'>
          Irlandês
        </Text>
        <Text className='text-title-xs font-body font-normal color-gray-600 mb-2'>
          227ml
        </Text>
        <View className='flex-row items-center gap-2'>
          <InputNumber quantity={quantity} changeQuantity={changeQuantity} />
          <Pressable className='bg-gray-300 p-2'>
            <Icon as={Trash} className='color-purple-300' />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
