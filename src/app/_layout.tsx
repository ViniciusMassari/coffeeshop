import { Stack } from 'expo-router';
import '@/global.css';
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import { StatusBar } from 'react-native';
export default function RootLayout() {
  return (
    <GluestackUIProvider mode='light' style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>
  );
}
