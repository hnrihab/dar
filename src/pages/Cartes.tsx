import ProductCard from "@/components/ui/ProductCard";

type item = {
  company: string;
  name: string;
  detail: string;
  rateCount: number;
  newPrice: number;
  oldPrice: number;
  moreDetails: string[];
};

const Products: item[] = [
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
];

const Carte = () => {
  return (
    <div className="space-y-4 my-4 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((item, i) => (
          
            <ProductCard data={item} />
          
        ))}
      </div>
    </div>
  );
};

export default Carte;
