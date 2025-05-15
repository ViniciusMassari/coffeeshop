import { HeaderContainer, HeaderText, HeaderCart } from '@components/header';
import LocationMarkIcon from '@assets/LocationMark';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SearchCoffee } from '../components/SearchCoffee';
import { CoffeeCard } from '../components/CoffeeCard';

export default function Home() {
  return (
    <>
      <StatusBar animated={true} style='light' />
      <HeaderContainer>
        <HeaderText>
          <LocationMarkIcon />
          <Text className='text-white'>Porto Alegre, RS</Text>
        </HeaderText>

        <HeaderCart />
      </HeaderContainer>

      <ScrollView className='bg-gray-100'>
        <View className='bg-gray-900 min-h-96 px-8 relative'>
          <SearchCoffee />
          <Image
            className='w-[83px] h-[83px] self-end translate-x-8'
            source={require('@assets/img/coffee.png')}
          />
        </View>
        <CoffeeCard />
      </ScrollView>
    </>
  );
}
