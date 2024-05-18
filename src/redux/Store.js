import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import favoriteSlice from "./slice/favouriteSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});
