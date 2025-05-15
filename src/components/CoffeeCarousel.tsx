import { CoffeeCardInfo } from '@/src/types/CoffeeCardInfo';
import Animated from 'react-native-reanimated';
const coffeeList: CoffeeCardInfo[] = [
  {
    title: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa',
    label: 'Tradicional',
    price: '9,90',
    imageUrl: '@assets/img/latte.png',
  },
  {
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, leite e espuma',
    label: 'Doce',
    price: '9,90',
    imageUrl: '@assets/img/mocaccino.png',
  },
  {
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    label: 'Especial',
    price: '9,90',
    imageUrl: '@assets/img/irlandes.png',
  },
];

export const CoffeeCarousel = () => {
  return <Animated.ScrollView horizontal={true}></Animated.ScrollView>;
};
