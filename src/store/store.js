import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './productApi';
import { userProductApi } from './userProductApi';
// import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [userProductApi.reducerPath]: userProductApi.reducer,
    // cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(userProductApi.middleware),
});
