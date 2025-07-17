import acer from "../../images/acer.png";
import nokia from "../../images/nokia.png";
import asus from "../../images/asus.png";
import casio from "../../images/casio.png";
import dell from "../../images/dell.png";
import panasonic from "../../images/panasonic.png";
import vaio from "../../images/vawio.png";
import SmallCard from "../ui/smallCard";

const FeaturedCategories = () => {
  return (
    <div className="my-5">
      <div className="px-16 flex items-center justify-between flex-col lg:flex-row ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-2xl">Featured Categories</h2>
          <p className="text-xs font-semibold">
            Choose you necessary products from this Feature categories
          </p>
        </div>
        <div className="border flex flex-[1/2] justify-between px-4 rounded py-2 gap-6 ">
          <img className="h-4" src={acer} alt="" />
          <img className="h-4 " src={nokia} alt="" />
          <img className="h-4 " src={asus} alt="" />
          <img className="h-4 " src={casio} alt="" />
          <img className="h-4 " src={dell} alt="" />
          <img className="h-4 " src={panasonic} alt="" />
          <img className="h-4 " src={vaio} alt="" />
        </div>
      </div>
      <div className="px-16 mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default FeaturedCategories;
