import React from 'react';
import { HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { Link } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SwipeableCartItem } from '@components/SwipeableCartItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ConfirmOrder } from '@components/ConfirmOrder';
import CartSVG from '@assets/Cart';

export default function Cart() {
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
            CONFIRMAR PEDIDO
          </Text>
        </Link>
      </View>
      {/* <ScrollView>
        <GestureHandlerRootView>
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
          <SwipeableCartItem />
        </GestureHandlerRootView>
      </ScrollView>
      <ConfirmOrder /> */}
    </>
  );
}
