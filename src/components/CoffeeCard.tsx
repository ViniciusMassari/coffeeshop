import { Dimensions, Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CoffeeCardInfo } from '../types/CoffeeCardInfo';
import Animated, {
  AnimatedRef,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { coffeeImage } from '../assets/mock/coffeeImage';
import { CoffeeGoldenPrice } from './CoffeeGoldenPrice';
import { Link } from 'expo-router';
import { createAnimatedComponent } from 'react-native-reanimated/lib/typescript/createAnimatedComponent';

interface CoffeeCardProps {
  coffeeCardInfo: CoffeeCardInfo;
  scrollXPosition?: number;
}

export const CoffeeCard = ({
  coffeeCardInfo,
  scrollXPosition,
}: CoffeeCardProps) => {
  const animatedRef: AnimatedRef<Animated.View> = useAnimatedRef();
  const [cardXPosition, setCardXPosition] = useState(0);
  const isCardCentered = useSharedValue(0);

  useEffect(() => {
    const card = animatedRef.current;
    if (card) {
      card.measure((x) => {
        setCardXPosition(x);
      });
    }
  }, [animatedRef.current]);

  useEffect(() => {
    if (scrollXPosition !== undefined) {
      const SCREEN_WIDTH = Dimensions.get('window').width;
      const ITEM_WIDTH = 210;
      const SCREEN_CENTER = scrollXPosition + SCREEN_WIDTH / 2;

      const cardCenter = cardXPosition + ITEM_WIDTH / 2;

      const distanceToCenter = Math.abs(cardCenter - SCREEN_CENTER);

      const isCentered = distanceToCenter < 100; // 100px de diferença é "centralizado o suficiente"

      if (isCentered) {
        isCardCentered.value = withSpring(1, { duration: 1200 });
      } else {
        isCardCentered.value = withSpring(0, { duration: 1200 });
      }
    }
  }, [scrollXPosition, cardXPosition]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(isCardCentered.value, [0, 1], [0.8, 1.0]),
        },
      ],
    };
  });

  return (
    <Animated.View
      ref={animatedRef}
      style={[animatedStyle]}
      className='bg-gray-300 max-h-[240px] mt-2 max-w-52 mr-8  items-center  rounded-tr-[36px] rounded-tl-md rounded-bl-[36px] rounded-br-md shadow-cardShadow'
    >
      <Image
        className='max-w-[120px] max-h-[120px] self-center -mt-10'
        source={coffeeImage[coffeeCardInfo.imageKey]}
        accessibilityLabel={`${coffeeCardInfo.title} image`}
      />
      <View className='mt-2 gap-2 flex flex-col justify-center items-center'>
        <Text className=' text-[10px] uppercase bg color-purple-300 bg-purple-100 px-2 py-1 rounded-[100px] text-center'>
          {coffeeCardInfo.label}
        </Text>
        <Link
          href={{
            pathname: '/product/[id]',
            params: { id: coffeeCardInfo.id },
          }}
        >
          <Text className='color-gray-800 text-title-md  text-center'>
            {coffeeCardInfo.title}
          </Text>
        </Link>
        <Text className='color-gray-600 text-[12px] text-center px-2'>
          {coffeeCardInfo.description}
        </Text>
        <CoffeeGoldenPrice price={coffeeCardInfo.price} />
      </View>
    </Animated.View>
  );
};
