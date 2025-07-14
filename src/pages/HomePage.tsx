import { HeroSection } from '@/components/home/HeroSection';
import { PopularHouses } from '@/components/home/PopularHouses';
import { Features } from '@/components/home/Features';
import { Testimonials } from '@/components/home/Testimonials';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularHouses />
      <Features />
      <Testimonials />
    </>
  );
}