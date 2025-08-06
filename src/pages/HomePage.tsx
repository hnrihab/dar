import BestSellers from "@/components/home/BestSellers";
import Hero from "./Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Services from "@/components/home/Services";
import LatestNew from "@/components/home/LatestNews";
import Articals from "@/components/home/Articls";

import LeftNav from "@/components/layout/LeftNav";

export function HomePage() {
  return (
    <>
      <div className="flex border ">
        <LeftNav />
        <Hero />
      </div>
      <div className=" px-4 lg:mx-12 border">
        <FeaturedCategories />
        <BestSellers />
        <Articals />
        <LatestNew />
        <Services />
      </div>
    </>
  );
}
