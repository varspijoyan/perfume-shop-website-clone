import { IProduct } from "../../types";

export interface IWishlistState {
  items: IProduct[];
}

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

interface IAddToWishlistAction {
  type: typeof ADD_TO_WISHLIST;
  payload: IProduct;
}

interface IRemoveFromWishlistAction {
  type: typeof REMOVE_FROM_WISHLIST;
  payload: number; // we will remove product from wishlist by id
}

export type WishlistActionType =
  | IAddToWishlistAction
  | IRemoveFromWishlistAction;
