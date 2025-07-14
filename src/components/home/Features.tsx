import { Shield, Home, Clock, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Locations vérifiées',
    description: 'Toutes nos locations sont vérifiées par notre équipe d\'experts',
  },
  {
    icon: Home,
    title: 'Large choix',
    description: 'Des milliers de biens disponibles partout en France',
  },
  {
    icon: Clock,
    title: 'Réservation rapide',
    description: 'Réservez votre location en quelques clics',
  },
  {
    icon: Heart,
    title: 'Service personnalisé',
    description: 'Une équipe dédiée à votre recherche de location',
  },
];

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pourquoi choisir MaisonLoc ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}