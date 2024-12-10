'use client';

import { useSearchStore } from '../stores/searchStore';
import Link from 'next/link';

export function SearchSuggestions({ query }: { query: string }) {
  const { history } = useSearchStore();

  if (!query || history.length === 0) return null;

  return (
    <div className="bg-white border rounded-lg p-4">
      <h3 className="font-medium mb-2">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((searchQuery) => (
          <Link
            key={searchQuery}
            href={`/projects/store-fun/search?q=${encodeURIComponent(searchQuery)}`}
            className="px-3 py-1 bg-neutral-100 rounded-full text-sm hover:bg-neutral-200"
          >
            {searchQuery}
          </Link>
        ))}
      </div>
    </div>
  );
} 