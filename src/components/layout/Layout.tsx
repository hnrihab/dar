import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Subscribe from "./Subscribe";

export function Layout() {
  return (
    <div className="">
      <Header />
      <main className="flex-1  ">
        <Outlet />
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}
