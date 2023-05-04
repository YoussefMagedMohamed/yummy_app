import React, { useEffect, useState } from "react";
import { getItemsIngredients } from "../APIs/Apis";
import Loading from "../../Containers/Loading/Loading";
import IngredientsItem from "../../Containers/IngredientsItem/IngredientsItem";

const Ingredients = () => {
        const [Ingredients, setIngredients] = useState([]);
      
        let getData = async () => {
          let ingredients = await getItemsIngredients();
          setIngredients(ingredients);
        };
      
      
        useEffect(() => {
          getData();
        }, []);

  return (
    <>
      {Ingredients.length > 0 ? (
        <div className="container my-5">
        <div className="row">
          {Ingredients.map((value, index) => (
            <IngredientsItem key={index} data={value} />
          ))}
        </div>
      </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Ingredients;
