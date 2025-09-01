import { useState, useEffect } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  promo: number;
  caracteristique: string;
  url_image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/api/products.php")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch("/api/products.php", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    setProducts(products.filter(p => p.id !== id));
  };

  // Add / Edit form à ajouter ici

  return (
    <div>
      <h1>Produits</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Promo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.description}</td>
              <td>{p.price}</td>
              <td>{p.promo}</td>
              <td>
                <button onClick={() => setEditingProduct(p)}>Edit</button>
                <button onClick={() => handleDelete(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
