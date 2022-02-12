import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-gallery">
        <img src={require("../img/hero.png")} alt="Hero" className="hero-img" />
      </div>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts — all
        without leaving home.
      </p>
    </div>
  );
}

export default Hero;
