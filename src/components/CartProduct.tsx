import { View, Text, Image, Pressable } from 'react-native';
import React, { memo, useCallback } from 'react';
import { coffeeImage } from '@assets/mock/coffeeImage';
import { InputNumber } from './InputNumber';
import { Icon } from './ui/icon';
import Trash from '@assets/Trash';
import {
  CartProduct as CartProductType,
  useCart,
} from 'src/context/CartContext';

interface CartProductProps {
  cartProductInfo: CartProductType;
}

export const CartProduct = memo(({ cartProductInfo }: CartProductProps) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleIncrease = useCallback(() => {
    updateQuantity(
      cartProductInfo.id,
      cartProductInfo.quantity + 1,
      cartProductInfo.ml,
    );
  }, [cartProductInfo, updateQuantity]);

  const handleDecrease = useCallback(() => {
    if (cartProductInfo.quantity <= 1) return;

    updateQuantity(
      cartProductInfo.id,
      cartProductInfo.quantity - 1,
      cartProductInfo.ml,
    );
  }, [cartProductInfo, updateQuantity]);

  return (
    <View className='h-[117px] flex-1 flex-row items-center py-4 px-8 bg-gray-100 border-b border-b-gray-300'>
      <Image
        className='w-16 h-16 mr-5'
        source={
          // @ts-ignore
          coffeeImage[
            cartProductInfo.product_name.replace(/\s+/g, '').toLowerCase()
          ]
        }
      />

      <View>
        <Text className='text-title-sm font-body font-normal color-gray-900'>
          {cartProductInfo.product_name}
        </Text>

        <Text className='text-title-xs font-body font-normal color-gray-600 mb-2'>
          {cartProductInfo.ml}
        </Text>

        <View className='flex-row items-center gap-2'>
          <InputNumber
            quantity={cartProductInfo.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />

          <Pressable
            className='bg-gray-300 p-2'
            onPress={() =>
              removeFromCart(cartProductInfo.id, cartProductInfo.ml)
            }
          >
            <Icon as={Trash} className='color-purple-300' />
          </Pressable>
        </View>
      </View>

      <View className='flex-row-reverse flex-1 h-full'>
        <Text className='font-title text-title-sm'>
          R${cartProductInfo.price.toFixed(2)}
        </Text>
      </View>
    </View>
  );
});
