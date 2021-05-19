import React from "react";
import banner from "../assets/2.jpg";
const Home = () => {
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "blue" }}>
        Welcome to the Hacker News Search App
      </h3>
      <img
        src={banner}
        alt="banner"
        className="rounded mx-auto d-block w-100 img-fluid"
      />
    </div>
  );
};

export default Home;
