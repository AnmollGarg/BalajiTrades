import React from "react";
import "./App.css";
import Navbar from "./Comp/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import Footer from "./Comp/Footer/Footer";
import men_banner from "./Comp/Assets/banner_mens.png";
import women_banner from "./Comp/Assets/banner_women.png";
import kids_banner from "./Comp/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="mens" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="womens" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="product/:productID" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
