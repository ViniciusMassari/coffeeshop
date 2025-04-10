import { Header } from '@components/header';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Home() {
  return (
    <SafeAreaView className='bg-gray-900'>
      <StatusBar translucent style='light' />
      <ScrollView className='antialiased h-screen  pt-5'>
        <Header.Container>
          <Header.Cart />
        </Header.Container>
      </ScrollView>
    </SafeAreaView>
  );
}
