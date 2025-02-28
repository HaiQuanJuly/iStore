import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Banner from "../banner/Banner";
import Footer from "../footer/Footer";

export default function PageLayout() {
  return (
    <div>
      <Header />
      <Banner />
      <main className="px-[80px] py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
