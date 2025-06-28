import { Pressable, Text } from 'react-native';
import React, { memo, useEffect, useState } from 'react';

interface SelectButtonProps {
  buttonText: string;
  selectedOption: string;
  onPress: (newMl: string) => void;
}
export const SelectButtonComponent = ({
  buttonText,
  selectedOption,
  onPress,
}: SelectButtonProps) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    selectedOption === buttonText ? setIsSelected(true) : setIsSelected(false);
  }, [selectedOption]);
  return (
    <Pressable
      onPress={() => onPress(buttonText)}
      className={`${
        isSelected
          ? 'bg-white border-purple-300 border '
          : 'bg-gray-300 border-transparent'
      }   h-11 rounded-md px-4 py-3 flex-shrink `}
      style={{ width: 150 }}
    >
      <Text
        className={`${
          isSelected ? 'text-purple-300' : 'text-gray-700'
        } text-center text-sm font-normal flex-shrink`}
      >
        {buttonText}
      </Text>
    </Pressable>
  );
};

export const SelectButton = memo(SelectButtonComponent);
