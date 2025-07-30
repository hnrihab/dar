const ProductsShowcase = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-10 font-sans">
      {/* Bloc A - Carte grande (2 lignes) */}
      <div className="bg-gray-300 p-5 col-span-1 row-span-3 flex flex-col items-start">
        <p className="text-red-500 font-semibold">FLAT 20% OFF</p>
        <h2 className="text-xl font-medium leading-tight">
          Microsoft <br />
          <strong className="text-2xl">Xbox Series S</strong>
        </h2>
        <p className="mt-1 text-gray-700">From $350.00</p>
        <img
          src="https://placehold.co/100x250"
          alt="Xbox Series S"
          className="w-full max-w-[200px] mt-4"
        />
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Shop Now</button>
      </div>

      {/* Bloc B */}
      <div className="bg-blue-100 p-5 col-span-2 row-span-1 flex flex-col items-start">
        <h3 className="text-lg font-semibold">Xbox Core Wireless Controller</h3>
        <p className="text-sm text-gray-700">Aqua Shift Special Edition</p>
        <img
          src="https://placehold.co/70x70"
          alt="Controller"
          className="w-full max-w-[200px] mt-4"
        />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Shop Now</button>
      </div>

      {/* Bloc C */}
      <div className="bg-orange-300 p-5 col-span-1 row-span-1 flex flex-col items-start">
        <h3 className="text-lg font-semibold">Metaverse</h3>
        <p className="text-sm text-gray-700">The Future of Creativity</p>
        <img
          src="https://placehold.co/70x70"
          alt="Metaverse VR"
          className="w-full max-w-[150px] mt-4"
        />
        <a href="#" className="text-orange-500 underline block mt-2">LEARN MORE</a>
      </div>

      {/* Bloc D */}
      <div className="bg-cyan-100 p-5 col-span-1 row-span-1 flex flex-col items-start">
        <h3 className="text-lg font-semibold">Electronic</h3>
        <p className="text-sm text-gray-700">Hot devices, Latest trending</p>
        <img
          src="https://placehold.co/70x70"
          alt="Electronics"
          className="w-full max-w-[250px] mt-4"
        />
      </div>

      {/* Bloc E */}
      <div className="bg-purple-300 p-5 col-span-2 row-span-1 flex flex-col items-start">
        <h3 className="text-lg font-semibold">Super discount for your first purchase</h3>
        <p className="text-sm text-gray-700">Use discount code in checkout page.</p>
        <img
          src="https://placehold.co/70x70"
          alt="Phones"
          className="w-full max-w-[250px] mt-4"
        />
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Shop Now</button>
      </div>
    </div>
  );
};

export default ProductsShowcase;
