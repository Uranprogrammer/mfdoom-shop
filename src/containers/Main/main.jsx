import React from "react";
import "./main.css";
import image from "../../assets/image.png";

function main() {
  return (
    <div className="main-container section-padding">
      <div className="main-first_container">
        <h1>
          Masked in Metal: Unveil Your MF DOOM Fandom with Exclusive Clothing
          and Accessories"
        </h1>
        <div className="bar"></div>
        <p>
          Step into the enigmatic world of the Metal Face Villain himself and
          explore a curated collection that pays homage to the legendary
          wordsmith and producer.
        </p>
        <div className="main-button_container">
          <a href="#">
            <button>Shop Now</button>
          </a>
          <p>world-wide shipping available</p>
        </div>
      </div>

      <div className="main-image_container">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default main;
