import React, { useEffect, useState } from 'react';
import Animated, { LinearTransition, runOnJS } from 'react-native-reanimated';
import { CoffeeCup } from '@assets/CoffeeCup';
import { Logo } from '@assets/Logo';
import { router } from 'expo-router';

export const SplashScreenLogo = () => {
  const [renderLogo, setRenderLogo] = useState(false);

  useEffect(() => {
    const renderLogoInterval = setTimeout(() => {
      setRenderLogo(true);
    }, 1500);

    return () => clearTimeout(renderLogoInterval);
  }, []);

  return (
    <Animated.View
      layout={LinearTransition.springify().withCallback((finished) => {
        if (finished) {
          runOnJS(router.navigate)('/home');
        }
      })}
      className='flex-row gap-4'
    >
      <CoffeeCup />
      {renderLogo && <Logo />}
    </Animated.View>
  );
};
