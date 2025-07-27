import  { useState } from "react";

interface Subcategory {
  label: string;
  link: string;
  category: string;
}

const data: Subcategory[] = [
  { label: "Cartes de Visite", link: "/categories/cartes/viste", category: "Cartes" },
  { label: "Cartes d'invitation", link: "/categories/cartes/invitation", category: "Cartes" },
  { label: "Cartes postales", link: "/categories/cartes/postale", category: "Cartes" },
  { label: "Cartes de Remerciement", link: "/categories/cartes/remerciment", category: "Cartes" },
  { label: "Cartes de voeux", link: "/categories/cartes/voeux", category: "Cartes" },
  { label: "Cartes de fidélité", link: "/categories/cartes/fidelite", category: "Cartes" },
  { label: "Affiches", link: "/categories/affiches", category: "Affiches & Posters" },
  { label: "Flyers", link: "/categories/flyers", category: "Flyers & Dépliants" },
];

const categories = Array.from(new Set(data.map(item => item.category)));

const SearchAndFilter = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filtered = data.filter(item => {
    const matchSearch = item.label.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchSearch && matchCategory;
  });

  return (
    <div className="w-full p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-4 py-2 rounded-md w-full md:w-1/2"
      />

      {/* Select */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border px-4 py-2 rounded-md w-full md:w-1/3"
      >
        <option value="">Toutes les catégories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Résultats */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {filtered.map((item) => (
          <div key={item.link} className="border p-4 rounded shadow hover:shadow-md transition">
            <h3 className="font-semibold text-lg">{item.label}</h3>
            <a href={item.link} className="text-blue-600 text-sm">Voir plus</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
