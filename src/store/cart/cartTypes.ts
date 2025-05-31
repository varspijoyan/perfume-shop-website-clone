import { IProduct } from "../../types";

export interface ICartState {
  items: IProduct[];
}

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface IAddToCartAction {
  type: typeof ADD_TO_CART;
  payload: IProduct;
}

interface IRemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  payload: number; // we will remove product from cart by id
}

export type CartActionType = IAddToCartAction | IRemoveFromCartAction;
