import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { Icon } from './ui/icon';
import Trash from '@assets/Trash';
import { CartProduct } from './CartProduct';
import {
  CartProduct as CartProductType,
  useCart,
} from 'src/context/CartContext';
interface SwipeableCartItemProps {
  cartProductInfo: CartProductType;
}
export const SwipeableCartItem = ({
  cartProductInfo,
}: SwipeableCartItemProps) => {
  const { removeFromCart } = useCart();
  return (
    <Swipeable
      leftThreshold={10}
      onSwipeableOpen={() => {
        removeFromCart(cartProductInfo.id, cartProductInfo.ml);
      }}
      renderRightActions={() => <></>}
      renderLeftActions={() => (
        <Pressable className='py-4 px-8 justify-center w-full bg-error-100'>
          <Icon as={Trash} className='color-error-700 ' />
        </Pressable>
      )}
    >
      <CartProduct
        productId={cartProductInfo.id}
        cartProductInfo={cartProductInfo}
      />
    </Swipeable>
  );
};
