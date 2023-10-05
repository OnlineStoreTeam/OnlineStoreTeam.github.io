import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userProductApi = createApi({
  reducerPath: 'userProductApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://happytails-store.onrender.com ',
    baseUrl: 'http://18.193.85.240:5000/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({page, limit}) => `products?page=${page}&size=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.content.map(({ id }) => ({ type: 'Products', id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    getOneProduct: builder.query({
      query: (id = 1) => `products/${id}`,
    }),
    
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
} = userProductApi;
