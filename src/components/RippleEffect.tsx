import React, { type ReactNode, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import {
  useSharedValue,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import { Canvas, Circle } from '@shopify/react-native-skia';

const { width, height } = Dimensions.get('window');

const RippleEffect = ({ children }: { children: ReactNode }) => {
  const radius = useSharedValue(0);

  // Valores para gerar o círculo no centro da tela
  const centerX = width / 2;
  const centerY = height / 2;

  // monitora mudança no valor de radius e reativa a animação quando houver mudança
  const animatedRadius = useDerivedValue(() => {
    return withTiming(radius.value, { duration: 1500 });
  });

  useEffect(() => {
    // Calculando hipotenusa para que o círculo cubra toda a tela
    radius.value = width * 2 + height * 2;
  }, []);

  return (
    <View className='flex-1 bg-purple-700'>
      <Canvas style={{ width, height, position: 'absolute' }}>
        <Circle
          cx={centerX}
          cy={centerY}
          r={animatedRadius}
          color={'#8047F8'}
        />
      </Canvas>
      {children}
    </View>
  );
};

export default RippleEffect;
