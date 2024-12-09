'use client';

import { useCartStore } from '../stores/cartStore';

export function CartButton() {
  const { getItemCount } = useCartStore();
  const itemCount = getItemCount();

  return (
    <div className="relative">
      <button className="text-neutral-700 hover:text-neutral-900">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
} 