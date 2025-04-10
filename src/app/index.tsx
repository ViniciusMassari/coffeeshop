import { useFonts } from 'expo-font';

import { SplashScreen } from '../screens/SplashScreen';
import RippleEffect from '@components/RippleEffect';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [loaded, error] = useFonts({
    Roboto: require('../../assets/fonts/Roboto_400Regular.ttf'),
    RobotoBold: require('../../assets/fonts/Roboto_700Bold.ttf'),
    Baloo: require('../../assets/fonts/Baloo2_700Bold.ttf'),
  });
  if (!loaded) return null;
  if (error) throw error;

  return (
    <RippleEffect>
      <SplashScreen />
    </RippleEffect>
  );
}
