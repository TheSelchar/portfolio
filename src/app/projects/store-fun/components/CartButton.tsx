'use client';

import { useCartStore } from '../stores/cartStore';
import { useEffect, useState } from 'react';

export function CartButton() {
  const [mounted, setMounted] = useState(false);
  const { getItemCount } = useCartStore();
  
  // Wait until after client-side hydration to show
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative">
      <button className="p-2 hover:bg-base-200 rounded-full">
        <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
      {mounted && getItemCount() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {getItemCount()}
        </span>
      )}
    </div>
  );
} 