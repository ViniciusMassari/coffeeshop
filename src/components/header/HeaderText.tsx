import { View } from 'react-native';
import { PropsWithChildren } from 'react';
interface HeaderTextProps {}
export const HeaderText = ({
  children,
  ...props
}: PropsWithChildren<HeaderTextProps>) => {
  return (
    <View
      {...props}
      className='flex-1 flex-row justify-between items-center text-center mt-7 '
    >
      {children}
    </View>
  );
};
