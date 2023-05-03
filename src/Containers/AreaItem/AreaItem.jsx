import React from "react";
import "../AreaItem/AreaItem.css";
import { Link } from "react-router-dom";
import Disconnected from "../../Components/Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

const AreaItem = (props) => {
  let { strArea } = props.data;

  return (
    <>
    <Offline><Disconnected/></Offline>

    <div className="area col-md-4 col-lg-3 col-sm-6">
      <Link to={`/itemsArea/${strArea}`} className="text-decoration-none">
        <div className="item-area">
          <i className="fa-solid fa-city"></i>
          <h2>{strArea}</h2>
        </div>
      </Link>
    </div>
  </>);
};

export default AreaItem;
