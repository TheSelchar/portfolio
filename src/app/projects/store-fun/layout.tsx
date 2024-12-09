import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CartButton } from './components/CartButton';
import { NavWishlistButton } from './components/NavWishlistButton';

interface LayoutProps {
  children: React.ReactNode;
}

const StoreLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navigation Bar */}
      <nav className="border-b" style={{ backgroundColor: '#e6e6e6' }}  >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/projects/store-fun/womens" className="text-neutral-700 hover:text-neutral-900">
                Womenswear
              </Link>
              <Link href="/projects/store-fun/mens" className="text-neutral-700 hover:text-neutral-900">
                Menswear
              </Link>
              <Link href="/projects/store-fun/jewelry" className="text-neutral-700 hover:text-neutral-900">
                Jewelry
              </Link>
            </div>

            {/* Center Logo */}
            <Link href="/projects/store-fun" className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-2xl font-bold">NGUO</h1>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              {/* Search */}
              <div className="relative">
              <form action="/projects/store-fun/search" method="get">
    <input
      type="search"
      name="q"
      placeholder="Search"
      className="pl-8 pr-4 py-1 rounded-full border border-neutral-200 focus:outline-none focus:border-neutral-400"
    />
    <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
      <svg
        className="w-4 h-4 text-neutral-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </form>
              </div>

              {/* Icons */}
              {/* <button className="text-neutral-700 hover:text-neutral-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </button>
              <button className="text-neutral-700 hover:text-neutral-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button> */}
              <Link href="/projects/store-fun/wishlist" className="text-neutral-700 hover:text-neutral-900">
                <NavWishlistButton />
              </Link>
              <Link href="/projects/store-fun/cart">
                <CartButton />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default StoreLayout; 