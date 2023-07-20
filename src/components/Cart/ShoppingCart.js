import { useContext, useState } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import classes from "./ShoppingCart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";

const ShoppingCart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const {
    isLoading: isSendingOrder,
    error,
    sendRequest: submitOrder,
  } = useHttp();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = (id) => {
    console.log("Remove item clicked", id);
    cartCtx.removeItem(id);
  };

  const onAddHandler = (item) => {
    console.log("Add more clicked", item);
    cartCtx.addItem(item);
  };

  const onOrderConfirmHanlder = async (userData) => {
    try {
      await submitOrder({
        url: "https://food-order-app-6d6ef-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: {
          userData,
          orderedItems: cartCtx.items,
        },
      });
      setOrderSubmitted(true);
    } catch (error) {
      setOrderSubmitted(false);
    }
    cartCtx.clearCart();
    setIsCheckout(false);
  };

  const cartItemList = cartCtx.items.map((item) => {
    return (
      <CartItem
        key={item.id}
        name={item.itemName}
        qty={item.qty}
        price={item.price}
        onRemove={() => onRemoveHandler(item.id)}
        onAdd={() => onAddHandler({ ...item, qty: 1 })}
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
      {isCheckout && !isSendingOrder && (
        <div>
          <Checkout
            onConfirm={onOrderConfirmHanlder}
            onCancel={() => setIsCheckout(false)}
          />
        </div>
      )}

      {isCheckout && isSendingOrder && <h3>Sending Order...</h3>}
      {isCheckout && !isSendingOrder && orderSubmitted && (
        <h3>Order submitted</h3>
      )}

      {!isCheckout && (
        <div className={classes.actions}>
          <Button
            label={"Cancel"}
            isCancel={true}
            onClick={props.onClose}
            type="button"
          />
          <Button label={"Order"} onClick={() => setIsCheckout(true)} />
        </div>
      )}
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
