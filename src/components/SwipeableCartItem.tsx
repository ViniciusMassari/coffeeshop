import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Icon } from './ui/icon';
import Trash from '@assets/Trash';
import { CartProduct } from './CartProduct';

export const SwipeableCartItem = () => {
  return (
    <Swipeable
      leftThreshold={10}
      renderRightActions={() => <></>}
      renderLeftActions={() => (
        <Pressable className='py-4 px-8 justify-center w-full bg-error-100'>
          <Icon as={Trash} className='color-error-700 ' />
        </Pressable>
      )}
    >
      <CartProduct />
    </Swipeable>
  );
};
