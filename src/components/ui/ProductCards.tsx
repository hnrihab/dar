import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Products } from "@/types/index.ts";

type ProductsCardProps = { data: Products };

const ProductCard: React.FC<ProductsCardProps> = ({ data }) => {
  const oldPrice = 100;
  const newPrice = 80;

  // Transformer les options en lignes textuelles
  const allDetails: string[] = Object.entries(data.options ?? {}).map(
    ([key, values]) => `${key}: ${(values ?? []).join(", ")}`
  );

  const [showAll, setShowAll] = useState(false);

  // Affiche 2 lignes si showAll est false, sinon toutes les lignes
  const displayedDetails = showAll ? allDetails : allDetails.slice(0, 2);

  return (
    <div className="p-2 border rounded flex flex-col h-full">
      <div className="flex justify-between">
        <div className="w-full">
          <img
            className="rounded w-full"
            src="https://placehold.co/170x150"
            alt={data.name}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="px-4 mt-2">
          <h2 className="text-lg font-semibold line-clamp-1">{data.name}</h2>

          <div className="flex text-xs items-center mt-1">
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <FaStar color="yellow" />
            <h5>(5)</h5>
          </div>

          <div className="space-x-10 mt-2">
            <span className="font-semibold">${newPrice}</span>
            <span className="font-semibold text-gray-500 line-through ml-2">${oldPrice}</span>
          </div>
<button className="bg-violet-700 my-3 text-white font-semibold w-full border text-xs py-2 rounded hover:bg-white hover:text-black">
          Add To Cart
        </button>
          {/* Affichage des lignes avec puces */}
          <div className="text-xs mt-2 space-y-1">
            {displayedDetails.map((it, i) => (
              <div key={i} className="flex items-start gap-2">
                <GoDotFill size={8} className="translate-y-1" color="gray" />
                <span>{it}</span>
              </div>
            ))}
          </div>

          {/* Bouton pour afficher tout ou moins */}
          {allDetails.length > 2 && (
            <button
              className="text-violet-500 text-xs mt-1 underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Afficher moins" : "Afficher plus"}
            </button>
          )}
        </div>

        
      </div>
    </div>
  );
};

export default ProductCard;
