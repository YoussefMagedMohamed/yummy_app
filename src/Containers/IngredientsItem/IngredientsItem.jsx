import React from "react";
import { Link } from "react-router-dom";
import "../IngredientsItem/IngredientsItem.css";

const IngredientsItem = (props) => {
  let { strIngredient } = props.data;

  return (
    <>
      <div className="ingredients col-md-4 col-lg-3 col-sm-6">
        <Link
          to={`/dataIngredients/${strIngredient}`}
          className="text-decoration-none"
        >
          <div className="item-area">
            <i className="fa-solid fa-bowl-food"></i>
            <h2>{strIngredient}</h2>
          </div>
        </Link>
      </div>
    </>
  );
};

export default IngredientsItem;
