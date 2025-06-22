import { Text, Pressable } from 'react-native';
import React, { useState } from 'react';
interface TagProps {
  label: string;
  handleScrollTo: (option: string) => void;
}
export const Tag = ({ label, handleScrollTo }: TagProps) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Pressable
      onPressIn={() => {
        setIsPressed(true);
        handleScrollTo(label);
      }}
      onPressOut={() => setIsPressed(false)}
      className={`border rounded-[100px] px-3 py-[6px] ${
        isPressed ? 'bg-purple-300 border-transparent' : ''
      }`}
    >
      <Text
        className={`uppercase ${
          isPressed ? 'text-white' : 'color-purple-700'
        } text-tag`}
      >
        {label}
      </Text>
    </Pressable>
  );
};
