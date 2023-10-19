import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './productApi/productApi';
import { categoryApi } from './categories/categoryApi';
import categoryReducer from './categories/categorySlice';


const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    category: categoryReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(productApi.middleware)
    .concat(categoryApi.middleware)

});
 export default store;
