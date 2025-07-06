import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ConfirmOrder = () => {
  return (
    <View className='px-8 pt-6 shadow-confirmOrder bg-white h-52'>
      <View className='flex-row justify-between w-full mb-5'>
        <Text className='text-title-sm font-normal'>Valor Total</Text>
        <Text className='font-title text-title-md'>R$ 9,90</Text>
      </View>
      <Pressable className='bg-yellow-700 py-3 px-2 rounded-md'>
        <Text className='text-center text-white text-title-xs'>
          CONFIRMAR PEDIDO
        </Text>
      </Pressable>
    </View>
  );
};
