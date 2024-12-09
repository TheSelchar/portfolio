'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useWishlistStore } from '../stores/wishlistStore';
import { WishlistButton } from '../components/WishlistButton';

export function WishlistClient() {
  const { items } = useWishlistStore();

  if (items.length === 0) {
    return (
      <p className="text-neutral-600">Your wishlist is empty</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((product) => (
        <Link 
          href={`/projects/store-fun/${product.category.replace("'s clothing", '').toLowerCase()}/${product.id}`}
          className="group" 
          key={product.id}
        >
          <figure className="relative mb-4 mx-auto overflow-hidden flex items-center justify-center bg-white border border-neutral-100">
            <div className="relative w-full">
              <div className="aspect-[5/2]">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={200}
                  className="object-contain w-[500px] h-[200px] hover:scale-105 transition-transform duration-300"
                  style={{ maxWidth: '500px', maxHeight: '200px' }}
                />
              </div>
            </div>
            <WishlistButton 
              product={product} 
              className="absolute top-2 right-2"
            />
          </figure>

          <div className="space-y-1">
            <p className="text-xs text-neutral-800">New Season</p>
            <h2 className="font-medium text-neutral-900 line-clamp-1">{product.title}</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-sm line-through text-neutral-500">${product.price}</span>
              <span className="text-sm font-medium text-red-600">
                -30% ${(product.price * 0.7).toFixed(2)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 