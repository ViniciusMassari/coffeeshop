import { useCallback, useState } from 'react';
import { useCart } from 'src/context/CartContext';

export interface ProductInfo {
  productId: number;
  ml: string;
}

export function useChangeQuantity(initialQuantity?: number) {
  const { updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(initialQuantity ?? 1);
  const changeQuantity = useCallback(
    (action: 'increase' | 'remove', productInfo?: ProductInfo) => {
      setQuantity((prev) => {
        if (action == 'increase') {
          const newValue = prev + 1;
          if (productInfo) {
            updateQuantity(productInfo.productId, newValue, productInfo.ml);
          }
          return newValue;
        }
        if (action === 'remove' && prev > 1) {
          const newValue = prev - 1;
          if (productInfo) {
            updateQuantity(productInfo.productId, newValue, productInfo.ml);
          }
          return newValue;
        }
        const newValue = prev;
        if (productInfo) {
          updateQuantity(productInfo.productId, newValue, productInfo.ml);
        }
        return prev;
      });
    },
    [updateQuantity],
  );

  return { quantity, setQuantity, changeQuantity };
}
