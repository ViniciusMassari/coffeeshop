import { HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SwipeableCartItem } from '@components/SwipeableCartItem';
import { ConfirmOrder } from '@components/ConfirmOrder';
import 'react-native-gesture-handler';
import Animated, { FadingTransition } from 'react-native-reanimated';
import { CartItem, useCart } from 'src/context/CartContext';
import CartSVG from '@assets/Cart';
import { useEffect, useState } from 'react';

export default function Cart() {
  const { state } = useCart();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(state.items);
  }, [state.items]);
  return (
    <>
      <HeaderContainer bg='#FAFAFA' className='border-b'>
        <HeaderText>
          <Link href={'/home'}>
            <Icon
              className='color-gray-900'
              width={24}
              height={24}
              as={ArrowLeftIcon}
            />
          </Link>
          <Text className='flex-1 text-center color-gray-800 text-title-sm font-title'>
            Carrinho
          </Text>
        </HeaderText>
      </HeaderContainer>
      {cartItems.length > 0 ? (
        <>
          <Animated.ScrollView layout={FadingTransition.duration(500)}>
            <GestureHandlerRootView>
              {state.items.map((product) => {
                return (
                  <SwipeableCartItem
                    key={product.id + Math.random()}
                    cartProductInfo={product}
                  />
                );
              })}
            </GestureHandlerRootView>
          </Animated.ScrollView>
          <ConfirmOrder />
        </>
      ) : (
        <View className='items-center flex-1 bg-white '>
          <View className='items-center mt-16'>
            <CartSVG pathFill='#D7D5D5' />
            <Text className='text-title-xs font-normal color-gray-600'>
              Seu carrinho está vazio
            </Text>
          </View>
          <Link
            href={'/home'}
            className='mt-8 bg-purple-700 py-3 px-4 rounded-md w-[247px]'
          >
            <Text className='text-center text-white text-title-xs'>
              VOLTAR PARA HOME
            </Text>
          </Link>
        </View>
      )}
    </>
  );
}
