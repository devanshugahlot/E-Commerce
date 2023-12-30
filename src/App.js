import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/pages/Navbar";
import Shop from "./component/pages/Shop";
import ShopCategory from "./component/pages/ShopCategory";
import Product from "./component/pages/Product";
import Cart from "./component/pages/Cart";
import Footer from "./component/pages/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/Product/:productId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
