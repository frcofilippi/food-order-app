import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ShoppingCart.module.css";
import CartContext from "../../store/cart-context";

const ShoppingCart = (props) => {
  // const dummyCartItems = [
  //   { id: "1", name: "Sushi", quantity: "2", price: "22.99" },
  //   { id: "2", name: "Sushi1", quantity: "1", price: "12.15" },
  //   { id: "3", name: "Sushi2", quantity: "1", price: "1" },
  //   { id: "4", name: "Sushi3", quantity: "4", price: "10.00" },
  // ];

const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <div>
      <li key={item.id}>{`${item.itemName} - ${item.qty} - ${item.price}`}</li>
    </div>
  ));

  const totalAmount = cartCtx.items.reduce((acum,currItem) => acum + (currItem.price*currItem.qty),0);

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes["total-amount"]}>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
      <Button
          label={"Cancel"}
          isCancel={true}
          onClick={props.onClose}
          type="button"
        />
        <Button label={"Order"} />
      </div>
    </Modal>
  );
};

export default ShoppingCart;
