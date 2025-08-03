import { item } from "@/types";
import React from "react";

type ProductsCardPrpos = {
  data: item;
};

const ProductCard: React.FC<ProductsCardPrpos> = ({ data }) => {
  return (
    <div className="p-2 border rounded h-full ">
      <div className="flex justify-between ">
        <div className=" w-full ">
          <p className="bg-[#fd9636] m-2 absolute w-fit px-3 py-1 rounded-lg text-xs text-white mb-2">
            -17%
          </p>
          <img
            className="rounded w-full "
            src="https://placehold.co/170x150"
            alt=""
          />
        </div>
      </div>
      <div className="mt-3   flex flex-col h-[52%] justify-between ">
        <h2 className="text-lg font-semibold line-clamp-1 ">{data.name}</h2>
        <p className="text-xs   line-clamp-2 indent-4  ">
          Lorem ipsum dolor sit amet adipi sicing elit. Beatae quisquam vel,
          vitae odit aspernatur, nostrum quaerat atque, deserunt explicabo
          perspiciatis blanditiis ipsam minus quas magni suscipit accusamus sed
        </p>
        <span className="text-xs text-blue-600 hover:underline cursor-pointer">
          Lire la suite
        </span>
        <div className="my-2 ">
          <span className="font-semibold ">${data.newPrice}</span>
          <span className="font-semibold text-darkBlue/50 text-xs line-through ml-2">
            ${data.oldPrice}
          </span>
        </div>
        <button className=" bg-blue-600 text-white font-semibold w-full border text-xs py-2 rounded   hover:bg-white hover:text-black my-3">
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
