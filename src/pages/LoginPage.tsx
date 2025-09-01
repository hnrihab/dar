import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeIn from "@/components/motion/FadeIn";
import LeftNav from "@/components/layout/LeftNav";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/"); // redirection après login
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      setMessage("Erreur lors de la connexion");
    }
  };

  return (
    <>
    <div className="flex  ">
        <LeftNav />
        
      </div>
    <div className="m-20 p-10 bg-gray-100 rounded-3xl shadow-xl flex overflow-hidden">
      {/* Colonne gauche - texte */}
      <div className="flex-1 flex flex-col justify-center pr-10">
        <FadeIn i={1}>
          <h1 className="text-6xl text-dblue font-bold leading-tight">
            Heureux de vous revoir !
          </h1>
          <p className="mt-6 text-2xl text-gray-700">
            Connectez-vous pour accéder à votre espace et profiter pleinement de nos services.
          </p>
          <div className="mt-10 space-y-3">
            <p className="text-lg text-gray-600">
              <span className="font-bold text-dviolet">Support 24/7 :</span> contact@violetvision.ma
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-bold text-dviolet">Téléphone :</span> +212 (0) 520 10 54 30
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Colonne droite - formulaire */}
      <div className="flex-1 bg-dviolet text-white rounded-3xl p-10">
        <FadeIn i={2}>
          <h2 className="text-5xl font-bold mb-6">Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-8 my-8">
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
            </div>

            <button
              type="submit"
              className="bg-white w-full rounded-2xl text-dviolet font-bold py-2 transition hover:bg-gray-200"
            >
              Se connecter
            </button>

            {message && (
              <p className="text-center text-sm mt-4 bg-white text-dviolet rounded py-1">
                {message}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </div>
    <div className="m-40"></div>
    </>
  );
}
