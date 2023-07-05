import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  let qtyOfItems = 0;
  cartCtx.items.forEach((i) => {
    qtyOfItems = qtyOfItems + parseInt(i.qty);
  });

  return (
    <button className={classes.button} onClick={props.onCartIconClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{qtyOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
