import { CoffeeCardInfo } from '@/src/types/CoffeeCardInfo';
import Animated from 'react-native-reanimated';
import { CoffeeCard } from './CoffeeCard';
import { useState } from 'react';
const coffeeList: CoffeeCardInfo[] = [
  {
    title: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    label: 'Tradicional',
    price: '9,90',
    imageKey: 'latte',
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    label: 'Doce',
    price: '9,90',
    imageKey: 'mocaccino',
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    label: 'Especial',
    price: '9,90',
    imageKey: 'irlandes',
  },
];

export const CoffeeCarousel = () => {
  const [scrollXPosition, setScrollX] = useState(0);

  return (
    <Animated.ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      bounces={false}
      overScrollMode={'never'}
      onScroll={(e) => {
        setScrollX(e.nativeEvent.contentOffset.x);
      }}
      scrollEventThrottle={16}
      className='-mt-32 p-5 pt-12  flex-1 mb-12'
    >
      {coffeeList.map((coffee) => {
        return (
          <CoffeeCard
            key={coffee.title}
            scrollXPosition={scrollXPosition}
            coffeeCardInfo={coffee}
          />
        );
      })}
    </Animated.ScrollView>
  );
};
