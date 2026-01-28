import { SectionList, Text, View } from 'react-native';
import React from 'react';

import { HorizontalCoffeeCard } from '../HorizontalCoffeeCard';
import { CoffeeListHeader } from './CoffeeListHeader';
import { coffeeListData } from '@assets/mock/coffeeListData';

export function CoffeeList() {
  // renderizar componente
  // criar header
  // Link útil https://www.youtube.com/watch?v=ela1Frzg2B8&ab_channel=RodrigoGonçalves
  return (
    <>
      <Text className='font-title color-gray-700 mb-3'>Nossos Cafés</Text>
      <SectionList
        StickyHeaderComponent={({ section: { title } }) => <Text>{title}</Text>}
        ListHeaderComponent={() => <CoffeeListHeader />}
        className='bg-gray-100 flex-1'
        sections={coffeeListData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <HorizontalCoffeeCard cardInfo={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='px-8 mt-4 font-title text-title-xs color-gray-600'>
            {title}
          </Text>
        )}
      />
    </>
  );
}
