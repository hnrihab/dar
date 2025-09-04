import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Products } from "@/types/index.ts";

type ProductCardProps = { data: Products };

const pp: React.FC<ProductCardProps> = ({ data }) => {
  const oldPrice = 100; // exemple
  const newPrice = 80;  // exemple

  // Transforme les options en lignes textuelles, limite à 4 lignes
  const moreDetails: string[] = Object.entries(data.options ?? {}).map(
    ([key, values]) => `${key}: ${(values ?? []).join(", ")}`
  );
  const displayedDetails = moreDetails.slice(0, 4);

  return (
<> 
      {/* Image */}
      <div className="w-full mb-2">
        <img
          className="rounded-lg w-full h-40 object-cover"
          src="https://placehold.co/300x200"
          alt={data.name}
        />
      </div>

     </> 
  );
};

export default pp;
