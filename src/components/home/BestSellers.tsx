import { Link } from "react-router-dom";
import ProductCard from "../ui/ProductCard";

const BestSellers = () => {
  return (
    <div className="px-16 space-y-4 my-4">
      <div className=" flex items-center justify-between flex-col lg:flex-row ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-2xl">Best Sellers</h2>
          <p className="text-xs font-semibold">Special products this month</p>
        </div>
        <div className="border flex  justify-between px-4 rounded py-2 gap-6  ">
          <Link className="font-medium text-sm" to={"#"}>
            All
          </Link>
          <Link className="font-medium text-sm text-gray-600" to={"#"}>
            BEST SELLER
          </Link>
          <Link className="font-medium text-sm text-gray-600" to={"#"}>
            MOST VIEWED
          </Link>
          <Link className="font-medium text-sm text-gray-600" to={"#"}>
            TOP BRANDS
          </Link>
        </div>
      </div>
      <div className="border-t grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default BestSellers;
