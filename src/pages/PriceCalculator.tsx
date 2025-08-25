import { useState } from "react";

type Option = {
  name: string;
  price: number;
};

type Product = {
  name: string;
  basePrice: number;
  image?: string;
  options: Option[];
};

const product: Product = {
  name: "Carte de visite",
  basePrice: 299,
  image: "", // Tu peux mettre une URL ici
  options: [
    { name: "Coins arrondis", price: 25 },
    { name: "Finition brillante", price: 30 },
    { name: "Papier épais", price: 15 },
  ],
};

const PriceCalculator = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (optionName: string) => {
    setSelectedOptions((prev) =>
      prev.includes(optionName)
        ? prev.filter((opt) => opt !== optionName)
        : [...prev, optionName]
    );
  };

  const totalPrice =
    product.basePrice +
    product.options
      .filter((opt) => selectedOptions.includes(opt.name))
      .reduce((sum, opt) => sum + opt.price, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      {/* Image ou Placeholder */}
      <div className="flex-1 flex items-center justify-center bg-gray-100 h-64 rounded">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full object-contain"
          />
        ) : (
          <span className="text-gray-400">Aperçu du produit</span>
        )}
      </div>

      {/* Détails produit et calcul */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="mb-4 text-gray-600">
          Prix de base : {product.basePrice}€
        </p>

        <div className="space-y-3">
          {product.options.map((option) => (
            <button
              key={option.name}
              onClick={() => toggleOption(option.name)}
              className={`w-full text-left px-4 py-2 rounded border ${
                selectedOptions.includes(option.name)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
            >
              {selectedOptions.includes(option.name) ? "✓ " : ""}
              {option.name} (+{option.price}€)
            </button>
          ))}
        </div>

        <div className="mt-6 text-xl font-semibold">Total : {totalPrice}€</div>
      </div>
    </div>
  );
};

export default PriceCalculator;
