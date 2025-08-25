import { GoArrowUpRight } from "react-icons/go";
import FadeIn from "../motion/FadeIn";

const BigCard = () => {
  return (
    <FadeIn i={1}>
      <div className="bg-blue-950 p-2 rounded-lg mb-10 lg:flex mt-20 ">
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
  );
};

export default BigCard;
