'use client';

import { useRouter, useSearchParams } from 'next/navigation';

interface SortOptionsProps {
  selected?: string;
}

export function SortOptions({ selected }: SortOptionsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === null) {
      params.delete('sort');
    } else {
      params.set('sort', value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={selected || ''}
        onChange={(e) => handleSort(e.target.value)}
        className="border rounded-md px-3 py-1.5 text-sm"
      >
        <option value="">Sort by</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
        <option value="name-desc">Name: Z to A</option>
      </select>
      {selected && (
        <button
          onClick={() => handleSort(null)}
          className="text-sm text-neutral-600 hover:text-neutral-900"
        >
          ✕
        </button>
      )}
    </div>
  );
} 