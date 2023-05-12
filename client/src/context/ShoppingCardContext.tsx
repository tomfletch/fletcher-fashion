import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import Product from '../models/product';

type ShoppingCartItem = {
  product: Product;
  quantity: number;
};

type ShoppingCartContextInterface = {
  items: ShoppingCartItem[];
  totalQuantity: number;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  getItem: (productId: string) => ShoppingCartItem | null;
};

const ShoppingCartContext = createContext<ShoppingCartContextInterface | null>(null);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext)!;
}

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [items, setItems] = useState<ShoppingCartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems((prevItems) => {
      const foundItem = prevItems.find((item) => item.product === product);

      if (foundItem) {
        return prevItems.map((item) => (
          item.product === product ? {product, quantity: item.quantity + 1} : item
        ));
      }

      return [...prevItems, {product, quantity: 1}];
    });
  }, []);

  const removeItem = useCallback((product: Product) => {
    setItems((prevItems) => (
      prevItems
        .map((item) => item.product === product ? {...item, quantity: item.quantity - 1} : item)
        .filter((item) => item.quantity !== 0)
    ));
  }, []);

  const getItem = useCallback((productId: string) => {
    return items.find((item) => item.product._id === productId) || null;
  }, [items]);

  const totalQuantity = useMemo(() => (
    items.reduce((acc, item) => acc += item.quantity, 0)
  ), [items]);

  const shoppingCartContext = useMemo(() => ({
    items,
    totalQuantity,
    addItem,
    removeItem,
    getItem,
  }), [items, totalQuantity, addItem, removeItem, getItem]);

  return (
    <ShoppingCartContext.Provider value={shoppingCartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
