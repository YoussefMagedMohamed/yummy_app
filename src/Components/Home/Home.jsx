import React, { useEffect, useState } from "react";
import Item from "../../Containers/Item/Item";
import { getMealsHome } from "../APIs/Apis";

const Home = () => {
  const [Meals, setMeals] = useState([]);

  let getData = async () => {
    let meals = await getMealsHome();
    setMeals(meals);
  };

  console.log(Meals);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {Meals.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div>
  );
};

export default Home;
