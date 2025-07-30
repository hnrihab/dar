// src/pages/Cartes.jsx
import { Link } from "react-router-dom";

const cartes = [
  {
    title: "Carte de Visite",
    imageUrl: "https://placehold.co/200x120?text=Visite",
    link: "/produits/cartes/visite",
  },
  {
    title: "Carte d'invitation",
    imageUrl: "https://placehold.co/200x120?text=Invitation",
    link: "/produits/cartes/invitation",
  },
  {
    title: "Carte postale",
    imageUrl: "https://placehold.co/200x120?text=Postale",
    link: "/produits/cartes/postale",
  },
  {
    title: "Carte de Remerciement",
    imageUrl: "https://placehold.co/200x120?text=Remerciement",
    link: "/produits/cartes/remerciement",
  },
  {
    title: "Carte de Vœux",
    imageUrl: "https://placehold.co/200x120?text=Voeux",
    link: "/produits/cartes/voeux",
  },
  {
    title: "Carte de Fidélité",
    imageUrl: "https://placehold.co/200x120?text=Fidélité",
    link: "/produits/cartes/fidelite",
  },
];

export default function Cartes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tous les types de cartes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartes.map((carte, index) => (
          <Link
            key={index}
            to={carte.link}
            className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={carte.imageUrl}
              alt={carte.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{carte.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
