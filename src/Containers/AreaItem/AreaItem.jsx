import React from "react";
import "../AreaItem/AreaItem.css";

const AreaItem = (props) => {
  let { strArea } = props.data;

  return (
    <div className="area col-md-4 col-lg-3 col-sm-6">
      <div className="item-area">
        <i className="fa-solid fa-city"></i>
        <h2>{strArea}</h2>
      </div>
    </div>
  );
};

export default AreaItem;
