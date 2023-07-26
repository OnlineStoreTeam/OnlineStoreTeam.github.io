import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './productApi';
// import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    // cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});
