import FadeIn from "@/components/motion/FadeIn";
import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function ProductCalculator() {
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState("");
  const [paper, setPaper] = useState("");
  const [plastic, setPlastic] = useState("");
  const [quantity, setQuantity] = useState(1);

  const sizeOptions = [
    { label: "85x55 mm" },
    { label: "90x50 mm" },
  ];

  const paperOptions = [
    { label: "Mat" },
    { label: "Brillant" },
  ];

  const plasticOptions = [
    { label: "Sans" },
    { label: "Mat" },
    { label: "Brillant" },
  ];

  // Table des prix fixes par combinaison taille + plastification
  const priceTable: Record<string, number> = {
    "85x55 mm-Sans": 350,
    "85x55 mm-Brillant": 350,
    "85x55 mm-Mat": 320,
    "90x50 mm-Sans": 370,
    "90x50 mm-Brillant": 370,
    "90x50 mm-Mat": 340,
  };

  const handleChange = (
    type: "size" | "paper" | "plastic" | "quantity" | "",
    value: string | number
  ) => {
    if (type === "size" && typeof value === "string") setSize(value);
    if (type === "paper" && typeof value === "string") setPaper(value);
    if (type === "plastic" && typeof value === "string") setPlastic(value);
    if (type === "quantity" && typeof value === "number") setQuantity(value);

    // Récupérer les valeurs après mise à jour
    const newSize = type === "size" ? value : size;
    const newPlastic = type === "plastic" ? value : plastic;
    const newQuantity = type === "quantity" ? value : quantity;

    // Forcer les types pour éviter erreurs TS
    const sizeStr = typeof newSize === "string" ? newSize : "";
    const plasticStr = typeof newPlastic === "string" ? newPlastic : "";
    const quantityNum = typeof newQuantity === "number" ? newQuantity : Number(newQuantity);

    // Calcul prix selon table, avec fallback 300
    const key = `${sizeStr}-${plasticStr}`;
    const fixedPrice = priceTable[key] ?? 300;

    setPrice(fixedPrice * quantityNum);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 font-neue">
      {/* Bandeau haut */}
      <FadeIn i={1}>
        <div className="bg-blue-950 p-2 rounded-lg mb-10 lg:flex">
          <div>
            <img
              className="rounded-lg w-full"
              src="https://placehold.co/500x300"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] lg:px-16 flex flex-col justify-center gap-5">
            <h2 className="text-white text-3xl">
              Lorem ipsum, dolor <span className="font-bold">sit amet</span>{" "}
              consectetur adipisicing elit, sed
            </h2>
            <div className="bg-gray-500 h-7 rounded-full flex items-center justify-center px-[2px] py-[2px] w-fit gap-2">
              <div className="bg-blue-700 h-full w-6 flex items-center justify-center rounded-full cursor-pointer">
                <GoArrowUpRight color="black" />
              </div>
              <h5 className="text-xs mr-4 font-semibold cursor-pointer">
                www.violetvision.ma
              </h5>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Produit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image */}
        <div className="w-full h-[334px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">597px × 334px</span>
        </div>

        {/* Infos produit */}
        <div>
          <h1 className="text-2xl font-bold">Carte de visite</h1>
          <p className="text-gray-600">Description</p>
          <p className="text-xl text-black">
            Support administratif et commercial imprimé pour présenter votre marque avec professionnalisme.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★☆</span>
            <span className="text-sm text-gray-500">(109)</span>
          </div>

          {/* Prix */}
          <div className="mt-2">
            <span className="text-3xl font-bold">{price} MAD</span>
            <span className="text-gray-400 line-through ml-2">400 MAD</span>
          </div>
          <p className="text-xl text-gray-700">
            Support administratif et commercial imprimé pour présenter votre marque avec professionnalisme.
          </p>
        </div>

        {/* Options */}
        <div className="mt-4 space-y-4 p-4 rounded-lg text-black">
          {/* Taille */}
          <div>
            <h3 className="font-semibold mb-2">Taille</h3>
            <div className="flex gap-2 flex-wrap">
              {sizeOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleChange("size", opt.label)}
                  className={`px-4 py-2 border-2 rounded ${
                    size === opt.label
                      ? "bg-gray-500 text-[#2C0A69] border-gray-700"
                      : "bg-transparent border-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Type de papier */}
          <div>
            <h3 className="font-semibold mb-2">Type de papier</h3>
            <div className="flex gap-2 flex-wrap">
              {paperOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleChange("paper", opt.label)}
                  className={`px-4 py-2 border-2 rounded ${
                    paper === opt.label
                      ? "bg-gray-500 text-[#2C0A69] border-gray-700"
                      : "bg-transparent border-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plastification */}
          <div>
            <h3 className="font-semibold mb-2">Plastification</h3>
            <div className="flex gap-2 flex-wrap">
              {plasticOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleChange("plastic", opt.label)}
                  className={`px-4 py-2 border-2 rounded ${
                    plastic === opt.label
                      ? "bg-gray-500 text-[#2C0A69] border-gray-700"
                      : "bg-transparent border-gray-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantité */}
          <div>
            <h3 className="font-semibold mb-2">Quantité</h3>
            <div className="flex gap-2 mt-4">
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => {
                  const q = Number(e.target.value);
                  handleChange("quantity", q);
                }}
                className="border-2 border-gray-700 bg-transparent text-black rounded px-3 py-2 w-24"
              />
              <button
                onClick={() => {
                  setSize("");
                  setPaper("");
                  setPlastic("");
                  setQuantity(1);
                  setPrice(0);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded font-semibold"
              >
                Réinitialiser
              </button>

              <button className="px-4 py-2 bg-[#2C0A69] text-white rounded font-semibold">
                Terminer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Passer la commande */}
      <div>
        <button className="mt-6 w-full py-3 bg-[#2C0A69] text-white rounded text-lg font-semibold">
          Passer la commande
        </button>
      </div>

      {/* Avis */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Avis & évaluations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((review) => (
            <div key={review} className="p-4 border rounded">
              <div className="flex items-center mb-2">
                {"★".repeat(4)}{"☆".repeat(1)}
                <span className="ml-2 text-sm text-gray-500">
                  par Utilisateur {review}
                </span>
              </div>
              <p className="text-gray-700">
                Très bon produit, livraison rapide et qualité au top !
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Voir plus</button>
        </div>
      </div>
    </div>
  );
}
