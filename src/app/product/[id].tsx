import { CoffeeGoldenPrice } from '@components/CoffeeGoldenPrice';
import { HeaderCart, HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { useLocalSearchParams, router, Link } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Product() {
  const { id } = useLocalSearchParams();

  return (
    <>
      <HeaderContainer>
        <HeaderText>
          <Link href={'/home'}>
            <Icon
              className='color-gray-400'
              width={24}
              height={24}
              as={ArrowLeftIcon}
            />
          </Link>
          <HeaderCart />
        </HeaderText>
      </HeaderContainer>
      <View className='flex-1 bg-gray-900 px-8 pt-3'>
        <View className='flex-1'>
          <Text className='text-white rounded-tag bg-gray-800 self-start px-3 py-[6px] text-tag mb-3'>
            ESPECIAL
          </Text>
          <View className='flex-row justify-between items-center mb-5'>
            <Text className='text-title-lg text-white'>Irlandês</Text>
            <CoffeeGoldenPrice price='9,90' variant='lg' />
          </View>
          <Text className='text-gray-500'>
            Bebida a base de café, uísque irlandês, açúcar e chantilly
          </Text>
        </View>
      </View>
    </>
  );
}
