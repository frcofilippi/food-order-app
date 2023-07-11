import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const [isButtonHighligthed, setIsButtonHighligthed] = useState(false);

  const cartCtx = useContext(CartContext);

  //this is to add as dependency of useEffect otherwise the function will run when anything happens with the ctx
  const { items } = cartCtx;
  let qtyOfItems = 0;

  cartCtx.items.forEach((i) => {
    qtyOfItems = qtyOfItems + parseInt(i.qty);
  });

  const btnClasses = `${classes.button} ${
    isButtonHighligthed ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonHighligthed(true);
    const timer = setTimeout(() => {
      setIsButtonHighligthed(false);
    }, 300);

    return () => clearTimeout(timer)
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartIconClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{qtyOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
