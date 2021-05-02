import React from "react";
import "../App.css";
import "./Banner.css";
import Carousel from "react-elastic-carousel";
import Item from "./ItemBanner";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

function Banner() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="banner-container">
      <Carousel breakPoints={breakPoints}>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
