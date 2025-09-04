import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ui/pp";

const TestPage: React.FC = () => {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost/get_product.php?id=carte_visite")
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  if (!product) return <div>Chargement...</div>;

  return <ProductCard data={product} />;
};

export default TestPage;
