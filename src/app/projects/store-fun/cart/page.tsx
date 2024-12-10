import { CartClient } from './CartClient';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-medium">SHOPPING BAG</h1>
        <Link href="/projects/store-fun" className="text-neutral-600 hover:text-neutral-900">
          Continue Shopping
        </Link>
      </div>
      
      <CartClient />
    </div>
  );
} 