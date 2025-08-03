import { Link } from "react-router-dom";
import { CreditCard, Gift, Shirt, FileText, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-50 h-screen bg-white shadow-md transition-all duration-300 
                     w-16 hover:w-64 group overflow-hidden hidden sm:flex flex-col pt-28 px-4">
      {/* Titre - visible seulement au survol */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-6">
        <h2 className="text-xl font-bold">Catégories</h2>
      </div>

      <nav className="flex flex-col gap-5">
        <SidebarItem icon={<CreditCard className="w-5 h-5" />} label="Cartes" to="/cartes" />
        <SidebarItem icon={<Gift className="w-5 h-5" />} label="Goodies" to="/categories/goodies" />
        <SidebarItem icon={<Shirt className="w-5 h-5" />} label="Textile" to="/categories/textile" />
        <SidebarItem icon={<FileText className="w-5 h-5" />} label="Impression" to="/categories/impression" />
        <SidebarItem icon={<LayoutDashboard className="w-5 h-5" />} label="Accueil" to="/" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({
  icon,
  label,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
}) => (
  <Link to={to} className="flex items-center gap-4 text-gray-700 hover:text-blue-600 transition-colors">
    <div>{icon}</div>
    <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </Link>
);

export default Sidebar;
