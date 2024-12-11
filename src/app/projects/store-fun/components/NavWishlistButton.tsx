'use client';

import { useWishlistStore } from '../stores/wishlistStore';
import { useEffect, useState } from 'react';

export function NavWishlistButton() {
  const [mounted, setMounted] = useState(false);
  const { getItemCount } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative p-2 hover:bg-base-200 rounded-full">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      {mounted && getItemCount() > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {getItemCount()}
        </span>
      )}
    </div>
  );
} 