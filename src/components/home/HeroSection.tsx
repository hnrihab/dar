// import { Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';


export function HeroSection() {
  return (
    <section className="relative h-[580px] flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(src/images/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',

        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-end">
          <img src="src/images/logowht.png" alt="" className="w-[190px] "/>
        </div>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trouvez votre maison idéale
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Découvrez des milliers de maisons à louer partout en France
          </p>

          {/* <div className="bg-white p-4 rounded-lg shadow-lg flex gap-4">
            <Input
              type="text"
              placeholder="Où souhaitez-vous louer ?"
              className="flex-1"
            />
            <Button size="lg" className="hidden md:flex gap-2">
              <Search className="h-5 w-5" />
              Rechercher
            </Button>
            <Button size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}