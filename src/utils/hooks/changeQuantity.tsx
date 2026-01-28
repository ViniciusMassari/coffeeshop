import { useState } from 'react';

type UseChangeQuantityReturn = {
  quantity: number;
  increase: () => void;
  decrease: () => void;
  setQuantity: (value: number) => void;
};

export function useChangeQuantity(
  initialQuantity: number = 1,
): UseChangeQuantityReturn {
  const [quantity, setQuantity] = useState(initialQuantity);

  function increase() {
    setQuantity((prev) => prev + 1);
  }

  function decrease() {
    setQuantity((prev) => {
      if (prev <= 1) return 1;
      return prev - 1;
    });
  }

  return {
    quantity,
    increase,
    decrease,
    setQuantity,
  };
}
