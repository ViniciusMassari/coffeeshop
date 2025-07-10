import { View, Text } from 'react-native';

import { Box } from '../ui/box';
import { Link } from 'expo-router';
import CartSVG from '../../assets/Cart';
import { useCart } from 'src/context/CartContext';

export const HeaderCart = () => {
  const { state } = useCart();

  return (
    <Box className='justify-center items-center -mt-2'>
      <View className='rounded-full  items-center -right-3 -mb-2 text-center h-5 w-5 bg-purple-700 '>
        <Text className='text-white text-sm'>
          {state && state.items.length}
        </Text>
      </View>
      <Link href={'/cart'}>
        <CartSVG pathFill='#C47F17' />
      </Link>
    </Box>
  );
};
