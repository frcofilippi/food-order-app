import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState(null);

  const onAddItem = (item) => {
    setItems([...items, item]);
  };

  const onRemoveItem = (id) => {
    const newItems = [...items];
    console.log(`Removed item: ${newItems.pop(id)}`);
    setItems(newItems);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: 0,
        addItem: onAddItem,
        removeItem: onRemoveItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
