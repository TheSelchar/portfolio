import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const StoreFunPage: FC = () => {
  return (
    <>
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-medium text-neutral-900">Choose a department</h1>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Women's Clothing */}
          <Link href="/projects/store-fun/womens" className="relative group">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src="/images/womens-category.png"
                alt="Women's Clothing"
                width={480}
                height={270}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                WOMENSWEAR
              </h2>
            </div>
          </Link>

          {/* Men's Clothing */}
          <Link href="/projects/store-fun/mens" className="relative group">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src="/images/mens-category.png"
                alt="Men's Clothing"
                width={480}
                height={270}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                MENSWEAR
              </h2>
            </div>
          </Link>

          {/* Jewelry */}
          <Link href="/projects/store-fun/jewelry" className="relative group">
            <div className="relative w-full aspect-video overflow-hidden">
              <Image
                src="/images/jewelry-category.png"
                alt="Jewelry"
                width={480}
                height={270}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                JEWELRY
              </h2>
            </div>
          </Link>
        </div>

        {/* Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t pt-16">
          <div className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">HOW TO SHOP</h3>
            <p className="text-neutral-600">Your guide to shopping and placing orders</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">FAQS</h3>
            <p className="text-neutral-600">Your questions answered</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">NEED HELP?</h3>
            <p className="text-neutral-600">Contact our global Customer Service team</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreFunPage; 