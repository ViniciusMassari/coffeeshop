import { View, Text } from 'react-native';
import React, { PropsWithChildren, ReactNode } from 'react';
interface HeaderContainerProps {}
export const HeaderContainer = ({
  children,
  ...props
}: PropsWithChildren<HeaderContainerProps>) => {
  return (
    <View {...props} className='justify-center items-center flex-row'>
      {children}
    </View>
  );
};
