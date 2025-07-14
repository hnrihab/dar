import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            {/* <Home className="h-6 w-6 text-primary" /> */}
            <img src="src/images/logoblck.png" alt="error" className="w-[60px] object-contain" />

          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              Accueil
            </Link>
            <Link to="/search" className="text-sm text-muted-foreground hover:text-primary">
              Recherche
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
              À propos
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* <Button className="rounded-full">
              <Search className="h-5 w-5" />
            </Button> */}
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">
              <Button className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>



          </div>

          <Button


            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Découvrir
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Locations
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              À propos
            </a>
            <Button className="w-full">Se connecter</Button>
          </nav>
        </div>
      )}
    </header>
  );
}