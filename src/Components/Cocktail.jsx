import React from "react";
import { Link } from "react-router-dom";

const SingleCocktail = ({ id, name, info, img, glass }) => {
  return (
    <div className="wrapper">
      <div className="img">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p className="glass">{glass}</p>
        <p className="type">{info}</p>
        <button type="button">
          <Link to={`cocktail/${id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
};

export default SingleCocktail;
