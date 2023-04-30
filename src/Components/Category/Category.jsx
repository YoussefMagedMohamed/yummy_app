import React, { useEffect, useState } from 'react'
import { getMealsCategory } from '../APIs/Apis';
import CategoryItem from '../../Containers/CategoryItem/CategoryItem';

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
    <div className="container my-5">
        <div className="row">
          {Category.map((value, index) => (
            <CategoryItem key={index} data={value} />
          ))}
        </div>
      </div>
  )
}

export default Category