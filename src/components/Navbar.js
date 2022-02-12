import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <a href="#home">
        <img
          src={require("../img/airbnb.png")}
          alt="Airbnb Logo"
          className="nav-logo"
        />
      </a>
    </div>
  );
}

export default Navbar;
