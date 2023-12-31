import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import CatalogContext from "../../store/catalog-context";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const catalogCtx = useContext(CatalogContext);
  // const mealList = DUMMY_MEALS.map((meal) => {
  const mealList = catalogCtx.availableMeals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        itemName={meal.name}
        itemDescription={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        {catalogCtx.error && <p>{catalogCtx.error}</p>}
        {catalogCtx.isLoading ? <p>Loading...</p> : <ul>{mealList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
