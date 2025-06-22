import { View, Text } from 'react-native';
import React from 'react';
import { Input, InputSlot, InputField, InputIcon } from './ui/input';
import { SearchIcon } from './ui/icon';

export const SearchCoffee = () => {
  return (
    <>
      <Text className='text-white  text-title-md mt-4'>
        Encontre o café perfeito para qualquer hora do dia
      </Text>
      <Input
        accessibilityHint='Tab to start editing'
        className='mt-4 px-3 bg-gray-800 border-transparent '
        size='lg'
      >
        <InputSlot>
          <InputIcon as={SearchIcon}></InputIcon>
        </InputSlot>
        <InputField
          autoCapitalize='none'
          autoCorrect={false}
          enterKeyHint='search'
          placeholder='Pesquisar'
          className='color-gray-300'
        ></InputField>
      </Input>
    </>
  );
};
