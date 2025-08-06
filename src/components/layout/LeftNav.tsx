import { PiCirclesFourBold } from "react-icons/pi";
import { BsCreditCard2Front } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { FaIdCard } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { IoShirt } from "react-icons/io5";
import { FaPrint } from "react-icons/fa";
import { PiBlueprintDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="w-fit border p-2">
      <div className="mb-3 flex items-center justify-center ">
        <PiCirclesFourBold size={24} />
      </div>
      <div className="flex flex-col gap-y-1">
        {icons.map((item) => (
          <div className="group flex relative items-center " key={item.id}>
            <div className="border p-2 rounded-full  text-xs">{item.icon}</div>
            <Link
              className=" absolute text-sm w-max ml-2 -right-12
              opacity-0 translate-x-3 
              group-hover:opacity-100 group-hover:translate-x-0
              px-3
              group-hover:block 
              ease-in-out
              transition-all duration-300  z-20 "
              to={"#"}
            >
              {item.link}
            </Link>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

const icons = [
  {
    id: "1",
    icon: <FaPrint />,
    link: "Print ",
  },
  {
    id: "2",
    icon: <IoShirt />,
    link: "shirts",
  },
  {
    id: "3",
    icon: <BsNewspaper />,
    link: "Paper",
  },
  {
    id: "4",
    icon: <PiBlueprintDuotone />,
    link: "Paper",
  },
  {
    id: "5",
    icon: <BsCreditCard2Front />,
    link: "Paper",
  },
  {
    id: "6",
    icon: <FaIdCard />,
    link: "Paper",
  },
  {
    id: "7",
    icon: <GiOpenBook />,
    link: "book",
  },
];

export default LeftNav;
