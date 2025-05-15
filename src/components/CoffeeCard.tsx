import { Image, Text, View } from 'react-native';
import React from 'react';
import { VStack } from './ui/vstack';

export const CoffeeCard = () => {
  return (
    <View className='bg-gray-300 max-w-52 min-h-[262px] max-h-[262px] items-center  self-center w-full rounded-tr-[36px] rounded-tl-md rounded-bl-[36px] rounded-br-md'>
      <Image
        className='max-w-[120px] max-h-[120px] self-center -mt-6'
        source={require('@assets/img/latte.png')}
      />

      <Text className='mt-2 text-[10px] uppercase bg color-purple-300 bg-purple-100 px-2 py-1 rounded-[100px] text-center'>
        Especial
      </Text>
      <Text className='color-gray-800 text-title-md mt-3 text-center'>
        Irlândes
      </Text>
      <Text className='color-gray-600 text-[12px] text-center px-2'>
        Bebida a base de café, uísque irlandês, açúcar e chantilly
      </Text>
      <Text className='mt-4 text-title-lg color-yellow-700'>
        {' '}
        <Text className='text-title-xs'>R$</Text> 9,90
      </Text>
    </View>
  );
};
