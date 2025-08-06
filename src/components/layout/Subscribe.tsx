const Subscribe = () => {
  return (
    <div className="">
      <div className="py-10 lg:px-16 lg:py-16 flex flex-col lg:flex-row  lg:text-start items-center text-center gap-y-2 text-white  bg-blue-800">
        <div className="">
          <h2 className="font-bold">
            Inscrivez-vous et bénéficiez de 10% réduction
          </h2>
          <p className="text-xs font-semibold">
            Recevez par e-mail nos derniéres nouvoutées et offers speciales
            <span className="font-bold"> special offers.</span>
          </p>
        </div>
        <div className=" flex lg:w-[30%] ml-10">
          <input
            type="email"
            className="flex-1 py-2 bg-white font-semibold text-black rounded-l-xl px-2 text-xs "
            placeholder="Adresse email"
          />
          <button className="bg-blue-900 text-xs px-4 font-semibold rounded-r-xl  ">
            Connexion
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
