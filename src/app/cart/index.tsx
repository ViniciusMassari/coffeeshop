import React from 'react';
import { HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { SwipeableCartItem } from '@components/SwipeableCartItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ConfirmOrder } from '@components/ConfirmOrder';

export default function Cart() {
  return (
    <>
      <HeaderContainer bg='#FAFAFA'>
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
      <ScrollView>
        <GestureHandlerRootView>
          <SwipeableCartItem />
        </GestureHandlerRootView>
      </ScrollView>
    </>
  );
}
