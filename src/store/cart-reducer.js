import * as actionType from "./cart-reducer-actions";

const defaultState = [];

const cartReducer = (state = defaultState, action) => {
  console.log(`state: ${JSON.stringify(state)}`);
  switch (action.type) {
    case actionType.ADD_ITEM_TO_CART: {
      console.log(actionType.ADD_ITEM_TO_CART, action.payload);
      if (state.find((item) => item.id === action.payload.item.id)) {
        const newState = [...state].map((item) => {
          if (item.id === action.payload.item.id) {
            const newQty = item.qty + action.payload.item.qty;
            return { ...item, qty: newQty };
          }
          return { ...item };
        });
        return newState;
      } else {
        return [...state, action.payload.item];
      }
    }
    case actionType.REMOVE_ITEM_FROM_CART: {
      const itemToUpdateOrRemove = [...state].find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdateOrRemove && itemToUpdateOrRemove.qty > 1) {
        return [...state].map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return { ...item };
          }
        });
      }
      return state.filter((item) => item.id !== action.payload.id);
    }
    case actionType.CLEAR_ITEMS: {
      return defaultState;
    }
    default: {
      return state;
    }
  }
};
export default cartReducer;
