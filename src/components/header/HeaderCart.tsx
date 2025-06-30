import { View, Text } from 'react-native';

import { Box } from '../ui/box';
import Cart from '../../assets/Cart';
import { Link } from 'expo-router';

export const HeaderCart = () => {
  return (
    <Box className='justify-center items-center -mt-2'>
      <View className='rounded-full  items-center -right-3 -mb-2 text-center h-5 w-5 bg-purple-700 '>
        <Text className='text-white text-sm'>1</Text>
      </View>
      <Link href={'/cart'}>
        <Cart pathFill='#C47F17' />
      </Link>
    </Box>
  );
};
