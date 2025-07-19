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
    <div className="p-6 border rounded shadow-sm">
      <div className="flex items-center gap-2">
        <img src={imageUrl} alt={title} className="" />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <Link to={viewAllLink} className="text-blue-500 text-sm underline">
            Voir tout
          </Link>
        </div>
      </div>

      {/* 💡 Grid à deux colonnes pour les sous-catégories */}
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
        {subcategories.map((sub, index) => (
          <li key={index}>
            <Link to={sub.link} className="text-gray-700 hover:underline">
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallCard;
