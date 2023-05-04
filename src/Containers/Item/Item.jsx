import React from "react";
import "../Item/Item.css";
import { Link } from "react-router-dom";
import Disconnected from "../../Components/Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

const Item = (props) => {
  let { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.data;

  return (
    <>
      {/* <Offline>
        <Disconnected />
      </Offline> */}

      <div className="col-lg-3 col-md-4 col-sm-6">
        <Link to={`/itemDetails/${idMeal}`}>
          <div className="item">
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

export default Item;
