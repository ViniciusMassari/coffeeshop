import { Dimensions, Pressable, Text, View } from 'react-native';
import { HStack } from './ui/hstack';
import { ArrowRightIcon, Icon } from './ui/icon';
import CartSVG from '@assets/Cart';
import { Box } from './ui/box';
import { router } from 'expo-router';
import { ToastConfigParams } from 'toastify-react-native/utils/interfaces';
import { useCart } from 'src/context/CartContext';

export function AddedToCartToast(props: ToastConfigParams) {
  const screenWidth = Dimensions.get('screen').width;
  const { state } = useCart();

  return (
    <HStack
      style={{ width: screenWidth }}
      className=' bg-white px-8 py-7 gap-5 '
    >
      <Box className='justify-center items-center -mt-2'>
        <View className='rounded-full  items-center -right-3 -mb-2 text-center h-5 w-5 bg-purple-300 z-10'>
          <Text className='text-white text-sm'>{state.items.length}</Text>
        </View>
        <Icon
          className='color-white bg-gray-500 rounded-md h-10 w-10'
          as={CartSVG}
        />
      </Box>
      <Text className='text-title-xs text-gray-600 flex-shrink'>
        {props.text1}
      </Text>
      <Pressable
        onPress={() => router.navigate('/cart')}
        className='flex flex-row items-center justify-center p-0 m-0  gap-1'
      >
        <Text className='text-title-xxs color-purple-300'>VER</Text>
        <Icon className='p-0 m-0 color-purple-300' as={ArrowRightIcon} />
      </Pressable>
    </HStack>
  );
}
