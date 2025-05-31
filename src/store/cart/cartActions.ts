import { IProduct } from "../../types";
import { ADD_TO_CART, CartActionType, REMOVE_FROM_CART } from "./cartTypes";

export const addToCart = (product: IProduct): CartActionType => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId: number): CartActionType => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
