import {
  ADD_TO_CART,
  CartActionType,
  ICartState,
  REMOVE_FROM_CART,
} from "./cartTypes";

const initialState: ICartState = {
  items: [],
};

export function cartReducer(
  state = initialState,
  action: CartActionType
): ICartState {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
