import React from "react";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export default function Sidebar({ categories, selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Catégories</h2>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`p-2 rounded mb-2 cursor-pointer ${
              selectedCategory === cat ? "bg-violet-700" : "hover:bg-gray-700"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
