import { View, Text, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useCart } from 'src/context/CartContext';
import { router } from 'expo-router';

export const ConfirmOrder = () => {
  const { calculateTotal, state, clearCart } = useCart();
  const [total, setTotal] = useState('');
  useEffect(() => {
    setTotal(calculateTotal().toFixed(2).toString());
  }, [state]);

  return (
    <View className='px-8 pt-6 shadow-confirmOrder bg-white h-52'>
      <View className='flex-row justify-between w-full mb-5'>
        <Text className='text-title-sm font-normal'>Valor Total</Text>
        <Text className='font-title text-title-md'>R$ {total}</Text>
      </View>
      <Pressable
        className='bg-yellow-700 py-3 px-2 rounded-md'
        onPress={() => {
          clearCart();
          router.navigate('/finishedOrder');
        }}
      >
        <Text className='text-center text-white text-title-xs'>
          CONFIRMAR PEDIDO
        </Text>
      </Pressable>
    </View>
  );
};
