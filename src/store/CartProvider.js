import { useReducer } from "react";
import CartContext from "./cart-context";
import * as actionType from "./cart-reducer-actions";
import cartReducer from "./cart-reducer";

const CartProvider = (props) => {
  const [items, dispatchCartAction] = useReducer(cartReducer, []);

  const onAddItem = (item) => {
    dispatchCartAction({
      type: actionType.ADD_ITEM_TO_CART,
      payload: {
        item: item,
      },
    });
  };

  const onRemoveItem = (id) => {
    dispatchCartAction({
      type: actionType.REMOVE_ITEM_FROM_CART,
      payload: {
        id: id,
      },
    });
  };

  const onLessItem = (id) => {
    dispatchCartAction({
      type: actionType.ITEM_LESS,
      payload: {
        id: id,
      },
    });
  }

  const cartCtx = {
    items: items,
    totalAmount: 0,
    addItem: onAddItem,
    removeItem: onRemoveItem,
    lessItem: onLessItem
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
