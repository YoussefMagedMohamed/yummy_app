import React, { useEffect, useState } from "react";
import "../ItemsCategory/ItemsCategory.css";
import { getItemsCategory } from "../../Components/APIs/Apis";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Disconnected from "../../Components/Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

const ItemsCategory = () => {
    let items = useParams();
  const [ItemsCategory, setItemsCategory] = useState([]);

  let getData = async () => {
    let meals = await getItemsCategory(items.category);
    setItemsCategory(meals);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {/* <Offline><Disconnected/></Offline> */}

      {ItemsCategory.length>0?<div className="container my-5">
      <div className="row">
        {ItemsCategory.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div>:<Loading/>}
    </>
  );
};

export default ItemsCategory;
