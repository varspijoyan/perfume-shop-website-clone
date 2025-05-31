import { RootState } from "../store";

export const selectWishlistItems = (state: RootState) => {
  return state.wishlist.items;
};

export const selectWishlistItemsCount = (state: RootState) => {
  return state.wishlist.items.length;
};
