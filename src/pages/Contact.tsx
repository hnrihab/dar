import LeftNav from "@/components/layout/LeftNav";
import Hero from "./Hero";
import FadeIn from "@/components/motion/FadeIn";
import MapCard from "./Map";

const Contact = () => {
  return (
    <div>
      <div className="flex  ">
        <LeftNav />
        <Hero />
      </div>

      <div className="m-32 flex gap-10 p-8 ">
        <div className="flex-1">
          <FadeIn i={1}>
            <h1 className="text-7xl text-dblue ">
              Nous sommes toujours préts à vous aider et reponder à vos
              questions.
            </h1>
            <h3 className="mt-8 text-2xl font-bold">
              Retrouvez ici toutes les informations pour nous joindre facilment.
            </h3>
            <div className="flex mt-8">
              <div className="flex-1">
                <h3 className="text-dviolet font-bold">Telephone</h3>
                <p>+212(0) 700 45 29 90</p>
                <p>+212(0) 520 10 54 30</p>
              </div>
              <div className="flex-1">
                <h3 className="text-dviolet font-bold">Adresse</h3>
                <p>Al-Azhar - Casablanca, Maroc</p>
              </div>
            </div>
            <div className="flex ">
              <div className="flex-1">
                <h3 className="text-dviolet font-bold">Email</h3>
                <p>info@violetvision.ma</p>
                <p>contact.violetvision@gmail.com</p>
              </div>
              <div className="flex-1">
                <h3 className="text-dviolet font-bold">Social Media</h3>
                <div>F L Y W I T</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="bg-dviolet flex-1 text-white rounded-xl p-8">
          <FadeIn i={2}>
            <h4 className="text-6xl">Contactez-nous!</h4>
            <p className="text-2xl lg:max-w-[80%]">
              Remplissez le formulaire ci-dessous, nous reviendrons vers vous
              dans les plus brefs delais.
            </p>
            <div>
              <form className="">
                <div className="flex flex-col gap-8 my-16">
                  <div className="border-b">
                    <input
                      className=""
                      type="text "
                      placeholder="Nom Complete"
                    />
                  </div>
                  <div className="border-b">
                    <input className="" type="text " placeholder="Email" />
                  </div>
                  <div className="border-b">
                    <input className="" type="text " placeholder="Sujet" />
                  </div>
                  <div className="border-b">
                    <input className="" type="text " placeholder="Message" />
                  </div>
                </div>

                <button
                  className="bg-white w-full rounded-2xl text-black font-bold py-1.5"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className=" mb-16   overflow-hidden flex justify-center items-center">
        <MapCard />
      </div>
    </div>
  );
};

export default Contact;
