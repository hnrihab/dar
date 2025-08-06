import { Link } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const inter = setInterval(() => {
      setIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(inter);
  }, [autoPlay]);
  //handle next imag in the carousel
  const handleNext = () => {
    setIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };
  const handleBack = () => {
    setIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div className="lg:flex lg:justify-between  gap-6   lg:m-16">
      <div
        className="lg:w-[70%] border relative flex  overflow-hidden  bg-[#d4f7ff] rounded cursor-pointer"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="flex flex-col  justify-around  px-16">
          <h1 className="font-bold transition-all text-3xl z-20 lg:w-[70%]">
            Votre Imprimerie en Ligne pour Tous Vos Besoins Publicitaires
          </h1>
          <p className=" lg:w-[50%] z-20 text-sm font-bold">
            Votre partenaire d’impression pour tous vos supports de
            communication. Commandez en ligne vos cartes de visite, flyers,
            affiches, roll-ups, bâches vinyle et bien plus. Qualité
            professionnelle, finitions sur mesure et livraison rapide partout au
            Maroc.
          </p>
          <div className="mb-5 space-x-2 flex z-20">
            <Link
              className="bg-black px-4 py-2 rounded text-sm text-white"
              to={"#"}
            >
              Acheter
            </Link>
            <Link
              className="text-sm  border-2 rounded border-black flex items-center px-3"
              to={"#"}
            >
              En savoir plus
            </Link>
          </div>
        </div>
        <div className="flex absolute right-0  h-full w-full  ">
          {imgs.map((item) => (
            <img
              key={item.imageid}
              src={item.imgUrl}
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
              className="flex-shrink-0 object-cover w-full  right-0 -z-1 transition-all duration-700 cursor-pointer"
              alt=""
            />
          ))}
        </div>
        <div className="absolute flex w-full justify-between h-full items-center">
          <FaAngleLeft
            onClick={handleBack}
            size={24}
            className="cursor-pointer"
          />

          <FaAngleRight
            onClick={handleNext}
            size={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className=" flex gap-6 justify-between  flex-col  my-5 lg:my-0  lg:mx-0 ">
        <div className="bg-red-50 rounded overflow-hidden lg:gap-2  w-full relative py-4 lg:p-8 flex  justify-center border-[1px]">
          <div className="flex flex-col gap-y-2 items-start justify-around z-20">
            <h2 className=" text-2xl lg:w-[50%] font-bold">
              Offer special Flayer
            </h2>
            <p className="text-sm font-semibold w-[70%]">
              Des cartes professionnelle a prix reduit, <br />
              avec finitions haut de gamme offrant cette semaine
            </p>
            <Link className="bg-white   text-xs px-4 py-2 rounded " to={"#"}>
              Commander
            </Link>
          </div>
          <img
            src="https://placehold.co/100x100"
            className=" absolute top-0 left-0 w-full h-full object-cover "
            alt=""
          />
        </div>
        <div className="bg-red-50 rounded overflow-hidden lg:gap-5  w-full relative py-4 lg:p-8 flex  justify-center border-[1px]">
          <div className="flex flex-col gap-y-2 items-start justify-around z-20">
            <h2 className=" text-2xl lg:w-[50%] font-bold">
              Cartes Visite Premium
            </h2>
            <p className="text-sm font-semibold w-[70%]">
              Des cartes professionnelle a prix reduit, <br />
              avec finitions haut de gamme offrant cette semaine
            </p>
            <Link
              className="bg-black text-white text-xs px-4 py-2 rounded "
              to={"#"}
            >
              Commander
            </Link>
          </div>
          <img
            src="https://placehold.co/100x100"
            className=" absolute top-0 left-0 w-full h-full object-cover "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const imgs: { imageid: number; imgUrl: string }[] = [
  {
    imageid: 1,
    imgUrl: "https://placehold.co/300x300?text=image1",
  },
  {
    imageid: 2,
    imgUrl: "https://placehold.co/300x300?text=image2",
  },
  {
    imageid: 3,
    imgUrl: "https://placehold.co/300x300?text=image3",
  },
];

export default Hero;
