import React, { memo } from 'react';
import { Button, ButtonIcon } from '@components/ui/button';
import { ReactComponent } from 'react-native-css-interop/dist/types';

interface InputNumberButtonProps {
  icon: ReactComponent;
  onPress: () => void;
}

export const InputNumberButton = memo(
  ({ icon, onPress }: InputNumberButtonProps) => {
    return (
      <Button onPress={onPress} className='data-[pressed=true]:bg-gray-300'>
        <ButtonIcon className='color-purple-300' as={icon} />
      </Button>
    );
  },
);
