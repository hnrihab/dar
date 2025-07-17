import { Link } from "react-router-dom";
import watch from "../images/smallwatch.png";
import pc from "../images/smallpc.png";
import leftHero from "../images/lefthero.png";
import { BsArrowRight } from "react-icons/bs";
import "../index.css";
import { useEffect, useState } from "react";

const Hero = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    number >= 2 ? setNumber(0) : setNumber((prev) => prev + 1);
    console.log(number);
  };

  useEffect(() => {
    console.log(number);
    const inter = setInterval(() => {
      setNumber((prev) => {
        const newNumber = prev >= 2 ? 0 : prev + 1;
        return newNumber;
      });
    }, 4000);
    return () => clearInterval(inter);
  }, []);

  const product = products[number];

  return (
    <div className="lg:flex lg:justify-between lg:px-16 gap-6  my-10">
      <div className="lg:w-[70%] border relative flex p-10 overflow-hidden  bg-[#d4f7ff] rounded">
        <div className="flex flex-col  justify-between text-[#0e224c]">
          <h5 className="text-xs font-thin">HOT RIGHT NOW</h5>
          <h2 className="font-semibold text-2xl">Sale Up to 50% Off</h2>
          <h1 className="font-bold transition-all text-4xl">{product.name}</h1>
          <p className="w-[90%] text-sm my-10 ">{product.description}</p>
          <div className="my-4 space-x-2">
            <Link
              className="bg-[#fd9636] px-4 py-2 rounded text-sm text-white"
              to={"#"}
            >
              Shop Now
            </Link>
            <Link className="text-sm underline" to={"#"}>
              Learn More
            </Link>
          </div>
        </div>
        <img
          src={leftHero}
          className="w-80 lg:w-[28rem] object-cover translate-x-16 "
          alt=""
        />
        <button
          onClick={handleClick}
          className="absolute right-2 bottom-2 bg-white"
        >
          <BsArrowRight />
        </button>
      </div>
      <div className=" flex gap-2 justify-between  flex-col  my-5 lg:my-0  lg:mx-0 ">
        <div className="bg-red-50 rounded overflow-hidden lg:gap-2 p-2 w-full relative lg:p-4 flex  justify-center border-[1px]">
          <div className="flex flex-col items-start justify-around ">
            <h5 className="text-xs ">
              10% <span className="text-[##425a8b]">SALE OFF</span>
            </h5>
            <h2 className="font-semibold text-lg">Apple Watch Serial 7</h2>
            <p className="text-sm">Don't miss the last opportunity.</p>
            <Link
              className="bg-[#425a8b] text-white text-xs px-4 py-2 rounded"
              to={"#"}
            >
              Shop Now
            </Link>
          </div>
          <img
            src={watch}
            className=" w-40 right-0 translate-x-10 translate-y-10"
            alt=""
          />
        </div>
        <div className="bg-red-50 rounded overflow-hidden lg:gap-2 p-2 w-full relative lg:p-4 flex  justify-center border-[1px]">
          <div className="flex flex-col items-start justify-around ">
            <h5 className="text-xs ">
              10% <span className="text-[##425a8b]">SALE OFF</span>
            </h5>
            <h2 className="font-semibold text-lg">Apple Watch Serial 7</h2>
            <p className="text-sm">Don't miss the last opportunity.</p>
            <Link
              className="bg-[#fd9636] text-white text-xs px-4 py-2 rounded "
              to={"#"}
            >
              Shop Now
            </Link>
          </div>
          <img
            src={pc}
            className=" w-40 right-0 translate-x-10 translate-y-10"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const products = [
  {
    id: 1,
    name: "Headphone",
    // image: the image of the product,
    description:
      "Cutting-edge gadgets, devices, and tech accessories, from smartphones to smart home systems,  from smartphones to smart home systems.",
  },
  {
    id: 2,
    name: "Clothing",
    // image: the image of the product,
    description:
      "Stylish and comfortable apparel for all seasons, including eco-friendly and sustainable options.",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    // image: the image of the product,
    description:
      "Everything to upgrade your living space, from cookware to cozy home decor essentials.",
  },
];

export default Hero;
