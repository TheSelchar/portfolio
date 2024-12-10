import { ImageWithFallback } from '../../components/ImageWithFallback';
import { WishlistButton } from '../../components/WishlistButton';
import { ProductActions } from '../../components/ProductActions';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

type Props = {
  params: Promise<{
    category: string;
    productId: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { productId } = await params;
  const product: Product = await getProduct(productId);
  
  // Calculate estimated delivery dates (12-18 days from now)
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 12);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 18);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Image */}
        <div>
          <figure className="relative aspect-square bg-white border border-neutral-100 overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.title}
              width={500}
              height={500}
              className="object-contain p-8"
              priority
            />
            <WishlistButton 
              product={product}
              className="absolute top-4 right-4"
            />
          </figure>
        </div>

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Category */}
          <div className="text-neutral-600">{product.category}</div>

          {/* Brand & Title */}
          <div>
            <h1 className="text-2xl font-medium">{product.title}</h1>
          </div>

          {/* Price */}
          <div className="text-xl">
            ${product.price}
            <div className="text-sm text-neutral-600 mt-1">Import duties included</div>
          </div>

          {/* Size */}
          <div>
            <div className="font-medium mb-2">One Size available</div>
          </div>

          {/* Add to Bag Button */}
          <ProductActions product={product} />

          {/* Estimated Delivery */}
          <div>
            <h2 className="font-medium mb-2">ESTIMATED DELIVERY</h2>
            <p className="text-neutral-600">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>

          {/* Product Description */}
          <div className="pt-6 border-t">
            <h2 className="font-medium mb-4">PRODUCT DETAILS</h2>
            <p className="text-neutral-600 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

