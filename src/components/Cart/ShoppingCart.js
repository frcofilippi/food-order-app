import { useContext } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ShoppingCart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const ShoppingCart = (props) => {
  const cartCtx = useContext(CartContext);

const onRemoveHandler = (id) => {
  console.log('Remove item clicked', id);
  cartCtx.removeItem(id);
}

const onAddHandler = (item) => {
  console.log('Add more clicked', item);
  cartCtx.addItem(item);
}

  const cartItemList = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.itemName}
        qty={item.qty}
        price={item.price}
        onRemove={() => onRemoveHandler(item.id)}
        onAdd={() => onAddHandler({...item, qty: 1})}
      />
    );
  });

  const totalAmount = cartCtx.items.reduce(
    (acum, currItem) => acum + currItem.price * currItem.qty,
    0
  );

  const cartContent = (
    <>
      <ul className={classes.cartItems}>{cartItemList}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span className={classes["total-amount"]}>{`$${totalAmount.toFixed(
          2
        )}`}</span>
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
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartCtx.items.length > 0 ? (
        cartContent
      ) : (
        <h1 className={classes["cart-empty"]}>Your cart is empty</h1>
      )}
    </Modal>
  );
};

export default ShoppingCart;
