import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Products } from "@/types/index.ts";

type ProductsCardProps = { data: Products };

const ProductCard: React.FC<ProductsCardProps> = ({ data }) => {
  const oldPrice = 100;
  const newPrice = 80;

  const moreDetails: string[] = [];
  Object.entries(data.options).forEach(([key, values]) => {
    moreDetails.push(`${key}: ${values.join(", ")}`);
  });

  return (
    <div className="p-2 border rounded flex flex-col h-full">
      <div className="flex justify-between">
        <div className="w-full">
          <img className="rounded w-full" src="https://placehold.co/170x150" alt={data.name} />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="px-4">
          <h2 className="text-lg font-semibold line-clamp-1">{data.name}</h2>
          <div className="flex items-end">
            <p className="text-xs line-clamp-3">Produit avec plusieurs options.</p>
          </div>
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
        </div>
        <button className="bg-violet-700 my-3 text-white font-semibold w-full border text-xs py-2 rounded hover:bg-white hover:text-black">Add To Cart</button>
        <div className="text-xs px-4">
          {moreDetails.map((it, i) => (
            <div className="flex gap-x-2" key={i}>
              <GoDotFill size={8} className="translate-y-1" color="gray" />
              <h5>{it}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
