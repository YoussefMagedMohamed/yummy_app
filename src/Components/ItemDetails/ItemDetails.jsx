import React, { useEffect, useState } from "react";
import { getItemDetails } from "../APIs/Apis";
import DetailsItem from "../../Containers/DetailsItem/DetailsItem";

const ItemDetails = () => {
  const [Details, setDetails] = useState([]);

  let getData = async () => {
    let details = await getItemDetails();
    setDetails(details);
  };

  console.log(Details);

  useEffect(() => {
    getData();
  }, []);

  //  let { idMeal, strMeal, strCategory, strArea, strMealThumb } = Details;
  // console.log(Details);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h3 className="text-white">{Details.strMeal}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
