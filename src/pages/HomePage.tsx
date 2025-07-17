import { HeroSection } from "@/components/home/HeroSection";
import { PopularHouses } from "@/components/home/PopularHouses";
import { Features } from "@/components/home/Features";
import { Testimonials } from "@/components/home/Testimonials";
import Hero from "./Hero";

export function HomePage() {
  return (
    <>
      <Hero />
      <HeroSection />
      <PopularHouses />
      <Features />
      <Testimonials />
    </>
  );
}
