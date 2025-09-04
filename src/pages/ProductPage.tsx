import { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ProductCard from "@/components/ui/ProductCards";
import { Products } from "../types";

const ProductPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const location = useLocation();
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  useEffect(() => {
    let url = `http://localhost:8000/get_products.php?search=${encodeURIComponent(search)}`;
    if (categoryId && categoryId !== "tous") url += `&categorie_id=${categoryId}`;

    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur fetch produits :", err);
        setError("Impossible de charger les produits.");
        setLoading(false);
      });
  }, [categoryId, search]);

  if (loading) return <p className="p-4">Chargement...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;
  if (!products.length) return <p className="p-4">Aucun produit trouvé</p>;

  return (
    <div className="grid m-10 p-10 grid-cols-4 gap-4">
      {products.map(prod => (
        <Link key={prod.id} to={`/product/${prod.id}`}>
          <ProductCard data={prod} />
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;
