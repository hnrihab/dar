import { FaEye, FaRegHeart, FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const ProductCard = () => {
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
        <h5 className="text-xs text-lightBlue/50 font-semibold">Apple</h5>
        <h2 className="text-sm font-semibold text-darkBlue">
          2022 Apple iMac with Retina 5K <br /> Display 8GB RAM, 256 SSD
        </h2>
        <div className="flex items-center mt-1">
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <FaStar className="text-[#ffb067]" />
          <span className="text-xs font-semibold ml-2 text-lightBlue">
            (65)
          </span>
        </div>
        <div className="my-2">
          <span className="font-semibold text-darkBlue">$2856.3</span>
          <span className="font-semibold text-darkBlue/50 text-xs line-through ml-2">
            $3225.6
          </span>
        </div>
        <button className="w-full border text-xs py-2 rounded text-darkBlue hover:text-white  hover:bg-darkBlue my-3">
          Add To Cart
        </button>
        <div className="text-darkBlue">
          <h5 className="text-xs">27-inch (diagonal) Retina 5k display</h5>
          <h5 className="text-xs">
            3.1Ghz 6-core 10th-generatin Intel COre i5
          </h5>
          <h5 className="text-xs">AMD Radeon Pro Graphics</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
