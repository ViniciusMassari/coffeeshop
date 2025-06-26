import React from 'react';
import { Text } from 'react-native';
import { TextProps } from 'react-native';

export function CoffeeGoldenPrice({
  price,
  variant = 'md',
  ...props
}: {
  price: string;
  variant?: 'md' | 'lg';
  props?: TextProps;
}) {
  return (
    <Text
      {...props}
      className={`${
        variant == 'md' ? 'text-title-lg' : 'text-title-xl'
      } color-yellow-700 mb-2`}
    >
      <Text className='text-title-xs'>R$</Text>
      {price}
    </Text>
  );
}
