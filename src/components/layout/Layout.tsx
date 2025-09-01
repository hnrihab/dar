import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Subscribe from "./Subscribe";
import LeftNav from "./LeftNav";

export function Layout() {
  return (
    <div className="">
      <Header />
       <LeftNav />
       <main className="flex-1  ">
        <Outlet />
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}
