import React, { useEffect, useState } from "react";
import { getItemCategory } from "../APIs/Apis";
import Item from "../../Containers/Item/Item";
import { useParams } from "react-router-dom";

const ItemsCategory = () => {
  // let x = useParams()
  // console.log(x.id);  
  const [ItemsCategory, setItemsCategory] = useState([]);

  let getData = async () => {
    let items = await getItemCategory();
    setItemsCategory(items);
  };

  console.log(ItemsCategory);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ItemsCategory container">
        <div className="row">
        {ItemsCategory.map((value, index) => (
          <Item key={index} data={value} />
        ))}
        </div>
    </div>
  );
};

export default ItemsCategory;
