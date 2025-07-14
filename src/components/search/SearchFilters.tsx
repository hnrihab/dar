import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SearchFilters } from '@/types';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export function SearchFiltersSheet({ filters, onFiltersChange }: SearchFiltersProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filtres
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filtres de recherche</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-6">
          <div className="space-y-4">
            <Label>Prix par mois</Label>
            <div className="flex items-center justify-between">
              <span className="text-sm">{filters.minPrice}€</span>
              <span className="text-sm">{filters.maxPrice}€</span>
            </div>
            <Slider
              min={0}
              max={5000}
              step={100}
              value={[filters.minPrice || 0, filters.maxPrice || 5000]}
              onValueChange={([min, max]) =>
                onFiltersChange({ ...filters, minPrice: min, maxPrice: max })
              }
            />
          </div>

          <div className="space-y-4">
            <Label>Chambres</Label>
            <Slider
              min={1}
              max={6}
              step={1}
              value={[filters.bedrooms || 1]}
              onValueChange={([value]) =>
                onFiltersChange({ ...filters, bedrooms: value })
              }
            />
            <div className="text-sm">{filters.bedrooms} chambre(s)</div>
          </div>

          <div className="space-y-4">
            <Label>Salles de bain</Label>
            <Slider
              min={1}
              max={4}
              step={1}
              value={[filters.bathrooms || 1]}
              onValueChange={([value]) =>
                onFiltersChange({ ...filters, bathrooms: value })
              }
            />
            <div className="text-sm">{filters.bathrooms} salle(s) de bain</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}