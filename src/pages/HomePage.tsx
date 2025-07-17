// import { HeroSection } from "@/components/home/HeroSection";
// import { PopularHouses } from "@/components/home/PopularHouses";
// import { Features } from "@/components/home/Features";
// import { Testimonials } from "@/components/home/Testimonials";
import Hero from "./Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      {/* <HeroSection />
      <PopularHouses />
      <Features />
      <Testimonials /> */}
    </>
  );
}
