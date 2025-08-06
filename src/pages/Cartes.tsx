// pages/carte.tsx
import React from "react";
import ProductCard from "C:/Users/pc/Desktop/clone/dar/src/components/ui/ProductCard.tsx"; // adapte ce chemin
import { item } from "@/types"; // adapte le chemin selon où tu as mis le type
import FadeIn from "C:/Users/pc/Desktop/clone/dar/src/components/motion/FadeIn.tsx"; // optionnel, si tu veux l'animation

// Tes produits simulés (à remplacer plus tard par des données backend si besoin)
const bestSoldProducts: item[] = [
  {
    name: "Carte de visite Premium",
    company: "PrintXpress",
    detail: "Papier glacé de haute qualité, recto verso",
    imageUrl: "https://placehold.co/200x150?text=Carte+1",
    link: "/produit/carte-premium",
    rateCount: 34,
    newPrice: "12.99",
    oldPrice: "16.99",
    moreDetails: [
      "Livraison 48h",
      "Impression haute résolution",
      "Support client 24/7",
    ],
  },
  {
    name: "Carte Pro Design",
    company: "DesignPrint",
    detail: "Design moderne avec coins arrondis",
    imageUrl: "https://placehold.co/200x150?text=Carte+2",
    link: "/produit/carte-pro-design",
    rateCount: 18,
    newPrice: "9.99",
    oldPrice: "14.99",
    moreDetails: ["Finition matte", "Design personnalisé", "Écologique"],
  },
  // Tu peux ajouter autant de produits que tu veux ici
];

const CartePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Nos Cartes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSoldProducts.map((item, i) => (
          <FadeIn key={i} i={i}>
            <ProductCard data={item} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default CartePage;
