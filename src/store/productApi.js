import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
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
    addProduct: builder.mutation({
      query(body) {
        return {
          url: 'products',
          method: 'POST',
          body,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    editProduct: builder.mutation({
      query({id, body}) {
        return {
          url: `products/${id}`,
          method: 'PUT',
          body,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    deleteProduct: builder.mutation({
      query(id) {
        return {
          url: `products/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
