import { Star } from 'lucide-react';
import { House } from '@/types';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img
            src={house.images[0]}
            alt={house.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            {house.location}
          </span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{house.rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{house.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {house.description}
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span>{house.bedrooms} chambres</span>
          <span>{house.bathrooms} sdb</span>
          <span>{house.squareMeters} m²</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-semibold">
          {house.price}€ <span className="text-sm font-normal">/mois</span>
        </div>
        <Button asChild>
          <Link to={`/houses/${house.id}`}>Voir détails</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}