import { useState, useEffect } from "react";

type CarteItem = {
  id: number;
  name: string;
  price: number;
};

export default function CarteFeuillePage() {
  const [data, setData] = useState<CarteItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost/carte_feuille.php");
      const json = await res.json();
      setData(json);
    } catch (e) {
      console.error("Erreur fetch:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (id: number, field: keyof CarteItem, value: any) => {
    setData(prev =>
      prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = async (item: CarteItem) => {
    const method = item.id ? "PUT" : "POST";
    await fetch("http://localhost/carte_feuille.php", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    fetchData(); // recharger après sauvegarde
  };

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost/carte_feuille.php?id=${id}`, { method: "DELETE" });
    fetchData();
  };

  if (loading) return <p className="text-center text-gray-500">Chargement...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Gestion des cartes</h1>
      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Nom</th>
              <th className="p-2 border">Prix</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-2 border">
                  <input
                    className="w-full p-1 border rounded"
                    value={item.name}
                    onChange={e => handleChange(item.id, "name", e.target.value)}
                  />
                </td>
                <td className="p-2 border">
                  <input
                    type="number"
                    className="w-full p-1 border rounded"
                    value={item.price}
                    onChange={e => handleChange(item.id, "price", parseFloat(e.target.value))}
                  />
                </td>
                <td className="p-2 border flex gap-2">
                  <button
                    onClick={() => handleSave(item)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Enregistrer
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
