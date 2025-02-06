import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import News from "./components/main/News";
import PhuKien1 from "./components/main/PhuKien1";
import PhuKien2 from "./components/main/PhuKien2";
import Macbook from "./components/main/Macbook";
import Watch from "./components/main/Watch";
import Ipad from "./components/main/Ipad";
import Iphone from "./components/main/Iphone";
import Section_3 from "./components/main/Section_3";
import Section_2 from "./components/main/Section_2";
import Section_1 from "./components/main/Section_1";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import ProductDetail from "./components/ProductDetail/DetailIphone"; // Chi tiết sản phẩm

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section_1 />
              <Section_2 />
              <Section_3 />
              <Ipad />
              <Iphone />
              <Macbook />
              <PhuKien1 />
              <PhuKien2 />
              <Watch />
              <News />
            </>
          }
        />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
