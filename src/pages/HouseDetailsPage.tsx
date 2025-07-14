import { useParams } from 'react-router-dom';
import {
  Bath,
  BedDouble,
  Calendar,
  Home,
  MapPin,
  Maximize,
  Star,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function HouseDetailsPage() {
  const { id } = useParams();

  // Mock data for demonstration
  const house = {
    id,
    title: 'Villa contemporaine avec piscine',
    description:
      'Magnifique villa moderne avec vue panoramique sur la mer. Cette propriété exceptionnelle offre des prestations haut de gamme et un cadre de vie unique.',
    price: 2500,
    location: 'Aix-en-Provence',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    ],
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 200,
    amenities: [
      'Piscine',
      'Jardin',
      'Parking',
      'Climatisation',
      'Terrasse',
      'Vue mer',
    ],
    rating: 4.8,
    reviews: 24,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {house.images.map((image, index) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={image}
                    alt={`${house.title} - Image ${index + 1}`}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{house.title}</h1>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{house.rating}</span>
              <span className="text-muted-foreground">
                ({house.reviews} avis)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <MapPin className="h-4 w-4" />
            <span>{house.location}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-2">
              <BedDouble className="h-5 w-5 text-primary" />
              <span>{house.bedrooms} chambres</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-5 w-5 text-primary" />
              <span>{house.bathrooms} sdb</span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="h-5 w-5 text-primary" />
              <span>{house.squareMeters} m²</span>
            </div>
            <div className="flex items-center gap-2">
              <Home className="h-5 w-5 text-primary" />
              <span>Meublé</span>
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-muted-foreground">{house.description}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Équipements</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {house.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span>• {amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-6 rounded-lg border">
            <div className="text-2xl font-bold mb-4">
              {house.price}€ <span className="text-base font-normal">/mois</span>
            </div>

            <div className="space-y-4 mb-6">
              <Button className="w-full gap-2">
                <Calendar className="h-4 w-4" />
                Réserver une visite
              </Button>
              <Button variant="outline" className="w-full">
                Contacter l'agence
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Cette annonce est gérée par une agence certifiée
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}