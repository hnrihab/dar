// src/components/home/PopularHouses.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';
import { House } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Remplacez cette clé par votre propre clé API Unsplash
const UNSPLASH_API_KEY = 'QQw3leBt9PAismSD8ufvCv_3lkJFoHn5MwqBv6Tu7p4';

export function PopularHouses() {
  const [houses, setHouses] = useState<House[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Charger les maisons marocaines à partir de l'API Unsplash
    const fetchHouses = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: 'house for rent Morocco ',
            per_page: 6, // Nombre d'images à récupérer
            client_id: UNSPLASH_API_KEY, // Votre clé API Unsplash
          },
        });

        // Créer des objets maisons à partir des images récupérées
        const fetchedHouses: House[] = response.data.results.map((image: any) => ({
          id: image.id,
          title: 'Maison marocaine',
          description: 'Description générique de maison marocaine.',
          price: Math.floor(Math.random() * 300) + 1000, // Exemple de prix aléatoire
          location: 'Maroc',
          images: [image.urls.regular], // URL de l'image
          bedrooms: Math.floor(Math.random() * 3) + 2, // Exemple de chambres
          bathrooms: Math.floor(Math.random() * 2) + 1, // Exemple de salles de bain
          squareMeters: Math.floor(Math.random() * 100) + 80, // Exemple de superficie
          amenities: ['Piscine', 'Jardin', 'Terrasse'], // Exemple d'équipements
          rating: Math.random() * 2 + 3, // Exemple de note
          reviews: Math.floor(Math.random() * 100) + 10, // Nombre d'avis aléatoire
        }));

        setHouses(fetchedHouses);
      } catch (error) {
        console.error('Erreur lors de la récupération des maisons:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHouses();
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <section>
      <div className="h-[100px] flex items-center justify-center text-3xl md:text-2xl lg:text-4xl text-center font-bold text-white mb-9" style={{ backgroundColor: 'rgba(128, 58, 42, 0.8)' }}>
        "Trouvons ensemble l'endroit que vous méritez"
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Locations populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map((house) => (
            <Card key={house.id} className="overflow-hidden">
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
                  <span className="text-sm text-muted-foreground">{house.location}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{house.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{house.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{house.description}</p>
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
                <Button>Voir détails</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
