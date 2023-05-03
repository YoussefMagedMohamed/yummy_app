import React, { useEffect, useState } from "react";
import { getMealsArea } from "../APIs/Apis";
import AreaItem from "../../Containers/AreaItem/AreaItem.jsx";
import Disconnected from "../Disconnected/Disconnected";
import { Offline } from "react-detect-offline";

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
    <Offline><Disconnected/></Offline>

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
