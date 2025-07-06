import React, { type ReactNode, useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import { Canvas, Circle } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('screen');

const RippleEffect = ({ children }: { children: ReactNode }) => {
  const radius = useSharedValue(0);

  // Valores para gerar o círculo no centro da tela
  const centerX = width / 2;
  const centerY = height / 2;

  useEffect(() => {
    const finalRadius = Math.hypot(width, height);
    radius.value = withTiming(finalRadius, {
      duration: 1500,
    });
  }, []);

  return (
    <View className='flex-1 bg-purple-700 '>
      <Canvas style={{ width, height, position: 'absolute', flex: 1 }}>
        <Circle cx={centerX} cy={centerY} r={radius} color={'#8047F8'} />
      </Canvas>
      {children}
    </View>
  );
};

export default RippleEffect;
