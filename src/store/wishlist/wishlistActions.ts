import { IProduct } from "../../types";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  WishlistActionType,
} from "./wishlistTypes";

export const addToWishlist = (product: IProduct): WishlistActionType => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId: number): WishlistActionType => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});
