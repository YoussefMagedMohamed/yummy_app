import React, { useEffect, useState } from "react";
import { getItemsArea } from "../APIs/Apis";
import Item from "../../Containers/Item/Item";
import { useParams } from "react-router-dom";
import Loading from "../../Containers/Loading/Loading";
import Disconnected from "../Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

export const ItemsArea = () => {
  let area = useParams();
  console.log(area.area);
  const [ItemsArea, setItemsArea] = useState([]);

  let getData = async () => {
    let items = await getItemsArea(area.area);
    setItemsArea(items);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <Offline><Disconnected/></Offline>

      {ItemsArea.length>0?<div className="ItemsArea container">
      <div className="row">
        {ItemsArea.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div>:<Loading/>}
    </>
  );
};
