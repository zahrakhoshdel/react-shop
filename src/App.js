import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import Basket from "./pages/Basket";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
