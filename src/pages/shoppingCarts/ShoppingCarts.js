import React from "react";
import Card from "../../components/card/Card";
import { useSelector } from "react-redux";

const ShoppingCarts = () => {
  const carts = useSelector((state) => state.carts.value);
  
  return (
    <div className="products-container">
      {carts.map((cart) => (
        <Card {...cart} key={cart.id} />
      ))}
    </div>
  );
};

export default ShoppingCarts;
