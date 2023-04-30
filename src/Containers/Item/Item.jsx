import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  let { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.data;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to="/itemDetails">
        <div className="item">
          <img src={strMealThumb} alt="meal" className="w-100" />
          <div className="item-layer">
            <p>{strMeal}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
