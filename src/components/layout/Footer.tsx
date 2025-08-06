import { GoArrowUpRight } from "react-icons/go";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FadeIn from "../motion/FadeIn";

export function Footer() {
  return (
    <footer className=" bg-white p-4 md:px-28 ">
      <FadeIn i={1}>
        <div className="bg-blue-950 p-2 rounded-lg mb-10 lg:flex ">
          <div className=" ">
            <img
              className="rounded-lg w-full"
              src="https://placehold.co/500x300"
              alt=""
            />
          </div>
          <div className="lg:w-[40%] lg:px-16 flex flex-col justify-center gap-5">
            <h2 className="text-white text-3xl">
              Lorem ipsum, dolor <span className="font-bold">sit amet</span>{" "}
              consectetur adipisicing elit, sed
            </h2>
            <div className="bg-white  h-7 rounded-full flex items-center justify-center px-[2px] py-[2px] w-fit gap-2">
              <div className="bg-blue-700 h-full w-6 flex items-center justify-center rounded-full cursor-pointer">
                <GoArrowUpRight color="black" />
              </div>
              <h5 className="text-xs mr-4 font-semibold cursor-pointer">
                www.violetvision.ma
              </h5>
            </div>
          </div>
        </div>
      </FadeIn>

      {/**Logo */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <img
            src="src/images/logov.png"
            alt="error"
            className="w-[60px] border object-contain"
          />
          <span className="text-xl font-semibold">Violet Vision</span>
        </div>
        <div className="bg-blue-700 text-white h-7 rounded-full flex items-center justify-center px-[2px] py-[2px] gap-2">
          <div className="bg-white h-full w-6 flex items-center justify-center rounded-full cursor-pointer">
            <GoArrowUpRight color="black" />
          </div>
          <h5 className="text-xs mr-4 font-semibold cursor-pointer">
            Info@violetvision.ma
          </h5>
        </div>
      </div>

      {/**company info */}
      <div className="flex justify-between my-4">
        <FadeIn i={2}>
          <div className="space-y-3">
            <h2 className="font-bold text-lg text-blue-800">Contactez-Nous</h2>
            <h5 className="text-sm font-semibold">
              Adresse: Hay Al Ahar - Sidi Bernoussi CasaBlanca 20600
            </h5>
            <h5 className="text-sm font-semibold">
              Telephone: +212 700 45 29 90
            </h5>
            <h5 className="text-sm font-semibold">
              E-Mail: Info@violetvision.ma
            </h5>
            <h5 className="text-sm font-semibold">Horaire: 9h - 18h30</h5>
          </div>
        </FadeIn>

        <FadeIn i={3}>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-blue-800">Information</h2>
            <h5 className="text-sm font-semibold">Paimant Direct</h5>
            <h5 className="text-sm font-semibold">
              Formulaire de satisfaction
            </h5>
            <h5 className="text-sm font-semibold">Avis Clients</h5>
          </div>
        </FadeIn>

        <FadeIn i={4}>
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-blue-800">Aide</h2>
            <h5 className="text-sm font-semibold">
              Commnet commander en ligne ?
            </h5>
            <h5 className="text-sm font-semibold">Guide Xerox iridesse</h5>
            <h5 className="text-sm font-semibold">Contacter nous</h5>
            <h5 className="text-sm font-semibold">Faire aux questions</h5>
          </div>
        </FadeIn>
      </div>

      {/**Socail media */}
      <FadeIn i={5}>
        <div className="flex space-x-2 text-2xl my-4">
          <FaFacebook />
          <FaLinkedin />
          <FaYoutube />
          <FaWhatsapp />
          <FaInstagram />
          <FaTiktok />
        </div>
      </FadeIn>
      <div className="border-t border-black flex justify-between  text-sm font-medium  ">
        <h5 className="cursor-pointer hover:underline">
          Copyright c 2025 violet Vision
        </h5>
        <h5 className="cursor-pointer hover:underline">
          Conditions Géneral d'utilisation
        </h5>
        <h5 className="cursor-pointer hover:underline">
          Politique de Confidentialite
        </h5>
      </div>
    </footer>
  );
}
