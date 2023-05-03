import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../ItemDetails/ItemDetails.css";
import Loading from "../../Containers/Loading/Loading";
import Disconnected from "../Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

const ItemDetails = () => {
  let { id } = useParams();

  const [details, setDetails] = useState([]);

  async function getItemDetails(id) {
    let { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setDetails(data.meals);
  }


  useEffect(() => {
    getItemDetails(id);
  }, []);

  return(<>
    <Offline><Disconnected/></Offline>

      {details.length>0?details.map((value, index) => (
    <div key={index} data={value} className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <img
            src={details[0].strMealThumb}
            className="w-100"
            alt="Meal Name"
          />
        </div>
        <div className="col-md-7 meal-main">
          <h1>{details[0].strMeal}</h1>
          <div className="categoryName">
            <h1>Category :</h1>
            <h1>{details[0].strCategory}</h1>
          </div>
          <div className="areaName">
            <h1>Area :</h1>
            <h1>{details[0].strArea}</h1>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="overview text-white">
          <p>{details[0].strInstructions}</p>
        </div>
      </div>
      <div className="row">
      
        {details.map((value , index) => <div>
          <p>{value.strIngredient1}</p>
        </div>)} 
      </div>
    </div>
  )):<Loading/>}
  </>) 
};

export default ItemDetails;
