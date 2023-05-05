import React, { useState } from "react";
import "../Search/Search.css";
import { getRandom } from "../APIs/Apis";
import ItemRandom from "../../Containers/ItemRandom/ItemRandom";

const Search = () => {
  const [random, setRandom] = useState([]);

  let getData = async () => {
    let meals = await getRandom();
    setRandom(meals);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="search">
            <input type="text" placeholder="Search by meal name..." />
            <i className="fa-solid fa-shuffle" onClick={getData}></i>
          </div>
        </div>
        <div className="row item-random">
        {random.map((value, index) => (
          <ItemRandom key={index} data={value} />
        ))}
        </div>
      </div>
    </>
  );
};

export default Search;
