'use client';

import { useWishlistStore } from '../stores/wishlistStore';

interface WishlistButtonProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  className?: string;
}

export function WishlistButton({ product, className = '' }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const isActive = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when used inside Links
    if (isActive) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <button 
      onClick={toggleWishlist}
      className={`p-2 rounded-full bg-white shadow-md hover:bg-neutral-100 transition-colors ${className}`}
    >
      <svg 
        className="w-5 h-5" 
        fill={isActive ? "currentColor" : "none"} 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
        />
      </svg>
    </button>
  );
} 