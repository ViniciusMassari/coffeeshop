import { coffeeSearch } from '@assets/mock/coffeeListData';
import { ActionButton } from '@components/ActionButton';
import { CoffeeGoldenPrice } from '@components/CoffeeGoldenPrice';
import { HeaderCart, HeaderContainer, HeaderText } from '@components/header';
import { InputNumber } from '@components/InputNumber/';
import { Select, SelectButton } from '@components/Select';
import SmokeSVG from '@components/Smoke';
import { ArrowLeftIcon, Icon } from '@components/ui/icon';
import { useChangeQuantity } from '@utils/hooks/changeQuantity';
import { useLocalSearchParams, Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Toast } from 'toastify-react-native';
import { router } from 'expo-router';
import { useCart } from 'src/context/CartContext';

export default function Product() {
  const { id } = useLocalSearchParams();

  const data = coffeeSearch(+id);

  const options = ['114ml', '140ml', '227ml'];

  const [selectedMl, setSelectedMl] = useState(options[0]);

  const { addToCart } = useCart();

  const { changeQuantity, quantity } = useChangeQuantity();
  function changeOption(newMl: string) {
    setSelectedMl((prev) => {
      return prev != newMl ? newMl : prev;
    });
  }

  return (
    <>
      <HeaderContainer>
        <HeaderText>
          <Link href={'/home'}>
            <Icon
              className='color-gray-400'
              width={24}
              height={24}
              as={ArrowLeftIcon}
            />
          </Link>
          <HeaderCart />
        </HeaderText>
      </HeaderContainer>
      <View className='flex-1 bg-gray-900  pt-3  items-center'>
        <View className='px-8'>
          <View className='mb-8'>
            <Text className='text-white rounded-tag bg-gray-800 self-start px-3 py-[6px] text-tag mb-3'>
              {data?.type}
            </Text>
            <View className='flex-row justify-between items-center mb-5'>
              <Text className='text-title-lg text-white'>{data?.title}</Text>
              <CoffeeGoldenPrice price='9,90' variant='lg' />
            </View>
            <Text className='text-gray-500'>{data?.description}</Text>
          </View>
          <View className='items-center z-10'>
            <SmokeSVG />
            <Image
              className='h-[260px] w-[295px] -mt-20  '
              source={require('@assets/img/coffeeCup.png')}
            />
          </View>
        </View>
        <View className='bg-gray-100 flex-1 w-full px-8 -mt-14'>
          <View className='mt-10'>
            <Text className='text-gray-600 text-title-xs font-normal'>
              Selecione o tamanho:
            </Text>
          </View>
          <Select className='mt-2 flex-row gap-2  mb-5 items-stretch'>
            {options.map((option) => {
              return (
                <SelectButton
                  key={option + Math.random()}
                  buttonText={option}
                  selectedOption={selectedMl}
                  onPress={changeOption}
                />
              );
            })}
          </Select>
          <View className='bg-gray-300 flex-row gap-4 p-2'>
            <InputNumber
              quantity={quantity}
              changeQuantity={changeQuantity}
              productInfo={{ productId: data!.id, ml: selectedMl }}
            />
            <ActionButton
              label='ADICIONAR'
              variant='addToCart'
              onPress={() => {
                if (data) {
                  addToCart({
                    id: data.id,
                    price: +data.price.replace(',', '.'),
                    product_name: data.title,
                    quantity,
                    ml: selectedMl,
                  });
                }
                Toast.show({
                  text1: `${quantity} ${data?.title} adicionado ao carrinho`,
                  position: 'bottom',
                  visibilityTime: 4000,
                  // @ts-ignore
                  type: 'custom',
                  useModal: false,
                  autoHide: true,
                });
                router.navigate('/home');
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
