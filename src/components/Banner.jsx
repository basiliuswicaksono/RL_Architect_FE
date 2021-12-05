import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import FittedImage from "react-fitted-image";

function Banner() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/banners`).then((res) => {
      const pics = res.data.response;
      setItems(pics);
    });
  }, []);

  return (
    <div className="bg-dark">
      <Carousel interval={3000} fade>
        {items.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="d-block w-100 img">
              <FittedImage
                fit="contain"
                src={item.url_picture}
                background={true}
              />
            </div>
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
