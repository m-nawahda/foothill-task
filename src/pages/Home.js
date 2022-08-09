import React from "react";
import Navbar from "../components/navbar/Navbar";
import ShoppingCarts from "./shoppingCarts/ShoppingCarts";
import Products from "./products/Products";
import { Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          margin: "1rem",
          textAlign: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shopping-carts" element={<ShoppingCarts />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
