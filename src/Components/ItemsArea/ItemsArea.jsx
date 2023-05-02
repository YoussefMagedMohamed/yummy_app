import React, { useEffect, useState } from "react";
import { getItemsArea } from "../APIs/Apis";
import Item from "../../Containers/Item/Item";

export const ItemsArea = () => {
  const [ItemsArea, setItemsArea] = useState([]);

  let getData = async () => {
    let items = await getItemsArea();
    setItemsArea(items);
  };

  console.log(ItemsArea);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ItemsArea container">
      <div className="row">
        {ItemsArea.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div>
  );
};
