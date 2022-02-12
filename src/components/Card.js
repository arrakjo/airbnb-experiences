import React from "react";
import "./Card.css";
import { data } from "../json/data";

function Card() {
  return (
    <div className="card-container">
      {data.map((data, key) => {
        return (
          <div className="card" key={key}>
            <div className="availability">{data.availability}</div>
            <img
              src={require("../img" + data.image)}
              alt="Experience"
              className="card-img"
            />
            <div className="card-info">
              <div className="card-rating">
                <img
                  src={require("../img/star.png")}
                  alt="Rating"
                  className="rating-img"
                />
                <span className="rating-amount">{data.rating}</span>
                <span className="rating-counter">
                  ({data.counter}) • {data.location}
                </span>
              </div>
              <h3 className="card-title">{data.title}</h3>
              <p className="card-price">
                <span className="text-strong">From {data.price}</span> / person
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
