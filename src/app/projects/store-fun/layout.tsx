"use client";

import { FC } from 'react';
import Link from 'next/link';
import { CartButton } from './components/CartButton';
import { NavWishlistButton } from './components/NavWishlistButton';
import { useState } from 'react';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
}

const StoreLayout: FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Mobile Navigation */}
      <nav className="lg:hidden border-b" style={{ backgroundColor: '#e6e6e6' }}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Menu Button */}
            <button 
              className="btn btn-ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-5 w-5 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>

            {/* Center Logo */}
            <Link href="/projects/store-fun" className="flex items-center">
              <h1 className="text-2xl font-bold">NGUO</h1>
            </Link>

            {/* Cart and Wishlist */}
            <div className="flex items-center space-x-4">
              <Link href="/projects/store-fun/wishlist">
                <NavWishlistButton />
              </Link>
              <Link href="/projects/store-fun/cart">
                <CartButton />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="border-t py-4">
              {/* Search */}
              <div className="px-4 mb-4">
                <form action="/projects/store-fun/search" method="get">
                  <div className="relative">
                    <input
                      type="search"
                      name="q"
                      placeholder="Search"
                      className="w-full pl-8 pr-4 py-2 rounded-full border"
                    />
                    <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* Navigation Links */}
              <div className="space-y-2">
                <Link href="/projects/store-fun/womens" className="block px-4 py-2 hover:bg-base-200">
                  Womenswear
                </Link>
                <Link href="/projects/store-fun/mens" className="block px-4 py-2 hover:bg-base-200">
                  Menswear
                </Link>
                <Link href="/projects/store-fun/jewelry" className="block px-4 py-2 hover:bg-base-200">
                  Jewelry
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block border-b" style={{ backgroundColor: '#e6e6e6' }}>
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
                    <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </button>
                </form>
              </div>
              <Link href="/projects/store-fun/wishlist">
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