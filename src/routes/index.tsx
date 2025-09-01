import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import PriceCalculator from "@/pages/PriceCalculator";
import PriceCalc from "@/pages/PriceCalc";
import AllProducts from "@/components/allProducts/AllProducts";
import Contact from "@/pages/Contact";
import ProductPage from "@/pages/ProductPage";
import { RegisterPage } from "@/pages/RegisterPage";
import CarteFeuillePage from "@/pages/CarteFeuillePage";
import PriceCalculatorPage from "@/pages/CardConfigurator";
import CardConfigurator from "@/pages/CardConfigurator";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: 'search', element: <SearchPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "produit", element: <ProductPage /> },
{ path: "/produit/:categoryId", element: <ProductPage /> },

       { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },

     
      { path: "calcul", element: <PriceCalc /> },
      { path: "allProducts", element: <AllProducts /> },
      { path: "contact", element: <Contact /> },
      
    ],
  },  { path: "contact", element: <Contact /> },
   { path: "price", element: <CardConfigurator /> },

]);
