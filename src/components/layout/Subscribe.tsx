const Subscribe = () => {
  return (
    <div className=" lg:mx-16 py-4">
      <div className="p-2 flex flex-col lg:flex-row lg:justify-between lg:text-start items-center text-center gap-y-2 text-white py-2 bg-[#0e224c]">
        <div className="">
          <h2 className="font-bold">Subscribe & Get 10% Discount</h2>
          <p className="text-xs font-semibold">
            Get E-mail update about our latest shop and
            <span className="font-bold"> special offers.</span>
          </p>
        </div>
        <div className=" flex lg:w-[30%] ">
          <input
            type="email"
            className="flex-1 py-2 rounded-l px-2 text-xs"
            placeholder="Enter You Email"
          />
          <button className="bg-darkOrange text-xs px-4 font-semibold rounded-r  ">
            Sign Up
          </button>
        </div>
        <div className="">
          <img
            src="http://placehold.co/300x120"
            className=""
            alt="tech products"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
