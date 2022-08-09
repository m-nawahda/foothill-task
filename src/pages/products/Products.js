import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./products.css";
import CustomModal from "../../components/modal/CustomModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://62d6874451e6e8f06f0c0fb0.mockapi.io/products`
    );
    const newData = await response.json();
    setProducts(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products-container">
      <CustomModal fetchData={fetchData}/>
      {products.map((product) => (
        <Card {...product} purchasable key={product.id} />
      ))}
    </div>
  );
};

export default Products;
