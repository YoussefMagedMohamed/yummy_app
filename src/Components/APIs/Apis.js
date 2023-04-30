import axios from "axios";

export let getMealsHome = async () => {
    let { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      return data.meals
}

export let getMealsArea = async () => {
    let { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      return data.meals
}

export let getItemDetails = async () => {
    let { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
      );
      return data.meals;
}

export let getMealsCategory = async () => {
    let { data } = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      return data.categories
}