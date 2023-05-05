import React from "react";
import "../ItemRandom/ItemRandom.css";
import { Link } from "react-router-dom";

const ItemRandom = (props) => {
  let { strMealThumb, strMeal , idMeal} = props.data;

  return (
    <>
      <div className="itemRandom">
        <Link to={`/itemDetails/${idMeal}`}>
          <div className="item_random">
            <img src={strMealThumb} alt="meal" className="w-100" />
            <div className="item-layer">
              <p>{strMeal}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ItemRandom;
