import BigCard from "@/components/ui/BigCard";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ProductCard from "../ui/ProductCard";
import { item } from "@/types";
import FadeIn from "../motion/FadeIn";

const AllProducts = () => {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="">
      <div className="px-32 py-6 ">
        <BigCard />
        <div className=" flex justify-end">
          <div className="flex items-center lg:w-[30%] bg-dgray gap-4 px-2 py-2 text-xs rounded ">
            <IoMdSearch className="" />
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              type="text"
              placeholder="Recherche Produit"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 px-32">
        <div>
          <h1>Categories</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            debitis ullam aspernatur. Repellat eos fuga nemo temporibus
          </p>

          <div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4   rounded  bg-white"
              />
              <label className="">Cartes</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">Livers & Catalogues</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">Flyers & Depliant</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">Affiches & Postures</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">PLV & Signalétique</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">Papeterie & bereau</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">
                Textile & Objects personnalisés
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="cartes"
                name="Cartes"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-gray-700">Goodies & Gadgets</label>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-5 col-span-3 gap-6">
          {products.map((product, i) => (
            <FadeIn i={1}>
              <ProductCard data={product} key={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

const products: item[] = [
  {
    company: "Samsung",
    name: "Carte de visite",
    detail: "6.8″ AMOLED, 12GB RAM, 256GB Storage",
    rateCount: 109,
    newPrice: 299,
    oldPrice: 349,
    moreDetails: [
      "Quantity",
      "Pelicullage",
      "Lorem ipsam dolor sit amet, consecteur adipi",
      "Lorem ipsam dolor sit amet, consecteur adipi",
    ],
  },
  {
    company: "Sony",
    name: "WH-1000XM5 Wireless Headphones",
    detail: "Noise Cancelling, 30hr battery",
    rateCount: 290,
    newPrice: 349.99,
    oldPrice: 399.99,
    moreDetails: [
      "Industry-leading ANC",
      "Touch controls, Multipoint pairing",
      "Crystal-clear call quality",
    ],
  },
  {
    company: "Dyson",
    name: "V15 Detect Vacuum",
    detail: "Laser dust detection, 60min runtime",
    rateCount: 210,
    newPrice: 599.0,
    oldPrice: 699.0,
    moreDetails: [
      "HEPA filtration, 5 cleaning modes",
      "LCD screen with particle analytics",
      "Lightweight cordless design",
    ],
  },
  {
    company: "Nike",
    name: "Air Jordan 1 Retro High OG",
    detail: "Men's Basketball Shoes",
    rateCount: 180,
    newPrice: 180.0,
    oldPrice: 220.0,
    moreDetails: [
      "Leather upper, Air cushioning",
      "Classic Chicago colorway",
      "High-top ankle support",
    ],
  },
  {
    company: "Samsung",
    name: "Carte de visite",
    detail: "6.8″ AMOLED, 12GB RAM, 256GB Storage",
    rateCount: 109,
    newPrice: 299,
    oldPrice: 349,
    moreDetails: [
      "Quantity",
      "Pelicullage",
      "Lorem ipsam dolor sit amet, consecteur adipi",
      "Lorem ipsam dolor sit amet, consecteur adipi",
    ],
  },
  {
    company: "Sony",
    name: "WH-1000XM5 Wireless Headphones",
    detail: "Noise Cancelling, 30hr battery",
    rateCount: 290,
    newPrice: 349.99,
    oldPrice: 399.99,
    moreDetails: [
      "Industry-leading ANC",
      "Touch controls, Multipoint pairing",
      "Crystal-clear call quality",
    ],
  },
  {
    company: "Dyson",
    name: "V15 Detect Vacuum",
    detail: "Laser dust detection, 60min runtime",
    rateCount: 210,
    newPrice: 599.0,
    oldPrice: 699.0,
    moreDetails: [
      "HEPA filtration, 5 cleaning modes",
      "LCD screen with particle analytics",
      "Lightweight cordless design",
    ],
  },
  {
    company: "Nike",
    name: "Air Jordan 1 Retro High OG",
    detail: "Men's Basketball Shoes",
    rateCount: 180,
    newPrice: 180.0,
    oldPrice: 220.0,
    moreDetails: [
      "Leather upper, Air cushioning",
      "Classic Chicago colorway",
      "High-top ankle support",
    ],
  },
  {
    company: "Samsung",
    name: "Carte de visite",
    detail: "6.8″ AMOLED, 12GB RAM, 256GB Storage",
    rateCount: 109,
    newPrice: 299,
    oldPrice: 349,
    moreDetails: [
      "Quantity",
      "Pelicullage",
      "Lorem ipsam dolor sit amet, consecteur adipi",
      "Lorem ipsam dolor sit amet, consecteur adipi",
    ],
  },
  {
    company: "Sony",
    name: "WH-1000XM5 Wireless Headphones",
    detail: "Noise Cancelling, 30hr battery",
    rateCount: 290,
    newPrice: 349.99,
    oldPrice: 399.99,
    moreDetails: [
      "Industry-leading ANC",
      "Touch controls, Multipoint pairing",
      "Crystal-clear call quality",
    ],
  },
  {
    company: "Dyson",
    name: "V15 Detect Vacuum",
    detail: "Laser dust detection, 60min runtime",
    rateCount: 210,
    newPrice: 599.0,
    oldPrice: 699.0,
    moreDetails: [
      "HEPA filtration, 5 cleaning modes",
      "LCD screen with particle analytics",
      "Lightweight cordless design",
    ],
  },
  {
    company: "Nike",
    name: "Air Jordan 1 Retro High OG",
    detail: "Men's Basketball Shoes",
    rateCount: 180,
    newPrice: 180.0,
    oldPrice: 220.0,
    moreDetails: [
      "Leather upper, Air cushioning",
      "Classic Chicago colorway",
      "High-top ankle support",
    ],
  },
  {
    company: "Samsung",
    name: "Carte de visite",
    detail: "6.8″ AMOLED, 12GB RAM, 256GB Storage",
    rateCount: 109,
    newPrice: 299,
    oldPrice: 349,
    moreDetails: [
      "Quantity",
      "Pelicullage",
      "Lorem ipsam dolor sit amet, consecteur adipi",
      "Lorem ipsam dolor sit amet, consecteur adipi",
    ],
  },
  {
    company: "Sony",
    name: "WH-1000XM5 Wireless Headphones",
    detail: "Noise Cancelling, 30hr battery",
    rateCount: 290,
    newPrice: 349.99,
    oldPrice: 399.99,
    moreDetails: [
      "Industry-leading ANC",
      "Touch controls, Multipoint pairing",
      "Crystal-clear call quality",
    ],
  },
  {
    company: "Dyson",
    name: "V15 Detect Vacuum",
    detail: "Laser dust detection, 60min runtime",
    rateCount: 210,
    newPrice: 599.0,
    oldPrice: 699.0,
    moreDetails: [
      "HEPA filtration, 5 cleaning modes",
      "LCD screen with particle analytics",
      "Lightweight cordless design",
    ],
  },
];

export default AllProducts;
