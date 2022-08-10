import React from "react";
import { useDispatch } from "react-redux";
import { addCart, removeCart } from "../../store/reducers/shoppingCarts";

import "./Card.css";
const Card = ({ name, price, image, description, id, purchasable }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <div>{`${price}$`}</div>
        {description ? (
          <p>
            <hr />
            {description}
            <hr />
          </p>
        ) : null}
      </div>
      {purchasable ? (
        <button
          className="add-btn"
          onClick={() => dispatch(addCart({ name, image, price, id }))}
        >
          add to card
        </button>
      ) : (
        <button className="remove-btn" onClick={() => dispatch(removeCart(id))}>
          remove cart
        </button>
      )}
    </div>
  );
};

export default Card;
