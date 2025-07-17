import { Link } from "react-router-dom";

const SmallCard = () => {
  return (
    <div className="border  flex w-full p-5 rounded">
      <div className=" flex flex-col gap-y-4 items-center">
        <img className="" src="https://placehold.co/100" alt="" />
        <Link
          to={"#"}
          className="rounded bg-gray-300 w-fit px-3  text-xs text-center py-1"
        >
          View All
        </Link>
      </div>
      <div className="ml-4">
        <h2 className="text-sm font-semibold mb-3">Smart Phone</h2>
        <ul className="flex flex-col gap-y-1 text-xs ">
          <Link className="font-normal text-gray-800" to={"#"}>
            Phone Accessories
          </Link>
          <Link className="font-normal text-gray-800" to={"#"}>
            Phone Cases
          </Link>
          <Link className="font-normal text-gray-800" to={"#"}>
            Postpaid
          </Link>
          <Link className="font-normal text-gray-800" to={"#"}>
            Refurbished Phones
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SmallCard;
