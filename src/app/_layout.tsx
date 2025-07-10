import { Stack } from 'expo-router';
import 'global.css';
import { GluestackUIProvider } from '@components/ui/gluestack-ui-provider';
import ToastManager from 'toastify-react-native';
import { ToastConfig } from 'toastify-react-native/utils/interfaces';
import { AddedToCartToast } from '@components/AddedToCartToast';
export default function RootLayout() {
  const toastConfig: ToastConfig = {
    custom: (props) => <AddedToCartToast {...props} />,
  };
  return (
    <GluestackUIProvider mode='light' style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />

      <ToastManager config={toastConfig} />
    </GluestackUIProvider>
  );
}
