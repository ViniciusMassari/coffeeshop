import IllustrationSVG from '@assets/IllustrationSVG';
import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  SlideInLeft,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FinishedOrder() {
  return (
    <SafeAreaView className='flex-1 items-center '>
      <Animated.View
        className='mt-[68px]'
        entering={SlideInLeft.duration(1000).easing(Easing.out(Easing.ease))}
      >
        <IllustrationSVG />
      </Animated.View>
      <Animated.View
        className='mt-10 gap-2'
        entering={FadeInDown.duration(1000)}
      >
        <Text className='text-title-lg font-title color-yellow-700 text-center '>
          Uhu! Pedido confirmado
        </Text>
        <Text className='color-gray-800 flex-row  px-16 text-center'>
          Agora é só aguardar que logo o café chegará até você!
        </Text>
      </Animated.View>
      <Animated.View entering={FadeIn.delay(1100)}>
        <Link
          href={'/home'}
          className='mt-16 bg-purple-700 py-3 px-4 rounded-md  w-52'
        >
          <Text className='text-center text-white text-title-xs'>
            CONFIRMAR PEDIDO
          </Text>
        </Link>
      </Animated.View>
    </SafeAreaView>
  );
}
