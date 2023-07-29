import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3004',
    baseUrl: 'http://localhost:8080',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // query: (page = 0, limit = 10) => `/products?_page=${page}&_limit=${limit}`,
      // query: (limit = 10) => `products?_limit=${limit}`,
      // query: ({page, limit}) => `admin/products?page=0&size=15`,
      query: ({page, limit}) => `admin/products?page=${page}&size=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.content.map(({ id }) => ({ type: 'Products', id })),
              // ...result.map(({ id }) => ({ type: 'Products', id })),
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
          // url: 'products',
          url: 'admin/products',
          method: 'POST',
          body,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    }),
    addImage: builder.mutation({
      query({id, body}) {
        return {
          url: `admin/products/${id}/image`,
          method: 'POST',
          body,
          headers: {
            'Content-type': 'multipart/form-data',
          },
        };
      },
      invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    }),
    editProduct: builder.mutation({
      query(id, body) {
        return {
          url: `products/${id}`,
          method: 'PUT',
          body,
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
  useAddImageMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
