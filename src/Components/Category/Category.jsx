import React, { useEffect, useState } from 'react'
import { getMealsCategory } from '../APIs/Apis';
import CategoryItem from '../../Containers/CategoryItem/CategoryItem';
import Loading from "../../Containers/Loading/Loading";
import Disconnected from '../Disconnected/Disconnected';
import { Offline } from 'react-detect-offline';


const Category = () => {

  const [Category, setCategory] = useState([])

  let getData = async () => {
    let category = await getMealsCategory()
    setCategory(category)
  };


  useEffect(() => {
    getData()
  }, []);

  return (
    <>
    <Offline><Disconnected/></Offline>

      {Category.length>0?<div className="container my-5">
        <div className="row">
          {Category.map((value, index) => (
            <CategoryItem key={index} data={value} />
          ))}
        </div>
      </div> : <Loading/>}
    </>
  )
}

export default Category