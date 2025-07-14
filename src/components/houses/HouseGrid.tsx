import { House } from '@/types';
import { HouseCard } from './HouseCard';

interface HouseGridProps {
  houses: House[];
}

export function HouseGrid({ houses }: HouseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}