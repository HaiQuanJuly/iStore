import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./components/pages/HomePage";
import Iphone from "./components/main/Iphone";
import Ipad from "./components/main/Ipad";
import Macbook from "./components/main/Macbook";
import ProductDetail from "./components/ProductDetail/DetailIphone";
import ProductDetailIpad from "./components/ProductDetail/DetailIpad";
import ProductDetailMacbook from "./components/ProductDetail/DetailMacbook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="macbook" element={<Macbook />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="product/ipad/:id" element={<ProductDetailIpad />} />
          <Route
            path="product/macbook/:id"
            element={<ProductDetailMacbook />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
