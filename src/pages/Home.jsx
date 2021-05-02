import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Categories />
    </div>
  );
};

export default Home;
