import { item } from "@/types";
import React from "react";
import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

type ProductsCardPrpos = {
  data: item;
};
const ProductCard: React.FC<ProductsCardPrpos> = ({ data }) => {
  return (
    <div className="p-4 border rounded">
      <div className="flex justify-between">
        <div>
          <p className="bg-[#fd9636] w-fit px-3 py-1 rounded-lg text-xs text-white mb-2">
            -17%
          </p>
          <img className="rounded" src="https://placehold.co/170x150" alt="" />
        </div>
        <div className="space-y-2">
          <FaRegHeart className="border text-2xl rounded text-darkBlue p-1" />
          <LuShoppingCart className="border text-2xl rounded text-darkBlue p-1" />
          <FaEye className="border text-2xl rounded text-darkBlue p-1" />
        </div>
      </div>
      <div>
        <h5 className="text-xs text-lightBlue/50 font-semibold">
          {data.company}
        </h5>
        <h2 className="text-sm font-semibold text-darkBlue">{data.name}</h2>
        <div className="flex items-center mt-1">
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <span className="text-xs font-semibold ml-2 text-lightBlue">
            ({data.rateCount})
          </span>
        </div>
        <div className="my-2">
          <span className="font-semibold text-darkBlue">${data.newPrice}</span>
          <span className="font-semibold text-darkBlue/50 text-xs line-through ml-2">
            ${data.oldPrice}
          </span>
        </div>
        <button className="w-full border text-xs py-2 rounded text-darkBlue hover:text-white  hover:bg-darkBlue my-3">
          Add To Cart
        </button>
        <div className="text-darkBlue">
          <h5 className="text-xs">{data.moreDetails[0]}</h5>
          <h5 className="text-xs">{data.moreDetails[1]}</h5>
          <h5 className="text-xs">{data.moreDetails[2]}</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
