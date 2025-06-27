import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

interface SelectProps extends PropsWithChildren<ViewProps> {}

export const Select = ({ children, ...props }: SelectProps) => {
  return <View {...props}>{children}</View>;
};
