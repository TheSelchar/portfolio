import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchFilters } from './SearchFilters';
import { SearchSuggestions } from './SearchSuggestions';
import { SortOptions } from './SortOptions';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function searchProducts(query: string) {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch products');
  const products: Product[] = await res.json();
  
  return products.filter(product => 
    product.category !== 'electronics' && 
    (product.title.toLowerCase().includes(query.toLowerCase()) || 
     product.description.toLowerCase().includes(query.toLowerCase()))
  );
}

interface PageProps {
  searchParams: { 
    q: string;
    category?: string;
    sort?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
  };
}

export default async function SearchPage({ searchParams }: PageProps) {
  const query = searchParams.q || '';
  let products = await searchProducts(query);

  // Apply category filter
  if (searchParams.category) {
    products = products.filter(product => 
      product.category.toLowerCase() === searchParams.category?.toLowerCase()
    );
  }

  // Apply sorting
  if (searchParams.sort) {
    products = [...products].sort((a, b) => {
      switch (searchParams.sort) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }

  // Get unique categories for filters
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        {/* Search Suggestions */}
        <SearchSuggestions query={query} />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <SearchFilters 
              categories={categories} 
              selectedCategory={searchParams.category}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-medium text-neutral-900">
                Search Results for "{query}"
              </h1>
              <SortOptions selected={searchParams.sort} />
            </div>

            {products.length === 0 ? (
              <p className="text-neutral-800">No products found matching your search.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product: Product) => (
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
                      <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-neutral-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 