import { Button, ButtonText } from './ui/button';
import { GestureResponderEvent } from 'react-native';

type ActionButtonProps = {
  label?: string;
  onPress: (e: GestureResponderEvent) => void;
  variant?: 'addToCart' | 'navigateHome' | 'confirmOrder';
};
export const ActionButton = ({
  label = '',
  onPress,
  variant = 'addToCart',
}: ActionButtonProps) => {
  const variants = {
    navigateHome: {
      default: 'bg-purple-700',
      focus: 'bg-purple-300',
    },
    addToCart: {
      default: 'bg-purple-700',
      focus: 'bg-purple-300',
    },
    confirmOrder: {
      default: 'bg-yellow-700',
      focus: 'bg-yellow-500',
    },
  };
  return (
    <Button
      onPress={onPress}
      className={`flex-1  ${variants[variant].default} active:${variants[variant].focus}`}
    >
      <ButtonText className='text-white text-center'>{label}</ButtonText>
    </Button>
  );
};
