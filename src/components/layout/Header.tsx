import { useState } from 'react';
import { User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link} from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//const navigate = useNavigate();
const user = {
  firstName: "Rihab",
  lastName: "H.",
};



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
         {/* 🔵 Barre supérieure */}
      <div className="  py-4 bg-gray-100 border-y-black text-sm text-gray-700 px-4 py-2 flex justify-between items-center">
        <div className="flex gap-4 px-56">
          <Link to="/apropos" className="hover:underline">À propos</Link>
          <Link to="/services" className="hover:underline">Services</Link>
        </div>
        <div>
          Bonjour, <span className="font-semibold">{user.firstName} {user.lastName}</span>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
   


          <div className="flex items-center gap-4">
            <img src="src/images/logov.png" alt="error" className="w-[60px] object-contain" />
          </div>


 {/* Bloc Catégories + Recherche */}
<div className="hidden md:flex  gap-2 w-4/12 max-w-xl mx-auto border border-gray-300 rounded-md   overflow-hidden">
  {/* Menu déroulant des catégories */}
  <select className="h-10 bg-gray-100 p-1 text-sm border-r outline-none">
    <option>Toutes Catégories</option>
    <option>Cartes</option>
    <option>Goodies</option>
    <option>Textile</option>
    <option>Impression</option>
  </select>

  {/* Champ de recherche */}
  <input
    type="text"
    placeholder="Rechercher Produit"
    className="h-10 flex-1 px-4  bg-gray-100 text-sm text-gray-800 outline-none"
  />
</div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 p-10">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              Accueil
            </Link>
            <Link to="/search" className="text-sm text-muted-foreground hover:text-primary">
              Recherche
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Icône utilisateur */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className="text-sm text-muted-foreground hover:text-primary ">
              <Button className="rounded-md bg-white text-black hover:bg-violet-400 hover:text-white">
               <h3>S'inscrire</h3>
              </Button>
            </Link>
             <Link to="/login" className="text-sm text-muted-foreground   hover:text-primary ">
              <Button className="rounded-md bg-violet-900 hover:bg-neutral-300 hover:text-zinc-900">
               <h3>Se connecter</h3>
              </Button>
            </Link>
          </div>

          {/* Bouton burger mobile */}
          <Button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary">Découvrir</a>
            <a href="#" className="text-sm font-medium hover:text-primary">Locations</a>
            <a href="#" className="text-sm font-medium hover:text-primary">À propos</a>
            <Button className="w-full">Se connecter</Button>
          </nav>
        </div>
      )}
    </header>
  );
}
