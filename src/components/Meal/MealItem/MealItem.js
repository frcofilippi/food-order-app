import MealForm from "./MealForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li key={props.id} className={classes["meal-item"]}>
      <div>
        <h3>{props.itemName}</h3>
        <div className={classes["item-description"]}>
          {props.itemDescription}
        </div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealForm itemId={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
