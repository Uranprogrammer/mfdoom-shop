import React from "react";
import "./card.css";
import { FaHeart } from "react-icons/fa";

function Card({ imageSrc, productName, originalPrice, discountedPrice }) {
  return (
    <div className="card-container">
      <div className="card-image_container">
        <img src={imageSrc} alt={productName} />
      </div>
      <h2>{productName}</h2>
      <div className="card-price_container">
        <p>{originalPrice}</p>
        <p>{discountedPrice}</p>
      </div>
      <div className="AddToCart-container">
        <h3>Add To Cart</h3>
        <a>
          <FaHeart />
        </a>
      </div>
    </div>
  );
}

export default Card;
