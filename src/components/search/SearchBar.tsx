import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchBar() {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        type="text"
        placeholder="Rechercher par ville, quartier..."
        className="pl-10"
      />
    </div>
  );
}