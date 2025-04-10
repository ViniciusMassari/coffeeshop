import { View, Text } from 'react-native';

import React from 'react';
import { Box } from '../ui/box';
import { VStack } from '../ui/vstack';
import { Badge, BadgeText } from '../ui/badge';
import Cart from '../../assets/Cart';

export const HeaderCart = () => {
  return (
    <Box className='justify-center'>
      <View className='rounded-full items-center  absolute -right-6 text-center h-5 w-5 bg-purple-700 '>
        <Text className='text-white text-sm'>1</Text>
      </View>
      <Cart pathFill='#C47F17' />
    </Box>
  );
};
