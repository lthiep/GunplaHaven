import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Product } from '@/types';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => Promise<void>;
  removeItem: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  subtotal: number;
  tax: number;
  total: number;
  isLoading: boolean;
}

const TAX_RATE = 0.08;

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const subtotal = items.reduce((sum, item) => 
    sum + item.product.price * item.quantity, 0
  );
  
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  useEffect(() => {
    if (user) {
      loadUserCart();
    } else {
      setItems([]);
      setIsLoading(false);
    }
  }, [user]);

  async function loadUserCart() {
    try {
      const { data: cartItems, error: cartError } = await supabase
        .from('cart_items')
        .select(`
          product_id,
          quantity,
          products (*)
        `)
        .eq('user_id', user?.id);

      if (cartError) throw cartError;

      const transformedItems: CartItem[] = cartItems.map((item: any) => ({
        productId: item.product_id,
        quantity: item.quantity,
        product: item.products
      }));

      setItems(transformedItems);
    } catch (error: any) {
      console.error('Error loading cart:', error);
      toast({
        title: 'Error',
        description: 'Failed to load cart. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function addItem(product: Product, quantity: number) {
    if (!user) {
      toast({
        title: 'Sign in required',
        description: 'Sign in or create an account to add items to cart.',
      });
      navigate('/auth/sign-up');
      return;
    }

    try {
      const existingItem = items.find((item) => item.productId === product.id);

      if (existingItem) {
        await updateQuantity(product.id, existingItem.quantity + quantity);
      } else {
        const { error } = await supabase.from('cart_items').insert({
          user_id: user.id,
          product_id: product.id,
          quantity,
        });

        if (error) throw error;

        setItems([...items, {
          productId: product.id,
          quantity,
          product,
        }]);
      }

      toast({
        title: 'Added to cart',
        description: `${product.name} added to cart`,
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to add item',
        variant: 'destructive',
      });
    }
  }

  async function removeItem(productId: string) {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('product_id', productId)
        .eq('user_id', user.id);

      if (error) throw error;

      setItems(items.filter((item) => item.productId !== productId));

      toast({
        title: 'Removed from cart',
        description: 'Item removed',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to remove item',
        variant: 'destructive',
      });
    }
  }

  async function updateQuantity(productId: string, quantity: number) {
    if (!user) return;

    try {
      if (quantity < 1) {
        await removeItem(productId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('product_id', productId)
        .eq('user_id', user.id);

      if (error) throw error;

      setItems(items.map((item) => 
        item.productId === productId ? { ...item, quantity } : item
      ));
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update quantity',
        variant: 'destructive',
      });
    }
  }

  async function clearCart() {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      setItems([]);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to clear cart',
        variant: 'destructive',
      });
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotal,
        tax,
        total,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};