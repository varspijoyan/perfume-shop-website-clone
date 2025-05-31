import { RootState } from "../store";

export const selectCartItems = (state: RootState) => {
  return state.cart.items;
};

export const selectCartItemsTotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.price, 0);
};
