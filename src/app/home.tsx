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
import Animated, {
  Easing,
  FadeInDown,
  SlideInDown,
  SlideInRight,
  SlideInUp,
} from 'react-native-reanimated';

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

            <Animated.View
              className='bg-gray-900 h-72  px-8 relative'
              entering={SlideInUp.duration(1000).springify().damping(30)}
            >
              <Animated.View entering={FadeInDown.delay(600).duration(1000)}>
                <SearchCoffee />
                <Image
                  className='w-[83px] h-[83px] self-end translate-x-8'
                  source={require('@assets/img/coffee.png')}
                />
              </Animated.View>
            </Animated.View>
            <Animated.View
              entering={SlideInRight.delay(900).springify().damping(30)}
            >
              <CoffeeCarousel />
            </Animated.View>
            <Animated.View
              entering={SlideInDown.delay(900).springify().damping(30)}
            >
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
            </Animated.View>
          </View>
        )}
        className='bg-gray-100 '
        data={coffeeListData}
        showsVerticalScrollIndicator={false}
        sections={coffeeListData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Animated.View
            entering={SlideInDown.delay(900).springify().damping(30)}
          >
            <HorizontalCoffeeCard cardInfo={item} />
          </Animated.View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Animated.Text
            className='px-8 font-title text-title-xs color-gray-600 mt-2'
            entering={SlideInDown.delay(900).springify().damping(30)}
          >
            {title}
          </Animated.Text>
        )}
        // Este componente serve apenas para deixar um espaço em branco para indicar que não há mais items
        ListFooterComponent={() => <View className='pt-32'></View>}
        ref={sectionListRef}
      />
    </>
  );
}
