import { item } from "@/types";
import ProductCard from "../ui/ProductCard";
import { useState } from "react";

const BestSellers = () => {
  const [products, setProducts] = useState(bestSoldProducts);

  return (
    <div className="mx-2 lg:px-16 space-y-4 my-4">
      <div className=" flex items-center justify-between flex-col lg:flex-row ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-2xl">Best Sellers</h2>
          <p className="text-xs font-semibold">Special products this month</p>
        </div>
        <div className="border flex  justify-between lg:px-4 px-1 rounded py-2 gap-6 ">
          <button
            className="font-medium text-sm text-gray-600 "
            onClick={() => setProducts(bestSoldProducts)}
          >
            BEST SELLER
          </button>
          <button
            onClick={() => setProducts(mostViewedProducts)}
            className="font-medium text-sm text-gray-600"
          >
            MOST VIEWED
          </button>
          <button
            className="font-medium text-sm text-gray-600"
            onClick={() => setProducts(topBrandProducts)}
          >
            TOP BRANDS
          </button>
        </div>
      </div>
      <div className="border-t grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 pt-4">
        {products.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

const bestSoldProducts: item[] = [
  {
    company: "Apple",
    name: "2024 MacBook Air (M2 Chip)",
    detail: "13.6″ Retina Display, 8GB RAM, 256GB SSD",
    rateCount: 450,
    newPrice: 999.0,
    oldPrice: 1099.0,
    moreDetails: [
      "M2 chip with 8-core CPU, 10-core GPU",
      "Up to 18 hours battery life",
      "MagSafe charging, Touch ID",
    ],
  },
  {
    company: "Samsung",
    name: "Galaxy S24 Ultra",
    detail: "6.8″ AMOLED, 12GB RAM, 256GB Storage",
    rateCount: 380,
    newPrice: 1299.99,
    oldPrice: 1399.99,
    moreDetails: [
      "200MP camera with Space Zoom",
      "S Pen included, Titanium frame",
      "AI-powered photo editing",
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
];

const mostViewedProducts: item[] = [
  {
    company: "Apple",
    name: "iPhone 15 Pro Max",
    detail: "6.7″ Super Retina XDR, 256GB",
    rateCount: 520,
    newPrice: 1199.0,
    oldPrice: 1299.0,
    moreDetails: [
      "A17 Pro chip, Titanium design",
      "48MP main camera, 5x Telephoto",
      "Dynamic Island, USB-C",
    ],
  },
  {
    company: "Amazon",
    name: "Kindle Paperwhite (11th Gen)",
    detail: "6.8″ glare-free display, 32GB",
    rateCount: 310,
    newPrice: 149.99,
    oldPrice: 179.99,
    moreDetails: [
      "300ppi, Adjustable warm light",
      "Waterproof (IPX8), 10-week battery",
      "Bluetooth for audiobooks",
    ],
  },
  {
    company: "Bose",
    name: "QuietComfort Ultra Earbuds",
    detail: "Noise Cancelling, Spatial Audio",
    rateCount: 240,
    newPrice: 299.0,
    oldPrice: 329.0,
    moreDetails: [
      "Immersive Sound with CustomTune",
      "6hr ANC battery (24hr with case)",
      "IPX4 sweat resistance",
    ],
  },
  {
    company: "LG",
    name: "C3 65″ 4K Smart OLED TV",
    detail: "AI-powered, Dolby Vision",
    rateCount: 190,
    newPrice: 1599.0,
    oldPrice: 1999.0,
    moreDetails: [
      "α9 Gen6 AI Processor",
      "120Hz refresh rate, HDMI 2.1",
      "ThinQ AI with voice control",
    ],
  },
  {
    company: "Instant Pot",
    name: "Duo Crisp 11-in-1 Air Fryer",
    detail: "8QT, 15PSI pressure cooker",
    rateCount: 170,
    newPrice: 159.95,
    oldPrice: 199.95,
    moreDetails: [
      "Air fry, roast, bake, dehydrate",
      "One-touch smart programs",
      "Stainless steel inner pot",
    ],
  },
];

const topBrandProducts: item[] = [
  {
    company: "Tesla",
    name: "Model Y Long Range",
    detail: "AWD, 330mi range, 0-60mph in 4.8s",
    rateCount: 420,
    newPrice: 49990.0,
    oldPrice: 52990.0,
    moreDetails: [
      "Seats 5, 76 cu ft storage",
      "15″ touchscreen, Autopilot",
      "Supercharging compatible",
    ],
  },
  {
    company: "Rolex",
    name: "Submariner Date (126610LN)",
    detail: "41mm Oystersteel, Ceramic bezel",
    rateCount: 150,
    newPrice: 10950.0,
    oldPrice: 12500.0,
    moreDetails: [
      "300m water resistance",
      "Chronometer-certified movement",
      "Glidelock clasp",
    ],
  },
  {
    company: "Canon",
    name: "EOS R5 Mirrorless Camera",
    detail: "45MP, 8K video, IBIS",
    rateCount: 280,
    newPrice: 3799.0,
    oldPrice: 4299.0,
    moreDetails: [
      "Dual Pixel CMOS AF II",
      "20fps electronic shutter",
      "Weather-sealed body",
    ],
  },
  {
    company: "Louis Vuitton",
    name: "Neverfull MM Tote",
    detail: "Monogram canvas, leather trim",
    rateCount: 130,
    newPrice: 1850.0,
    oldPrice: 2100.0,
    moreDetails: [
      "13.8″ x 12.6″ x 7.1″",
      "Removable pouch included",
      "Golden brass hardware",
    ],
  },
  {
    company: "Peloton",
    name: "Bike+ (2024 Edition)",
    detail: "24″ rotating touchscreen, auto-resistance",
    rateCount: 210,
    newPrice: 2495.0,
    oldPrice: 2995.0,
    moreDetails: [
      "Magnetic resistance, 64 levels",
      "4-speaker sound system",
      "Live/on-demand classes",
    ],
  },
];

export default BestSellers;
