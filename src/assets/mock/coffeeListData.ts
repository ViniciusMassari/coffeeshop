import { CoffeeCardInfo } from 'src/types/CoffeeCardInfo';

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
        id: 1,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: '9,90',
        imageKey: 'expressoTradicional',
      },
      {
        id: 2,
        title: 'Expresso Americano',
        description:
          'Expresso diluído, menos intenso que o tradicionalR$ 9,90        ',
        price: '9,90',
        imageKey: 'expressoAmericano',
      },
      {
        id: 3,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa        ',
        price: '9,90',
        imageKey: 'expressoCremoso',
      },
      {
        id: 4,
        title: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa',
        price: '9,90',
        imageKey: 'latte',
      },
      {
        id: 5,
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
        id: 6,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses de café, leite e espuma',
        price: '9,90',
        imageKey: 'cappucino',
      },
      {
        id: 7,
        title: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma',
        price: '9,90',
        imageKey: 'mocaccino',
      },
      {
        id: 8,
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
        id: 9,
        title: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: '9,90',
        imageKey: 'cubano',
      },
      {
        id: 10,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: '9,90',
        imageKey: 'havaiano',
      },
      {
        id: 11,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: '9,90',
        imageKey: 'arabe',
      },
      {
        id: 12,
        title: 'Irlândes',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: '9,90',
        imageKey: 'irlandes',
      },
    ],
  },
];

export function coffeeSearch(id: number) {
  const coffees = coffeeListData.flatMap((c) => c.data);
  const coffeeData = coffees.find((coffee) => coffee.id == id);
  return coffeeData;
}
