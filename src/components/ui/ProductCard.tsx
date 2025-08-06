import { item } from "@/types";
import React from "react";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

type ProductsCardPrpos = {
  data: item;
};

const ProductCard: React.FC<ProductsCardPrpos> = ({ data }) => {
  return (
    <div className="p-2 border rounded flex flex-col h-full">
      <div className="flex justify-between ">
        <div className=" w-full ">
          <p className="bg-blue-700 m-2 absolute w-fit px-3 py-1 rounded-lg text-xs text-white mb-2">
            -17%
          </p>
          <img
            className="rounded w-full "
            src="https://placehold.co/170x150"
            alt=""
          />
        </div>
      </div>
      <div className="   flex flex-col justify-between ">
        <div className="px-4">
          <h2 className="text-lg font-semibold line-clamp-1 ">{data.name}</h2>
          <div className="flex items-end">
            <p className="text-xs line-clamp-3">
              Lorem ipsum dolor sit amet adipi sicing elit. Beatae quisquam vel,
              vitae odit aspernatur, nostrum quaerat atque, deserunt explicabo
              perspiciatis blanditiis ipsam minus quas magni suscipit accusamus
              sed
            </p>
            <span className="text-xs text-blue-600 hover:underline cursor-pointer">
              suite
            </span>
          </div>
          <div className="flex text-xs items-center">
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            <h5>({data.rateCount})</h5>
          </div>
          <div className=" space-x-10">
            <span className="font-semibold ">${data.newPrice}</span>
            <span className="font-semibold text-gray-500 line-through ml-2">
              ${data.oldPrice}
            </span>
          </div>
        </div>
        <button className=" bg-blue-600 my-3 text-white font-semibold w-full border text-xs py-2 rounded   hover:bg-white hover:text-black ">
          Add To Cart
        </button>
        <div className="text-xs px-4 ">
          {data.moreDetails.map((it, i) => (
            <div className="flex gap-x-2">
              <GoDotFill size={8} className="translate-y-1" color="gray" />
              <h5 className="" key={i}>
                {it}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
