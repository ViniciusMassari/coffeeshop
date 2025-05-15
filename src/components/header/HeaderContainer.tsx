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
      className='justify-between items-center flex-row absolute z-10 inset-0 h-20 bg-transparent px-8 mt-12'
    >
      {children}
    </View>
  );
};
