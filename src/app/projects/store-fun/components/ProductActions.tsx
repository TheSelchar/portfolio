'use client';

import { useCartStore } from '../stores/cartStore';

interface ProductActionsProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

export function ProductActions({ product }: ProductActionsProps) {
  const { addItem } = useCartStore();

  return (
    <div className="flex gap-4">
      <button 
        onClick={() => addItem(product)}
        className="bg-black text-white py-4 px-6 hover:bg-neutral-800 transition-colors"
      >
        Add To Bag
      </button>
    </div>
  );
} 