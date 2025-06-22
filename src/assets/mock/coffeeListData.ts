import { CoffeeCardInfo } from '@/types/CoffeeCardInfo';

type CoffeeType = 'Doces' | 'Tradicionais' | 'Especiais';
export type CoffeeInfoListType = Omit<CoffeeCardInfo, 'label'>;
interface CoffeeListData {
  title: CoffeeType;
  data: CoffeeInfoListType[];
}

export const coffeeListData: CoffeeListData[] = [
  {
    title: 'Tradicionais',
    data: [
      {
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        imageKey: 'expressoTradicional',
      },
      {
        title: 'Expresso Americano',
        description:
          'Expresso diluído, menos intenso que o tradicionalR$ 9,90        ',
        price: '9,90',
        imageKey: 'expressoAmericano',
      },
      {
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa        ',
        price: '9,90',
        imageKey: 'expressoCremoso',
      },
      {
        title: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        imageKey: 'latte',
      },
      {
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: '9,90',
        imageKey: 'expressoGelado',
      },
    ],
  },
  {
    title: 'Doces',
    data: [
      {
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma',
        price: '9,90',
        imageKey: 'cappucino',
      },
      {
        title: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        imageKey: 'mocaccino',
      },
      {
        title: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café',
        price: '9,90',
        imageKey: 'chocolateQuente',
      },
    ],
  },
  {
    title: 'Especiais',
    data: [
      {
        title: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        imageKey: 'cubano',
      },
      {
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        imageKey: 'havaiano',
      },
      {
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        imageKey: 'arabe',
      },
      {
        title: 'Irlândes',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        imageKey: 'irlandes',
      },
    ],
  },
];
