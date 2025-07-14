import { useState } from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { SearchFiltersSheet } from '@/components/search/SearchFilters';
import { HouseGrid } from '@/components/houses/HouseGrid';
import { SearchFilters } from '@/types';

// Mock data - In a real app, this would come from an API
const MOCK_HOUSES = [
  {
    id: '1',
    title: 'Villa contemporaine avec piscine',
    description: 'Magnifique villa moderne avec vue panoramique',
    price: 2500,
    location: 'Aix-en-Provence',
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 200,
    amenities: ['Piscine', 'Jardin', 'Parking'],
    rating: 4.8,
    reviews: 24,
  },
  // Add more mock houses here...
];

export function SearchPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    minPrice: 0,
    maxPrice: 5000,
    bedrooms: 1,
    bathrooms: 1,
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar />
        <SearchFiltersSheet filters={filters} onFiltersChange={setFilters} />
      </div>

      <HouseGrid houses={MOCK_HOUSES} />
    </div>
  );
}