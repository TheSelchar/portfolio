import Image from 'next/image';
import Link from 'next/link';
import { WishlistButton } from '../components/WishlistButton';
import { WishlistClient } from './WishlistClient';

export default function WishlistPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 space-y-2">
        <h1 className="text-2xl font-medium">Wishlist</h1>
        <p className="text-neutral-600">Wishlist is only PC specific and for demo only</p>
      </div>
      
      <WishlistClient />
    </div>
  );
} 