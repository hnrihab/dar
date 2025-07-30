import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { HomePage } from '@/pages/HomePage';
import { HouseDetailsPage } from '@/pages/HouseDetailsPage';
import { LoginPage } from '@/pages/LoginPage';
import Cartes from '@/pages/Cartes';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      //{ path: 'search', element: <SearchPage /> },
      { path: 'houses/:id', element: <HouseDetailsPage /> },
      { path: 'login', element: <LoginPage /> },
     
       { path: 'cartes', element: <Cartes /> },
      
    ],
  },
]);