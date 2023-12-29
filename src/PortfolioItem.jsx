import "./App.css";
import React from "react";

const PortfolioItem = ({ name, promoImage, description, promoLink, tags }) => {
  return (
    <div className="portfolio-item">
      <img src={promoImage}></img>
      <h3>{name}</h3>
      <span>{description}</span>
    </div>
  );
};

export default PortfolioItem;
