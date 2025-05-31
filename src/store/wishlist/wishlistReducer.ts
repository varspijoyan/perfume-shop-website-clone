import {
  ADD_TO_WISHLIST,
  IWishlistState,
  REMOVE_FROM_WISHLIST,
  WishlistActionType,
} from "./wishlistTypes";

const initialState: IWishlistState = {
  items: [],
};

export function wishlistReducer(
  state = initialState,
  action: WishlistActionType
): IWishlistState {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
