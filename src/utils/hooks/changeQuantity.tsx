import { useCallback, useState } from 'react';

export function useChangeQuantity() {
  const changeQuantity = useCallback((action: 'increase' | 'remove') => {
    setQuantity((prev) => {
      if (action == 'increase') {
        return prev + 1;
      }
      if (action === 'remove' && prev > 1) return prev - 1;
      return prev;
    });
  }, []);

  const [quantity, setQuantity] = useState(0);

  return { quantity, setQuantity, changeQuantity };
}
