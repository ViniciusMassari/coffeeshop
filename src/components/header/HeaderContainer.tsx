import { View, ViewProps } from 'react-native';
import { PropsWithChildren } from 'react';

interface HeaderContainerProps extends ViewProps {
  bg?: string;
}
export const HeaderContainer = ({
  children,
  bg,
  ...props
}: PropsWithChildren<HeaderContainerProps>) => {
  const defaultColor = '#272221';
  return (
    <View
      style={{ backgroundColor: bg || defaultColor }}
      {...props}
      className='justify-between items-center flex-row sticky bg-gray-900 z-10 min-h-20  px-8 py-5'
    >
      {children}
    </View>
  );
};
