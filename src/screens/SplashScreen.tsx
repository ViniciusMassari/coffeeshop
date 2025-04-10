import React from 'react';
import { Center } from '@components/ui/center';
import { SplashScreenLogo } from '@components/SplashScreenLogo';
import Animated from 'react-native-reanimated';

export const SplashScreen = () => {
  return (
    <Animated.View className='flex-1'>
      <Center className='items-center flex-row flex-1'>
        <SplashScreenLogo />
      </Center>
    </Animated.View>
  );
};
