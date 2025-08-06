import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

type Subcategory = {
  label: string;
  link: string;
};

type SmallCardProps = {
  title: string;
  imageUrl: string;
  viewAllLink: string;
  subcategories: Subcategory[];
};

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  imageUrl,
  viewAllLink,
  subcategories,
}) => {
  return (
    <div className="flex gap-3 rounded h-full">
      <div className="flex flex-col items-center gap-2 border rounded">
        <img src={imageUrl} alt={title} className="w-[60%] m-auto" />

        <Link
          to={viewAllLink}
          className="text-white px-3 rounded text-xs py-1   bg-blue-700 translate-y-3 "
        >
          Voir tout
        </Link>
      </div>

      {/* 💡 Grid à deux colonnes pour les sous-catégories */}
      <ul className="">
        <h3 className="font-semibold text-lg">{title}</h3>
        {subcategories.map((sub, index) => (
          <li key={index}>
            <Link to={sub.link} className="text-black text-xs flex  gap-1 ">
              <GoDotFill color="gray" size={8} className="mt-1" />
              <h5 className="">{sub.label}</h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallCard;
