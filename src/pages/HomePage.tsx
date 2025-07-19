// import { HeroSection } from "@/components/home/HeroSection";
// import { PopularHouses } from "@/components/home/PopularHouses";
// import { Features } from "@/components/home/Features";
// import { Testimonials } from "@/components/home/Testimonials";
import BestSellers from "@/components/home/BestSellers";
import Hero from "./Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import Subscribe from "@/components/layout/Subscribe";
import Services from "@/components/home/Services";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSellers />
      <Services />
      <Subscribe />
      {/* <HeroSection />
      <PopularHouses />
      <Features />
      <Testimonials /> */}
    </>
  );
}
