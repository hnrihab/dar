export interface House {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  squareMeters: number;
  amenities: string[];
  rating: number;
  reviews: number;
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
}

export type item = {
  company: string;
  name: string;
  detail: string;
  rateCount: number;
  newPrice: number;
  oldPrice: number;
  moreDetails: string[];
};


export type Products = {
  image_url: string;
  id: string;
  name: string;
  options: Record<string, (string | number)[]>;
  url_image?: string;
  price: number;
  description?: string;
  category_id?: string;
  


};