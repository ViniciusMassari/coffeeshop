import React, { PropsWithChildren } from 'react';
import { HStack } from '../ui/hstack';

interface CoffeeListHeaderProps extends PropsWithChildren {}
export const CoffeeListHeader = ({ children }: CoffeeListHeaderProps) => {
  return <HStack className='gap-2  mb-8 px-8'>{children}</HStack>;
};
