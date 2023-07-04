import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = (props) => {
  const dummyCartItems = [
    { id: "1", name: "Sushi", quantity: "2", price: "22.99" },
    { id: "2", name: "Sushi1", quantity: "1", price: "12.15" },
    { id: "3", name: "Sushi2", quantity: "1", price: "1" },
    { id: "4", name: "Sushi3", quantity: "4", price: "10.00" },
  ];
  const cartItems = dummyCartItems.map((item) => (
    <div>
      <li key={item.id}>{item.name}</li>
    </div>
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartItems}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes["total-amount"]}>$35.62</span>
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
