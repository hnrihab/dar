import acer from "../../images/acer.png";
import nokia from "../../images/nokia.png";
import asus from "../../images/asus.png";
import casio from "../../images/casio.png";
import dell from "../../images/dell.png";
import panasonic from "../../images/panasonic.png";
import vaio from "../../images/vawio.png";
import SmallCard from "../ui/smallCard";

const FeaturedCategories = () => {
  return (
    <div className="my-5">
      <div className="lg:px-16 flex items-center justify-between flex-col lg:flex-row ">
        <div className="flex flex-col ">
          <h2 className="font-semibold text-2xl">Featured Categories</h2>
          <p className="text-xs font-semibold">
            Choose you necessary products from this Feature categories
          </p>
        </div>
        <div className="border flex flex-[1/2] justify-between  px-4 rounded py-2 gap-6 flex-wrap overflow-hidden">
          <img className="h-4" src={acer} alt="" />
          <img className="h-4 " src={nokia} alt="" />
          <img className="h-4 " src={asus} alt="" />
          <img className="h-4 " src={casio} alt="" />
          <img className="h-4 " src={dell} alt="" />
          <img className="h-4 " src={panasonic} alt="" />
          <img className="h-4 " src={vaio} alt="" />
        </div>
      </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          <SmallCard
        title=" Cartes"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/cartes"
        subcategories={[
          { label: "Cartes de Visite", link: "/categories/cartes/viste" },
          { label: " Cartes d'invitation", link: "/categories/cartes/invitation" },
          { label: "Cartes postales", link: "/categories/cartes/postale" },{ label: "Cartes de Visite", link: "/categories/cartes/viste" },
          { label: " Cartes de Remerciement", link: "/categories/cartes/remerciment" },
          { label: "Cartes postales", link: "/categories/cartes/postale" },
          { label: "Cartes de voeux", link: "/categories/cartes/voeux" },
          { label: " Cartes de fidélité", link: "/categories/cartes/fidelite" },

        ]}
      /> <SmallCard
        title="Livres & Catalogues"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/Livres"
        subcategories={[
          { label: " Brochures agrafées (stapled)", link: "/categories/Livres/Brochures" },
          { label: "Rapport annuel & Magazin", link: "/categories/Livres/rapport" },
          { label: "Livres & catalogues", link: "/categories/Livres/livres" },
          { label: "  Menu restaurant", link: "/categories/Livres/menu" },

        ]}
      />
       <SmallCard
        title="Flyers & Catalogues"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/impression"
        subcategories={[
          { label: "Flyers A6 /A5 / A4", link: "/categories/impression/flyers" },
          { label: "Dépliants 2 volets & 3 volets", link: "/categories/impression/depliants" },
        ]}
      />
      <SmallCard
        title="Affiches & Posters
"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/affiche"
        subcategories={[
          { label: " Affiche A3 /A2 /A1 / A0", link: "/categories/affiche/afficheT" },
          { label: "Posters promationnels", link: "/categories/affiche/poster" },
          { label: " Panneaux", link: "/categories/affiche/panneaux" },
        ]}
      />

      <SmallCard
        title="PLV & Signalétique"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/stands"
        subcategories={[
          { label: "  Roll-up &  Roll-up ", link: "/categories/stands/roll" },
          { label: "Stop-trottoir & Kakemono", link: "/categories/stands/stopT" },
          { label: "Panneau enseigne ", link: "/categories/stands/panneau" },
          { label: "Totem publicitaire", link: "/categories/stands/totem" },
        ]}
      />   

        <SmallCard
        title="Papeterie & Bureautique"
        imageUrl="https://placehold.co/140?text=Print"
        viewAllLink="/categories/papeterie"
        subcategories={[
          { label: " Papier à en-tête", link: "/categories/papeterie/papier" },
          { label: "Bloc-notes personnalisés ", link: "/categories/papeterie/bloc" },

          { label: "Agendas personnalisés", link: "/categories/papeterie/agendas" },
          { label: " Carnets & Enveloppes imprimées ", link: "/categories/papeterie/carnet" },
        ]}
      />
     
      <SmallCard
        title="Textile & Objets"
        imageUrl="https://placehold.co/140?text=Textile"
        viewAllLink="/categories/textile"
        subcategories={[  
          { label: "T-shirts & Sweats & Tabliers", link: "/categories/textile/tshirts" },
          { label: "  Coussins imprimés  ", link: "/categories/textile/sweats" },
          { label: "Mugs & objets", link: "/categories/textile/mugs" },
          { label: " Tote bags & Gourdes ", link: "/categories/textile/mugs" },

        ]}
      />
      <SmallCard
        title="Goodies & Gadgets"
        imageUrl="https://placehold.co/140?text=Goodies"
        viewAllLink="/categories/goodies"
        subcategories={[
          { label: "Objets personnalisés", link: "/categories/goodies/objets" },
          { label: "Accessoires Tech", link: "/categories/goodies/tech" },
          { label: "Stylos ", link: "/categories/goodies/stylos" },
        ]}
      />
     
      
    </div>
    </div>
  );
};

export default FeaturedCategories;
