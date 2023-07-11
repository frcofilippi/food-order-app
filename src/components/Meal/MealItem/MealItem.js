import { useContext } from "react";
import MealForm from "./MealForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const handleMealItemAddedToCart = qty => {
    cartCtx.addItem({...props,qty})
  }

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
          <MealForm onAddtoBag={handleMealItemAddedToCart} />
        </div>
      </li>
  );
};

export default MealItem;
