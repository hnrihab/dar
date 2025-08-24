import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ui/ProductCards.tsx";
import { Products } from "../types";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/get_products.php")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="grid mt-14 grid-cols-4 gap-4">
      {products.map(prod => <ProductCard key={prod.id} data={prod} />)}
    </div>
  );
};

export default ProductPage;
