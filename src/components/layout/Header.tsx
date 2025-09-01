import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { LuCircleUserRound } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

interface Category {
  id: string;
  name: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCat, setSelectedCat] = useState("tous");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Charger les catégories
  useEffect(() => {
    fetch("http://localhost:8000/get_categories.php")
      .then(res => res.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur chargement catégories :", err);
        setError("Impossible de charger les catégories");
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCat(value);
    if (value === "tous") {
      navigate(`/produit?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`/produit/${value}?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCat === "tous") {
      navigate(`/produit?search=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate(`/produit/${selectedCat}?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md lg:px-16 border-b mx-12">
      <div className="mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-14">
              <img
                src="src/images/logov.png"
                alt="error"
                className="w-[100%] object-cover"
              />
            </div>
          </div>

          {/* Barre de recherche + catégories */}
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            {loading ? (
              <span className="text-sm text-gray-500">Chargement...</span>
            ) : error ? (
              <span className="text-sm text-red-500">{error}</span>
            ) : (
              <div className="bg-gray-200 px-2 py-1 rounded flex items-center gap-2">
                <select
                  value={selectedCat}
                  onChange={handleCategoryChange}
                  className="text-xs px-2 py-1 font-semibold"
                >
                  <option value="tous">Toutes les catégories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Recherche Produit"
                  className="text-xs px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            )}
          </form>

          {/* Navigation */}
          <nav className="hidden lg:block space-x-3">
            <Link to="/" className="text-sm hover:text-primary">Home</Link>
            <Link to="/produit" className="text-sm hover:text-primary">Produits</Link>
            <Link to="/contact" className="text-sm hover:text-primary">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-2">
            <button className="bg-violet-500 text-white px-4 py-2 rounded text-xs">
              Demande de devis
            </button>
            <Link
              to="/register"
              className="font-semibold px-4 py-2 rounded border border-gray-300 text-xs"
            >
              S'inscrire
            </Link>
            <Link
              to="/login"
              className="bg-violet-700 text-white font-semibold px-4 py-2 rounded text-xs"
            >
              Connexion
            </Link>
            <div className="relative">
              <MdOutlineShoppingCart size={24} color="black" />
              <span className="absolute -top-1 -right-1 bg-blue-700 text-white text-xs w-4 h-4 rounded-full text-center">
                3
              </span>
            </div>
            <LuCircleUserRound size={24} />
          </div>

          {/* Burger menu mobile */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link to="/produit" className="text-sm font-medium hover:text-primary">Produits</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
            <button className="w-full bg-violet-700 text-white py-2 rounded">Se connecter</button>
          </nav>
        </div>
      )}
    </header>
  );
}
