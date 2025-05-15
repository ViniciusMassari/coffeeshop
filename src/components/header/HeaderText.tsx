import { View } from 'react-native';
import { PropsWithChildren } from 'react';
interface HeaderTextProps {}
export const HeaderText = ({
  children,
  ...props
}: PropsWithChildren<HeaderTextProps>) => {
  return (
    <View {...props} className='flex flex-row justify-center items-center'>
      {children}
    </View>
  );
};
