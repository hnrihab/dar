import ProductSlider from "@/components/product/ProductSlider";
import BigCard from "@/components/ui/BigCard";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const PriceCalc = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <div className="">
      <div className="px-32 py-6 ">
        <BigCard />
        <div className=" flex justify-end">
          <div className="flex items-center lg:w-[30%] bg-dgray gap-4 px-2 py-2 text-xs rounded ">
            <IoMdSearch className="" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="Recherche Produit"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="px-16 bg-dgray">
        <ProductSlider />
      </div>
      <div className="px-32 bg-dgray">
        <button className=" bg-dviolet w-full text-xl p-4 font-bold text-white rounded my-4">
          Passe la commande
        </button>
      </div>
      <div className="px-32 bg-white">
        <span className="text-3xl font-bold">
          Reviews - <span className="text-2xl font-medium">todo</span>
        </span>
      </div>
    </div>
  );
};

export default PriceCalc;
