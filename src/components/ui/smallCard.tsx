import React from "react";
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
      <div className="flex flex-col items-center gap-2 bg-yellow-300">
        <img src={imageUrl} alt={title} />

        <Link
          to={viewAllLink}
          className="text-white px-3 rounded text-xs py-1   bg-blue-700 -translate-y-4"
        >
          Voir tout
        </Link>
      </div>

      {/* 💡 Grid à deux colonnes pour les sous-catégories */}
      <ul className="">
        <h3 className="font-semibold text-lg">{title}</h3>
        {subcategories.map((sub, index) => (
          <li key={index}>
            <Link to={sub.link} className="text-black text-xs font-medium">
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallCard;
