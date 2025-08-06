
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (

    <header className="fixed top-0 left-0 right-0  z-50 bg-white/80 backdrop-blur-md px-12 ">
      <div className="  border ">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Barre de recherche */}
          <div className="flex items-center ">
            <div className="w-14">
              <img
                src="src/images/logov.png"
                alt="error"
                className="w-[100%]  object-cover"
              />
            </div>
          </div>
          {/* Barre de recherche */}
          <div>
            <div className="bg-gray-200 px-2 py-1 rounded  flex justify-center items-center">
              <form action="">
                <select
                  name="categories"
                  id=""
                  className="text-xs px-1.5 font-semibold mr-3"
                >
                  <option value="Tous">Tous Categories</option>
                  <option value="Carts">Carts</option>
                  <option value="Flyers & Depliant">Flyers & Depliant</option>
                  <option value="PLV & Signalétique">PLV & Signalétique</option>
                  <option value="Liver & Catalogues">Liver & Catalogues</option>
                  <option value="Affiches & Postures">
                    Affiches & Postures
                  </option>
                  <option value="Papeterie & Bureau">Papeterie & Bureau</option>
                </select>


                <input
                  type="text"
                  name="search"
                  id=""
                  placeholder="Recherche Produit"
                  className="text-xs px-2 py-1 border border-gray  focus:outline-none rounded focus:ring-1 focus:ring-blue-500 focus:border-transparent"
                />
              </form>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden lg:block space-x-3">
            <Link to="/" className="text-sm  hover:text-primary">
              Home
            </Link>
            <Link to="/search" className="text-sm  hover:text-primary">
              Produit
            </Link>
            <Link to="/about" className="text-sm  hover:text-primary">
              Contact
            </Link>
          </nav>

          {/** the demende devis button */}
          <div className="hidden lg:block">
            <button className="bg-violet-500 text-white px-4 py-2 rounded border border-black-90 text-xs">
              Demende de devis
            </button>
          </div>

          {/**Login buttons */}
          <div className="space-x-2 hidden lg:block">
            <button className="font-semibold px-4 py-2 rounded border border-black-90 text-xs">
              S'inscrire
            </button>
            <button className="bg-violet-700 font-semibold text-white px-4 py-2 rounded border border-black-90 text-xs">
              Connexion
            </button>
          </div>
          <div className="lg:flex text-2xl hidden space-x-2 items-center justify-center">
            <div className="relative ">
              <h5 className="text-xs absolute -right-1 -top-1 bg-blue-700 w-4 h-4 text-center text-white rounded-full ">
                3
              </h5>
              <MdOutlineShoppingCart color="black" />
            </div>
            <LuCircleUserRound />
          </div>
          {/* Bouton burger mobile */}
          <Button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
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
