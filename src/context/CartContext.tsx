import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from 'react';

export interface CartProduct {
  id: number;
  product_name: string;
  quantity: number;
  price: number;
  ml: string;
}

export type CartItem = CartProduct & { quantity: number };

type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: CartProduct }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { id: number; quantity: number; ml: string };
    }
  | { type: 'REMOVE_ITEM'; payload: { id: number; ml: string } }
  | { type: 'CLEAR_CART' };

type CartContextType = {
  state: CartState;
  addToCart: (product: CartProduct) => void;
  updateQuantity: (id: number, quantity: number, ml: string) => void;
  removeFromCart: (id: number, ml: string) => void;
  clearCart: () => void;
  calculateTotal: () => number;
};

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(
        (item) => item.id === action.payload.id && item.ml === action.payload.ml
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id && item.ml === action.payload.ml
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(item.id === action.payload.id && item.ml === action.payload.ml)
        ),
      };
    }

    case 'CLEAR_CART': {
      return { items: [] };
    }

    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const calculateTotal = () => {
    const result = state.items.reduce((accumulator, current) => {
      return current.price * current.quantity + accumulator;
    }, 0);

    return result;
  };
  const addToCart = (product: CartProduct) =>
    dispatch({ type: 'ADD_ITEM', payload: product });
  const updateQuantity = (id: number, quantity: number, ml: string) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, ml } });
  const removeFromCart = (id: number, ml: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, ml } });
  };

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
