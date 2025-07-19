import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";

const Articals = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3  gap-4 lg:mx-16 items-center my-10">
      <div className=" p-5 flex justify-between flex-col border h-full">
        <h4 className="text-xs">Starting from #899</h4>
        <h2 className="text-xl font-semibold">IPhone 12 Pro 128Gb</h2>
        <h5 className="text-sm font-semibold">Special Sale</h5>
        <Link
          className="underline text-darkBlue my-2 flex items-center"
          to={"#"}
        >
          Learn More
          <GoTriangleRight className="translate-y-[15%]" />
        </Link>
        <img src="https://placehold.co/300x100" className="w-full" alt="" />
      </div>
      <div className=" border p-5 flex flex-col justify-between h-full">
        <h4 className="text-xs">New Arrival</h4>
        <h2 className="text-xl font-semibold">Samsung 2022 LED TV</h2>
        <h5 className="text-sm font-semibold">Special Sale</h5>
        <Link
          className="bg-orange-400 w-fit px-3 rounded text-white my-2 text-sm py-1 flex items-center gap-1"
          to={"#"}
        >
          Shop Now
          <GoTriangleRight className="translate-y-[10%]" />
        </Link>
        <img src="https://placehold.co/300x100" className="w-full" alt="" />
      </div>
      <div className=" border p-5 h-full flex flex-col justify-between ">
        <h2 className="text-xl font-semibold">
          Drone Quadcopter UAV - DJI Air 2S
        </h2>
        <h5 className="text-sm font-semibold">Gimbal Camera, 5.4K Vedio</h5>
        <Link
          to={"#"}
          className="bg-orange-400 w-fit px-3 rounded text-white my-2 text-sm py-1 flex items-center gap-1"
        >
          Shop Now
          <GoTriangleRight className="translate-y-[15%]" />
        </Link>
        <img src="https://placehold.co/300x100" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Articals;
