import React from "react";
import "./shop.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "../../components/card/card";
import hoodieImage from "../../assets/hoodieImages/hoodie.png";
import hoodieImage2 from "../../assets/hoodieImages/hoodie2.png";
import hoodieImage3 from "../../assets/hoodieImages/hoodie3.png";
import hoodieImage4 from "../../assets/hoodieImages/hoodie4.png";
import hoodieImage5 from "../../assets/hoodieImages/hoodie5.png";
import hoodieImage6 from "../../assets/hoodieImages/hoodie6.png";

import shirtImage1 from "../../assets/tshirtImages/shirtImage1.png";
import shirtImage2 from "../../assets/tshirtImages/shirtImage2.png";
import shirtImage3 from "../../assets/tshirtImages/shirtImage3.png";
import shirtImage4 from "../../assets/tshirtImages/shirtImage4.png";
import shirtImage5 from "../../assets/tshirtImages/shirtImage5.png";

import hatImage1 from "../../assets/hatsImages/hatImage1.png";
import hatImage2 from "../../assets/hatsImages/hatImage2.png";
import hatImage3 from "../../assets/hatsImages/hatImage3.png";

import accesImage1 from "../../assets/accessoriesImages/accesImage1.png";
import accesImage2 from "../../assets/accessoriesImages/accesImage2.png";
import accesImage3 from "../../assets/accessoriesImages/accesImage3.png";

import vinylImage1 from "../../assets/vinylImages/vinylImage1.png";
import vinylImage2 from "../../assets/vinylImages/vinylImage2.png";
import vinylImage3 from "../../assets/vinylImages/vinylImage3.png";
import vinylImage4 from "../../assets/vinylImages/vinylImage4.png";
import vinylImage5 from "../../assets/vinylImages/vinylImage5.png";

import cdImage1 from "../../assets/CDImages/CDImage1.png";
import cdImage2 from "../../assets/CDImages/CDImage2.png";

import posterImage1 from "../../assets/posterImages/posterImage1.png";
import posterImage2 from "../../assets/posterImages/posterImage2.png";
import posterImage3 from "../../assets/posterImages/posterImage3.png";
import posterImage4 from "../../assets/posterImages/posterImage4.png";

import otherImage1 from "../../assets/otherImages/otherImage1.png";



const hoodieImageSources = [
  hoodieImage,
  hoodieImage2,
  hoodieImage3,
  hoodieImage4,
  hoodieImage5,
  hoodieImage6,
];

const shirtImageSources = [
  shirtImage1,
  shirtImage2,
  shirtImage3,
  shirtImage4,
  shirtImage5,
];


const hatImageSources = [hatImage1, hatImage2, hatImage3];

const accesImageSources = [
  {
    name: "MFDOOM Gold Ring",
    price: "$7.00",
    image: accesImage1,
  },

  {
    name: "MFDOOM Ruby Gem Ring",
    price: "$10.00",
    image: accesImage2,
  },

  {
    name: "MFDOOM Ring",
    price: "$5.00",
    discount: "$20.00",
    image: accesImage3,
  },
];

const vinylImages = [
  {
    name:"Mm..Food",
    price:"$30.00",
    image: vinylImage1
  },
  {
    name:"Madvillainy",
    price:"$30.00",
    image: vinylImage2
  },
  {
    name:"Vaudeville Villain",
    price:"$30.00",
    image: vinylImage3
  },
  {
    name:"Black Bastards",
    price:"$30.00",
    image: vinylImage4
  },
  {
    name:"Operation: Doomsday",
    price:"$30.00",
    image: vinylImage5
  },
];

const cdimages = [
  {
    name:"Vaudeville Villain",
    price: "$25.00",
    image: cdImage1
  },
  {
    name:"Mm..Food",
    price: "$25.00",
    image: cdImage2
  }
]

const posterImages = [
  {
    name:"MF-DOOM Poster",
    price: "$10.00",
    image: posterImage1
  },
  {
    name:"MF-DOOM Poster",
    price: "$10.00",
    image: posterImage2
  },
  {
    name:"MF-DOOM Poster",
    price: "$10.00",
    image: posterImage3
  },
  {
    name:"MF-DOOM Poster",
    price: "$10.00",
    image: posterImage4
  },
]

const otherImages = [
  {
    name:"MF-DOOM Action Figure",
    price: "$60.00",
    image: otherImage1
  }
]

function Shop() {
  return (
    <div className="shop-container section-padding">
      <h1>Our Products</h1>
      <div className="cards-container">
        <Tabs>
          <TabList className="tablist">
            <Tab className="tab-item">Hoodies</Tab>
            <Tab className="tab-item">T-Shirts</Tab>
            <Tab className="tab-item">Hats</Tab>
            <Tab className="tab-item">Accessories</Tab>
            <Tab className="tab-item">Vinyls</Tab>
            <Tab className="tab-item">CDs</Tab>
            <Tab className="tab-item">Posters</Tab>
            <Tab className="tab-item">Others</Tab>
          </TabList>

          {/* Hoodies */}
          <TabPanel className="cards">
            {hoodieImageSources.map((imageSrc, index) => (
              <Card
                key={index}
                imageSrc={imageSrc}
                productName={`MF-DOOM Hoodie`}
                originalPrice={"$15.00"}
                discountedPrice={"$25.00"}
              />
            ))}
          </TabPanel>

          {/* T-Shirts */}
          <TabPanel className="cards">
            {shirtImageSources.map((imageSrc, index) => (
              <Card
                key={index}
                imageSrc={imageSrc}
                productName={`MF-DOOM T-Shirt`}
                originalPrice={"$10.00"}
                discountedPrice={"$20.00"}
              />
            ))}
          </TabPanel>

          {/* Hats */}
          <TabPanel className="cards">
            {hatImageSources.map((imageSrc, index) => (
              <Card
                key={index}
                imageSrc={imageSrc}
                productName={`MF-DOOM Hat`}
                originalPrice={"$5.00"}
                discountedPrice={"$10.00"}
              />
            ))}
          </TabPanel>

          {/* Accessories */}
          <TabPanel className="cards">
            {accesImageSources.map((accessory, index) => (
              <Card
                key={index}
                imageSrc={accessory.image}
                productName={accessory.name}
                originalPrice={accessory.price}
                discountedPrice={accessory.discount ? accessory.discount : null}
              />
            ))}
          </TabPanel>

          {/* Vinyls */}
          <TabPanel className="cards">
            {vinylImages.map((vinyl,  index) => (
              <Card
              key={index}
              imageSrc={vinyl.image}
              productName={vinyl.name}
              originalPrice={vinyl.price}
              />
            ))}
          </TabPanel>

          {/* CDs */}
          <TabPanel className="cards">
            {cdimages.map((cd,index) => (
              <Card
              key={index}
              imageSrc={cd.image}
              productName={cd.name}
              originalPrice={cd.price}
              />
            ))}
          </TabPanel>

          {/* Posters */}
          <TabPanel className="cards">
            {posterImages.map((poster, index) => (
              <Card
              key={index}
              imageSrc={poster.image}
              productName={poster.name}
              originalPrice={poster.price}/>
            ))}
          </TabPanel>

          {/* Others */}
          <TabPanel className="cards">
            {otherImages.map((other,index) => (
              <Card
              key={index}
              imageSrc={other.image}
              productName={other.name}
              originalPrice={other.price}/>
            ))}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Shop;
