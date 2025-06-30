import React from 'react';
import { HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { Link } from 'expo-router';
import { Text } from 'react-native';

export default function Cart() {
  return (
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
  );
}
