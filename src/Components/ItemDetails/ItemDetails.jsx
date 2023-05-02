import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ItemDetails/ItemDetails.css"

const ItemDetails = () => {
  let { id } = useParams();

  const [details, setDetails] = useState([]);

  async function getItemDetails(id) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setDetails(data.meals);
  }

  console.log(details[0]);

  useEffect(() => {
    getItemDetails(id);
  }, []);

  // let { strMealThumb } = details.meals

  return details.map((value, index) => (
    <div key={index} data={value} className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img src={details[0].strMealThumb} className="w-100" alt="Meal Name" />
        </div>
        <div className="col-md-7">
          <h1>{details[0].strMeal}</h1>
          <div className="categoryName">
            <h1>Category :</h1>
            <h1>{details[0].strCategory}</h1>
          </div>
          <div className="areaName">
            <h1>Area :</h1>
            <h1>{details[0].strArea}</h1>
          </div>
          <div className="overview">
            <p>{details[0].strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ItemDetails;
