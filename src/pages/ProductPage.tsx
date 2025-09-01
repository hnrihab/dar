import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCards";
import { Products } from "../types";

const ProductPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const [products, setProducts] = useState<Products[]>([]);

  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  useEffect(() => {
    let url = `http://localhost:8000/get_products.php?search=${encodeURIComponent(search)}`;
    if (categoryId && categoryId !== "tous") url += `&categorie_id=${categoryId}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erreur fetch produits :", err));
  }, [categoryId, search]);

  return (
    <div className="grid m-10 p-10 grid-cols-4 gap-4">
      {products.map(prod => <ProductCard key={prod.id} data={prod} />)}
    </div>
  );
};

export default ProductPage;
