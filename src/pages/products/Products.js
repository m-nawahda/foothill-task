import { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import CustomModal from "../../components/modal/CustomModal";
import EmptyMsg from "../../components/ui-components/empty-msg/EmptyMsg";
import "./products.css";

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
    <div>
      <CustomModal fetchData={fetchData} />
      <div className="products-container">
        {products && products.length ? (
          products.map((product) => (
            <Card {...product} purchasable key={product.id} />
          ))
        ) : (
          <EmptyMsg>There are no products</EmptyMsg>
        )}
      </div>
    </div>
  );
};

export default Products;
