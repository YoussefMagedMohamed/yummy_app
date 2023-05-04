import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getIngredients } from '../APIs/Apis';
import Item from '../../Containers/Item/Item';
import Loading from '../../Containers/Loading/Loading';

const DataIngredients = () => {

    let ingredient = useParams();
    const [Ingredients, setIngredients] = useState([]);
  
    let getData = async () => {
      let items = await getIngredients(ingredient.ingredient);
      setIngredients(items);
    };

    useEffect(() => {
        getData();
      }, []);

  return (
    <>
        {Ingredients.length>0?<div className="ItemsArea container">
      <div className="row">
        {Ingredients.map((value, index) => (
          <Item key={index} data={value} />
        ))}
      </div>
    </div>:<Loading/>}
    </>
  )
}

export default DataIngredients