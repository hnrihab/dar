<<<<<<< HEAD
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import CartePage from "@/pages/Cartes";
import PriceCalculator from "@/pages/PriceCalculator";
import PriceCalc from "@/pages/PriceCalc";
import AllProducts from "@/components/allProducts/AllProducts";
=======
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import CartePage from '@/pages/Cartes';
import PriceCalculatorPage from '@/pages/Calcul';
import ProductPage from '@/pages/ProductPage';
import ProductForm from '@/pages/ProductPage.tsx';
>>>>>>> 59b23472767080d776a91df23141b43fedeb6932

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: 'search', element: <SearchPage /> },
<<<<<<< HEAD
      { path: "login", element: <LoginPage /> },
=======
      { path: 'login', element: <LoginPage /> },
     
       { path: 'carte', element: <CartePage /> },
        { path: 'calcul', element: <PriceCalculatorPage /> },
         { path: 'produit', element: < ProductPage/> },
         { path: 'add', element: < ProductForm/> },
      
>>>>>>> 59b23472767080d776a91df23141b43fedeb6932

      { path: "carte", element: <CartePage /> },
      { path: "calcul", element: <PriceCalculator /> },
      { path: "calcul2", element: <PriceCalc /> },
      { path: "allProducts", element: <AllProducts /> },
    ],
  },
]);
