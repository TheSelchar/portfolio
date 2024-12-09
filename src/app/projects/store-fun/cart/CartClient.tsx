'use client';

import { useCartStore } from '../stores/cartStore';
import { useWishlistStore } from '../stores/wishlistStore';
import { ImageWithFallback } from '../components/ImageWithFallback';
import Link from 'next/link';
import { useState } from 'react';

export function CartClient() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const { addItem: addToWishlist } = useWishlistStore();
  const [removingItemId, setRemovingItemId] = useState<number | null>(null);

  const handleMoveToWishlist = (item: any) => {
    setRemovingItemId(item.id);
    setTimeout(() => {
      addToWishlist(item);
      removeItem(item.id);
      setRemovingItemId(null);
    }, 300);
  };

  if (items.length === 0) {
    return (
      <p className="text-neutral-600">Your shopping bag is empty</p>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <div 
            key={item.id}
            className={`grid grid-cols-[120px,1fr] gap-6 bg-white p-4 transition-opacity duration-300 ${
              removingItemId === item.id ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <Link href={`/projects/store-fun/${item.category.replace("'s clothing", '').toLowerCase()}/${item.id}`}>
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                width={120}
                height={120}
                className="object-contain w-[120px] h-[120px]"
              />
            </Link>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Link 
                  href={`/projects/store-fun/${item.category.replace("'s clothing", '').toLowerCase()}/${item.id}`}
                  className="font-medium hover:text-neutral-600"
                >
                  {item.title}
                </Link>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  ✕
                </button>
              </div>

              <div className="text-sm text-neutral-600">{item.category}</div>

              <div className="flex justify-between items-end">
                <div>
                  <label className="block text-sm text-neutral-600 mb-1">Quantity</label>
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="border rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>

                <div className="text-right">
                  <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  <button
                    onClick={() => handleMoveToWishlist(item)}
                    className="text-sm text-neutral-600 hover:text-neutral-900"
                  >
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 space-y-4">
          <h2 className="font-medium">Summary</h2>
          
          <div className="flex justify-between py-4 border-t">
            <span>Subtotal</span>
            <span>${getSubtotal().toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span>Delivery</span>
            <span>$0.00</span>
          </div>
          
          <div className="flex justify-between py-4 border-t font-medium">
            <span>Total</span>
            <span>USD ${getSubtotal().toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-4 hover:bg-neutral-800 transition-colors">
            Go To Checkout
          </button>
        </div>
      </div>
    </div>
  );
} 