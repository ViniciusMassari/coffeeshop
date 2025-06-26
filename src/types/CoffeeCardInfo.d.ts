import { coffeeImage } from '../assets/mock/coffeeImage';

type Label = 'Tradicional' | 'Doce' | 'Especial';

export interface CoffeeCardInfo {
  id:number;
  title: string;
  label: Label;
  description: string;
  price: string;
  imageKey: keyof typeof coffeeImage;
}
