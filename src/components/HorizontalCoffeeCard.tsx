import { View, Text, Image } from 'react-native';
import React from 'react';
import { CoffeeInfoListType } from '../assets/mock/coffeeListData';
import { coffeeImage } from '../assets/mock/coffeeImage';
import { Link } from 'expo-router';
interface HorizontalCoffeeCardProps {
  cardInfo: CoffeeInfoListType;
}

export const HorizontalCoffeeCard = ({
  cardInfo,
}: HorizontalCoffeeCardProps) => {
  const image = coffeeImage[cardInfo.imageKey];
  return (
    <Link
      href={{ pathname: '/product/[id]', params: { id: cardInfo.id } }}
      className='mt-8 mx-8'
    >
      <View className='bg-gray-300 rounded-tr-[36px] rounded-tl-md rounded-bl-[36px] rounded-br-md flex-row gap-3 mt-8 mx-8'>
        <Image className='w-24 h-24 -mt-4 ml-2' source={image} />
        <View className='shrink gap-2 mt-2 text-center'>
          <Text className='font-title text-title-sm uppercase color-gray-800'>
            {cardInfo.title}
          </Text>
          <Text className='px-1'>{cardInfo.description}</Text>
          <Text className='text-title-lg color-yellow-700 mb-2'>
            <Text className='text-title-xs'>R$</Text> {cardInfo.price}
          </Text>
        </View>
      </View>
    </Link>
  );
};
