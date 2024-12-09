import { ImageWithFallback } from '../components/ImageWithFallback';
import Link from 'next/link';
import { WishlistButton } from '../components/WishlistButton';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getProducts(category: string) {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch products');
  const products: Product[] = await res.json();
  
  // Map URL categories to API categories
  const categoryMap: { [key: string]: string } = {
    'mens': "men's clothing",
    'womens': "women's clothing",
    'jewelry': "jewelery"
  };

  return products.filter(product => 
    product.category === categoryMap[category]
  );
}

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const products = await getProducts(category);
  const categoryTitles: { [key: string]: string } = {
    'mens': "Men's Collection",
    'womens': "Women's Collection",
    'jewelry': "Jewelry Collection"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-8">{categoryTitles[category]}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            href={`/projects/store-fun/${category}/${product.id}`}
            className="group" 
            key={product.id}
          >
            <figure className="relative mb-4 mx-auto overflow-hidden flex items-center justify-center bg-white border border-neutral-100">
              <div className="relative w-full">
                <div className="aspect-[5/2]">
                  <ImageWithFallback
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
    </div>
  );
} 