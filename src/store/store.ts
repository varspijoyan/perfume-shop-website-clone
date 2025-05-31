import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/cartReducer";
import { wishlistReducer } from "./wishlist/wishlistReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
