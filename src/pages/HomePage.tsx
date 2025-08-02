// import { HeroSection } from "@/components/home/HeroSection";
// import { PopularHouses } from "@/components/home/PopularHouses";
// import { Features } from "@/components/home/Features";
import BestSellers from "@/components/home/BestSellers";
import Hero from "./Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Services from "@/components/home/Services";
import LatestNew from "@/components/home/LatestNews";
import Articals from "@/components/home/Articls";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import LeftNav from "@/components/layout/LeftNav";

export function HomePage() {
  return (
    <>
      <div className="flex">
        <LeftNav />
        <Hero />
      </div>
      <FeaturedCategories />
      <BestSellers />
      <Articals />
      <LatestNew />
      <Services />
      <ProductsShowcase />

      {/* <HeroSection />
            <PopularHouses />

      <Features />
       */}
    </>
  );
}
