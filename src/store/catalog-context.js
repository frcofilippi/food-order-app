import React, { useEffect, useState } from "react";
import useHttp from "../hooks/use-http";

const defaultValue = {
  availableMeals: [],
  isLoading: false,
  error: null,
};
const CatalogContext = React.createContext(defaultValue);

export const CatalogProvider = (props) => {
  const [availableMeals, setAvailableMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMealsCatalog } = useHttp();

  const mealsCtx = {
    availableMeals: availableMeals,
    isLoading: isLoading,
    error: error,
  };

  useEffect(() => {
    const transformData = (data) => {
      const loadedMeals = [];
      Object.keys(data).forEach((key) => {
        const meal = { ...data[key], id: key };
        console.log(`Original: ${data[key]}`)
        console.log(`Transformed: ${meal}`)
        loadedMeals.push(meal);
      });
      setAvailableMeals(loadedMeals);
    };

      fetchMealsCatalog(
        {
         url: "https://food-order-app-6d6ef-default-rtdb.firebaseio.com/meals.json",
        },
        transformData
      );
  }, [fetchMealsCatalog]);

  return (
    <CatalogContext.Provider value={mealsCtx}>
      {props.children}
    </CatalogContext.Provider>
  );
};

export default CatalogContext;
