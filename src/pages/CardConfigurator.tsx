import React, { useState, useEffect } from 'react';

interface ProductOption {
  id: number;
  name?: string; 
  Format?: string;
  Papier?: string;
  Plastification?: string;
  Cartes_par_feuille?: number;
  Prix_papier_dh_par_feuille?: string;
  Prix_plastif_dh_par_feuille?: string;
}

interface ApiResponse {
  carte_feuille: ProductOption[];
  prix_papier_feuille: ProductOption[];
  prix_plastification_feuille: ProductOption[];
}

const CardConfigurator: React.FC = () => {
  const [options, setOptions] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  const [selectedSize, setSelectedSize] = useState<ProductOption | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ProductOption | null>(null);
  const [selectedLamination, setSelectedLamination] = useState<ProductOption | null>(null);
  const [quantity, setQuantity] = useState<number>(1000);
  const [calculatedPrice, setCalculatedPrice] = useState<number>(0);
  const [numberOfSheets, setNumberOfSheets] = useState<number>(0);

  // Charger les options depuis le backend
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('http://localhost:8000/getAllData.php');
        if (!response.ok) throw new Error('Erreur chargement options');
        const data: ApiResponse = await response.json();
        setOptions(data);

        if (data.carte_feuille.length > 0) setSelectedSize(data.carte_feuille[0]);
        if (data.prix_papier_feuille.length > 0) setSelectedPaper(data.prix_papier_feuille[0]);
        if (data.prix_plastification_feuille.length > 0) setSelectedLamination(data.prix_plastification_feuille[0]);

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchOptions();
  }, []);

  // Calcul du prix à chaque changement
  useEffect(() => {
    if (!selectedSize || !selectedPaper || !selectedLamination) return;

    const paperPrice = selectedPaper.Prix_papier_dh_par_feuille
      ? parseFloat(selectedPaper.Prix_papier_dh_par_feuille.replace(",", ".").trim())
      : 0;

    const laminationPrice = selectedLamination.Prix_plastif_dh_par_feuille
      ? parseFloat(selectedLamination.Prix_plastif_dh_par_feuille.replace(",", ".").trim())
      : 0;

    const sheets = Math.ceil(quantity / (selectedSize.Cartes_par_feuille || 1));
    setNumberOfSheets(sheets);

    console.log('Nombre de feuilles nécessaires:', sheets);
    console.log('Prix papier par feuille:', paperPrice);
    console.log('Prix plastification par feuille:', laminationPrice);

    const total = sheets * (paperPrice + laminationPrice);
    setCalculatedPrice(total);
    console.log('Prix total:', total);
  }, [selectedSize, selectedPaper, selectedLamination, quantity]);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Configuration de vos cartes</h1>

      {/* Taille */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Taille</h2>
        <div className="flex flex-wrap gap-3">
          {options?.carte_feuille.map((size) => (
            <button
              key={size.id}
              className={`py-2 px-4 border rounded ${selectedSize?.id === size.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedSize(size)}
            >
              {size.Format}
            </button>
          ))}
        </div>
      </div>

      {/* Papier */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Type de papier</h2>
        <div className="flex flex-wrap gap-3">
          {options?.prix_papier_feuille.map((paper) => (
            <button
              key={paper.id}
              className={`py-2 px-4 border rounded ${selectedPaper?.id === paper.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedPaper(paper)}
            >
              {paper.Papier} 
            </button>
          ))}
        </div>
      </div>

      {/* Plastification */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Plastification</h2>
        <div className="flex flex-wrap gap-3">
          {options?.prix_plastification_feuille.map((lamination) => (
            <button
              key={lamination.id}
              className={`py-2 px-4 border rounded ${selectedLamination?.id === lamination.id ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
              onClick={() => setSelectedLamination(lamination)}
            >
              {lamination.Plastification} 
            </button>
          ))}
        </div>
      </div>

      {/* Quantité */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Quantité</h2>
        <input
          type="number"
          value={quantity}
          min={100}
          max={10000}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 100)}
          className="border px-4 py-2 rounded w-32"
        />
      </div>

      {/* Prix total */}
      <div className="p-4 bg-blue-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Prix total</h2>
        <p>Nombre de feuilles: {numberOfSheets}</p>
        <p>{calculatedPrice.toFixed(2)} DH</p>
      </div>
    </div>
  );
};

export default CardConfigurator;
