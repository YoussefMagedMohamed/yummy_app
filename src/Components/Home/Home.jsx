import React, { useEffect, useState } from "react";
import Item from "../../Containers/Item/Item";
import { getMealsHome } from "../APIs/Apis";
import { Offline, Online } from "react-detect-offline";
import Loading from "../../Containers/Loading/Loading";
import Disconnected from "../Disconnected/Disconnected";

const Home = () => {
  const [Meals, setMeals] = useState([]);

  let getData = async () => {
    let meals = await getMealsHome();
    setMeals(meals);
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <>

    {/* <Offline><Disconnected/></Offline> */}
      {Meals.length>0?<div className="container my-5">
      <div className="row">
        {Meals.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div> : <Loading/>}
    </>
  );
  
};

export default Home;
