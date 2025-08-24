import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import CartePage from '@/pages/Cartes';
import PriceCalculatorPage from '@/pages/Calcul';
import ProductPage from '@/pages/ProductPage';
import ProductForm from '@/pages/ProductPage.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: 'search', element: <SearchPage /> },
      { path: 'login', element: <LoginPage /> },
     
       { path: 'carte', element: <CartePage /> },
        { path: 'calcul', element: <PriceCalculatorPage /> },
         { path: 'produit', element: < ProductPage/> },
         { path: 'add', element: < ProductForm/> },
      

    ],
  },
]);
