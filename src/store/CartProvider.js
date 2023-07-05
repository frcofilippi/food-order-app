import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const onAddItem = (item) => {
    setItems([...items, item]);
  };

  const onRemoveItem = (id) => {
    const newItems = [...items];
    console.log(`Removed item: ${newItems.pop(id)}`);
    setItems(newItems);
  };

  const cartCtx = {
    items: items,
    totalAmount: 0,
    addItem: onAddItem,
    removeItem: onRemoveItem,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
