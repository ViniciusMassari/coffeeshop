type Label = 'Tradicional' | 'Doce' | 'Especial';

export interface CoffeeCardInfo {
  title: string;
  imageUrl: string;
  label: Label;
  description: string;
  price: string;
}
