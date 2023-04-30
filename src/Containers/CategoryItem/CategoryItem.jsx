import React from "react";
import "../CategoryItem/CategoryItem.css";

const CategoryItem = (props) => {
  let { idCategory, strCategory, strCategoryThumb } = props.data;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 category">
      <div className="category-content">
        <img src={strCategoryThumb} alt="meal" className="w-100" />
        <div className="category-layer">
          <h1>{strCategory}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
