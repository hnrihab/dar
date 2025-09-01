import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import LeftNav from "@/components/layout/LeftNav";

export function QuoteRequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ici, tu peux envoyer les données à ton backend via fetch
    try {
      const res = await fetch("http://localhost:8000/quote.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, project, message }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("Votre demande de devis a été envoyée !");
        setName(""); setEmail(""); setPhone(""); setProject(""); setMessage("");
      } else {
        setMessage(data.message || "Erreur lors de l'envoi");
      }
    } catch (err) {
      setMessage("Erreur lors de l'envoi");
    }
  };

  return (
    <div className="flex">
      <LeftNav />

      <div className="m-20 p-10 bg-gray-100 rounded-3xl shadow-xl flex flex-wrap overflow-hidden">
        
        {/* Colonne gauche - texte */}
        <div className="flex-1 flex flex-col justify-center pr-10 min-w-[300px]">
          <FadeIn i={1}>
            <h1 className="text-6xl text-dblue font-bold leading-tight">
              Demandez votre devis personnalisé
            </h1>
            <p className="mt-6 text-2xl text-gray-700">
              Remplissez le formulaire ci-dessous, et notre équipe vous répondra
              rapidement avec une estimation adaptée à votre projet.
            </p>
            <div className="mt-10 space-y-3 text-gray-600">
              <p><span className="font-bold text-dviolet">Téléphone :</span> +212 520 10 54 30</p>
              <p><span className="font-bold text-dviolet">Email :</span> contact@violetvision.ma</p>
              <p><span className="font-bold text-dviolet">Adresse :</span> Al-Azhar, Casablanca</p>
            </div>
          </FadeIn>
        </div>

        {/* Colonne droite - formulaire */}
        <div className="flex-1 bg-violet-700 text-white rounded-3xl p-10 min-w-[300px]">
          <FadeIn i={2}>
            <h2 className="text-5xl font-bold mb-6">Formulaire de devis</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Nom complet"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                  required
                />
              </div>
              <div className="border-b">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                  required
                />
              </div>
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Téléphone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                />
              </div>
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Nom du projet"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                />
              </div>
              <div className="border-b">
                <textarea
                  placeholder="Description du projet / message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="bg-white w-full rounded-2xl text-violet-700 font-bold py-2 transition hover:bg-gray-200"
              >
                Envoyer la demande
              </button>
            </form>
          </FadeIn>
        </div>

      </div>
    </div>
  );
}
