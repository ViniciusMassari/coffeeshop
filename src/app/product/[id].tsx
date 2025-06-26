import { HeaderCart, HeaderContainer, HeaderText } from '@components/header';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { useLocalSearchParams, router, Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

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
    </>
  );
}
