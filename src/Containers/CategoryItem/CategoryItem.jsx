import React from "react";
import "../CategoryItem/CategoryItem.css";
import { Link } from "react-router-dom";
import Disconnected from "../../Components/Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

const CategoryItem = (props) => {
  let { idCategory, strCategory, strCategoryThumb } = props.data;

  return (
    <>
    {/* <Offline><Disconnected/></Offline> */}

      <div className="col-lg-3 col-md-4 col-sm-6 category">
      <Link to={`/ItemsCategory/${strCategory}`}>
        <div className="category-content">
          <img src={strCategoryThumb} alt="meal" className="w-100" />
          <div className="category-layer">
            <h1>{strCategory}</h1>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default CategoryItem;
