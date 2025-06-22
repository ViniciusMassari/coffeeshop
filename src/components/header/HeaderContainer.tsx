import { View } from 'react-native';
import { PropsWithChildren } from 'react';

interface HeaderContainerProps {}
export const HeaderContainer = ({
  children,
  ...props
}: PropsWithChildren<HeaderContainerProps>) => {
  return (
    <View
      {...props}
      className='justify-between items-center 
        flex-row sticky bg-gray-900 z-10 min-h-20  px-8 py-5'
    >
      {children}
    </View>
  );
};
