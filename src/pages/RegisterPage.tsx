import { useState } from "react";
import LeftNav from "@/components/layout/LeftNav";
import FadeIn from "@/components/motion/FadeIn";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      setMessage(data.success ? "Inscription réussie !" : data.message || data.error);
    } catch (err) {
      setMessage("Erreur lors de l'inscription");
    }
  };

  return (
    <>
      {/* Navigation latérale */}
      <div className="flex">
        <LeftNav />
      </div>

      {/* Bloc principal arrondi */}
      <div className="m-20 p-10 bg-gray-100 rounded-3xl shadow-xl flex overflow-hidden">
        
        {/* Colonne gauche - texte */}
        <div className="flex-1 flex flex-col justify-center pr-10">
          <FadeIn i={1}>
            <h1 className="text-6xl text-dblue font-bold leading-tight">
              Rejoignez Violet Vision dès aujourd'hui !
            </h1>
            <p className="mt-6 text-2xl text-gray-700">
              Créez votre compte en quelques secondes et débloquez toutes nos fonctionnalités.
            </p>
            <div className="mt-10 space-y-3">
              <p className="text-lg text-gray-600">
                <span className="font-bold text-dviolet">Assistance :</span> support@violetvision.ma
              </p>
              <p className="text-lg text-gray-600">
                <span className="font-bold text-dviolet">Téléphone :</span> +212 (0) 520 10 54 30
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Colonne droite - formulaire */}
        <div className="flex-1 bg-violet-700 text-white rounded-3xl p-10">
          <FadeIn i={2}>
            <h2 className="text-5xl font-bold mb-6">Créer un compte</h2>
            <p className="text-lg mb-8">
              Remplissez les champs ci-dessous pour vous inscrire rapidement.
            </p>

            <form onSubmit={handleRegister} className="space-y-6">
              <div className="border-b">
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                />
              </div>
              <div className="border-b">
                <input
                  type="email"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                />
              </div>
              <div className="border-b">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-none p-2 placeholder-gray-200 focus:outline-none text-white"
                />
              </div>

              <button
                type="submit"
                className="bg-white w-full rounded-2xl text-violet-700 font-bold py-2 transition hover:bg-gray-200"
              >
                S'inscrire
              </button>

              {message && (
                <p className="text-center text-sm mt-4 bg-white text-violet-700 rounded py-1">
                  {message}
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
