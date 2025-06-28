import { HeaderContainer, HeaderText, HeaderCart } from '@components/header';
import LocationMarkIcon from '@assets/LocationMark';
import { StatusBar } from 'expo-status-bar';
import { Image, SectionList, Text, View } from 'react-native';
import { SearchCoffee } from '../components/SearchCoffee';
import { CoffeeCarousel } from '../components/CoffeeCarousel';
import { coffeeListData } from '../assets/mock/coffeeListData';
import { HorizontalCoffeeCard } from '../components/HorizontalCoffeeCard';
import { CoffeeListHeader } from '../components/CoffeeList/CoffeeListHeader';
import { useRef } from 'react';
import { options } from '../assets/mock/coffeeOptions';
import { Tag } from '../components/Tag';

export default function Home() {
  const sectionListRef = useRef<SectionList>(null);
  function handleScrollTo(category: string) {
    const sectionIndex = options.findIndex((c) => c === category);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        itemIndex: 0,
        sectionIndex,
        animated: true,
      });
    }
  }
  return (
    <>
      <HeaderContainer>
        <HeaderText>
          <View className='flex-row'>
            <LocationMarkIcon />
            <Text className='text-white'>Porto Alegre, RS</Text>
          </View>
          <HeaderCart />
        </HeaderText>
      </HeaderContainer>
      <SectionList
        ListHeaderComponent={() => (
          <View className='flex-1'>
            <StatusBar animated={true} translucent style='light' />

            <View className='bg-gray-900 h-72  px-8 relative'>
              <SearchCoffee />
              <Image
                className='w-[83px] h-[83px] self-end translate-x-8'
                source={require('@assets/img/coffee.png')}
              />
            </View>

            <CoffeeCarousel />
            <Text className='ml-8 text-title-sm font-title color-gray-700 mb-3'>
              Nosso cafés
            </Text>
            <CoffeeListHeader>
              {options.map((option) => {
                return (
                  <Tag
                    key={option}
                    label={option}
                    handleScrollTo={handleScrollTo}
                  />
                );
              })}
            </CoffeeListHeader>
          </View>
        )}
        className='bg-gray-100 '
        data={coffeeListData}
        showsVerticalScrollIndicator={false}
        sections={coffeeListData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <HorizontalCoffeeCard cardInfo={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='px-8 font-title text-title-xs color-gray-600 mt-2'>
            {title}
          </Text>
        )}
        // Este componente serve apenas para deixar um espaço em branco para indicar que não há mais items
        ListFooterComponent={() => <View className='pt-32'></View>}
        ref={sectionListRef}
      />
    </>
  );
}
