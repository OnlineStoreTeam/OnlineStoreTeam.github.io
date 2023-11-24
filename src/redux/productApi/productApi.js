import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://3.79.184.103:5000/',
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
      query: ({page, limit, id}) => `product?categoryId=${id}&page=${page}&size=${limit}`,
      providesTags: (result) =>
        result
          ? [
              result.content.map(({ id }) => ({ type: 'Products', id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),
    searchProductsByName: builder.query({
      query: ({page, limit, value}) => `products/search?name=${value}&page=${page}&size=${limit}`,
      providesTags: (result) =>
        result
          ? [
              result.content.map(({ id }) => ({ type: 'Products', id })),
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
      query({body}) {
        return {
          url: `products`,
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
  useGetProductsByCategoryQuery,
  useSearchProductsByNameQuery,
  useGetOneProductQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = productApi;
