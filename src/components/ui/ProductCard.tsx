import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Products } from "@/types/index.ts";

type ProductCardProps = { data: Products };

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const oldPrice = 100; // exemple
  const newPrice = 80;  // exemple

  // Transforme les options en lignes textuelles, limite à 4 lignes
  const moreDetails: string[] = Object.entries(data.options ?? {}).map(
    ([key, values]) => `${key}: ${(values ?? []).join(", ")}`
  );
  const displayedDetails = moreDetails.slice(0, 4);

  return (
    <div className="p-3 border rounded-lg flex flex-col h-full shadow hover:shadow-lg transition-shadow duration-200">
      
      {/* Image */}
      <div className="w-full mb-2">
        <img
          className="rounded-lg w-full h-40 object-cover"
          src="https://placehold.co/300x200"
          alt={data.name}
        />
      </div>

      {/* Contenu */}
      <div className="flex flex-col justify-between flex-1">
        <div className="px-1">
          <h2 className="text-lg font-semibold line-clamp-1">{data.name}</h2>

          <div className="flex text-xs items-center mt-1 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="gold" size={12} />
            ))}
            <span className="text-gray-500">(5)</span>
          </div>

          <div className="mt-1 flex items-center space-x-2">
            <span className="font-semibold text-violet-700">${newPrice}</span>
            <span className="text-gray-400 line-through">${oldPrice}</span>
          </div>

          {/* Options limitées à 4 lignes */}
          <div className="mt-2 text-xs space-y-1">
            {displayedDetails.map((line, i) => (
              <div className="flex items-start gap-2" key={i}>
                <GoDotFill size={8} className="translate-y-1 mt-0.5" color="gray" />
                <p>{line}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton */}
        <button className="mt-3 bg-violet-700 text-white font-semibold w-full py-2 rounded hover:bg-white hover:text-violet-700 border border-violet-700 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
