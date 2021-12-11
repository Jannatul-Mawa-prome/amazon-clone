export const initialState = {
  cart: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((i) => i.id === action.item.id);
      const newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};
