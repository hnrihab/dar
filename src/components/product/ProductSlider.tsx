import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import FadeIn from "../motion/FadeIn";

const ProductSlider = () => {
  return (
    <div className="px-16">
      <div className="flex gap-16   items-start ">
        <div className=" flex flex-col my-5 flex-1 ">
          <div className=" border p-8 bg-white rounded-lg">
            <img
              className="rounded-lg w-full"
              src="http://placehold.co/100x100"
              alt=""
            />
          </div>
          <div className="">
            <ul className="flex justify-between  gap-2 py-2">
              <li>
                <FadeIn i={1}>
                  <div className="w-36 h-32 bg-dviolet rounded-lg">.</div>
                </FadeIn>
              </li>
              <li>
                <FadeIn i={2}>
                  <div className="w-36 h-32 bg-dviolet rounded-lg">.</div>
                </FadeIn>
              </li>
              <li>
                <FadeIn i={3}>
                  <div className="w-36 h-32 bg-dviolet rounded-lg">.</div>
                </FadeIn>
              </li>
              <li>
                <FadeIn i={4}>
                  <div className="w-36 h-32 bg-dviolet rounded-lg">.</div>
                </FadeIn>
              </li>
            </ul>
            <div className="bg-white rounded px-8 py-6 mt-4  ">
              <h1 className="text-2xl font-semibold">Option du produit</h1>
              <p className="text-sm">
                Taille, Type de papier, Plastification...
              </p>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col justify-center mt-20">
          <h1 className="text-5xl font-bold mb-5">Carte Visite</h1>
          <h2 className="text-2xl font-bold">Description</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            itaque, nihil vero alias quisquam, excepturi rem corporis voluptate,
            quidem obcaecati laborum ipsum laudantium
          </p>
          <div className="flex items-center my-4">
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            <FaStar color="blue" />
            (109)
          </div>
          <div className="flex gap-6 text-3xl items-center">
            <h3>249Mad</h3>
            <h3 className="text-gray-500 line-through text-2xl">319Mad</h3>
          </div>
          <ul className="mt-4">
            <li className="flex items-center">
              <GoDotFill />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              nam
            </li>
            <li className="flex items-center">
              <GoDotFill />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. velit et.
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex  gap-16">
        <div className="bg-white flex-1 px-20 py-8">
          <h3 className="font-bold mb-3">Taille</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-2 bg-dgray text-xs font-semibold">
              8.5cm x 5.5cm
            </span>
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              8.5cm x 5cm
            </span>
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              9cm x 5.5cm
            </span>
            <span className="px-3 py-2 bg-dgray text-xs font-semibold">
              9cm x 5cm
            </span>
          </div>
          {/** */}
          <h3 className="font-bold mt-8 mb-3">Type de papier</h3>
          <div className="space-x-2">
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              coucheé 300g/m
            </span>
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              coucheé 350g/m
            </span>
          </div>
          {/** */}
          <h3 className="font-bold mt-8 mb-3">Plastification</h3>
          <div className="space-x-2">
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              Mat
            </span>
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              Brillant
            </span>
            <span className=" px-3 py-2 bg-dgray text-xs font-semibold">
              Sans
            </span>
          </div>
          {/** */}
          <h3 className="font-bold mt-8 mb-3">Quantity</h3>
          <div className="flex gap-2">
            <input
              type="number"
              name=""
              id=""
              placeholder="Ex :10"
              className="outline outline-1  outline-dviolet py-1"
            />
            <button className="bg-dblue w-full text-white text-sm font-semibold">
              Terminer{" "}
            </button>
          </div>
          {/** */}
          <h3 className="font-semibold mt-8 mb-3">Preparatoin du ficher</h3>
          <div className="flex gap-2">
            <button className="bg-dblue text-white text-sm font-semibold py-2 w-full">
              Importer fichier
            </button>
            <button className="bg-dblue text-white text-sm font-semibold py-2 w-full">
              Consulter un design
            </button>
          </div>
        </div>
        <div className="flex-1">slider</div>
      </div>
    </div>
  );
};

export default ProductSlider;
