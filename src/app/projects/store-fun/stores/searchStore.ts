import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SearchState = {
  history: string[];
  addToHistory: (query: string) => void;
  clearHistory: () => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (query) => 
        set((state) => ({
          history: [query, ...state.history.filter(q => q !== query)].slice(0, 5)
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'search-history',
    }
  )
); 