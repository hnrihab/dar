import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import Subscribe from './Subscribe';

export function Layout() {
  return (
    <div className="flex  flex-col">
       <Header />
      
      <main className="flex-1 ml-16 sm:ml-10 p-4">
        <Outlet />
      </main>
      <Subscribe />
      <Footer />

    </div>
  );
}