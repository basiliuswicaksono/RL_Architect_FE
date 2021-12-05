import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Categories.css";

function Categories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/categories`).then((res) => {
      const categories = res.data.response;
      setItems(categories);
    });
  }, []);

  return (
    <div className="categoriesContainer">
      {items.map((item, index) => (
        <Cards key={index} data={item}></Cards>
      ))}
    </div>
  );
}

export default Categories;
