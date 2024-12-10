'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SearchFiltersProps {
  categories: string[];
  selectedCategory?: string;
}

export function SearchFilters({ categories, selectedCategory }: SearchFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === null) {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Categories</h3>
        {selectedCategory && (
          <button
            onClick={() => handleCategoryChange(null)}
            className="text-sm text-neutral-600 hover:text-neutral-900"
          >
            Clear
          </button>
        )}
      </div>
      <div className="space-y-2">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value={category}
              checked={category.toLowerCase() === selectedCategory?.toLowerCase()}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
} 