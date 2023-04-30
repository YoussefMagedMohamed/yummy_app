import React, { useEffect, useState } from "react";
import { getMealsArea } from "../APIs/Apis";
import AreaItem from "../../Containers/AreaItem/AreaItem.jsx";

const Area = () => {
  const [Areas, setAreas] = useState([]);

  let getData = async () => {
    let areas = await getMealsArea();
    setAreas(areas);
  };

  console.log(Areas);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Areas.map((value, index) => (
            <AreaItem key={index} data={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Area;
