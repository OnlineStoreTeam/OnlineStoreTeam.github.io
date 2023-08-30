import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userProductApi = createApi({
  reducerPath: 'userProductApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://happytail.onrender.com/',
    baseUrl: 'http://localhost:8080/',
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
    getProductsByCategory: builder.query({
        query: ({page, limit, category}) => `products/categories/?page=${page}&size=${limit}&category=${category}`,
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
  useGetProductsByCategoryQuery
} = userProductApi;
