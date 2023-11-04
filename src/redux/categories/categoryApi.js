import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['Categories'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://18.193.85.240:5000/',
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: ({page, limit}) => `category?page=${page}&size=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.content.map(({ id }) => ({ type: 'Categories', id })),
              { type: 'Categories', id: 'LIST' },
            ]
          : [{ type: 'Categories', id: 'LIST' }],
    }),
    getOneCategory: builder.query({
      query: (id = 1) => `category/${id}`,
    }),
    // addProduct: builder.mutation({
    //   query(body) {
    //     return {
    //       url: 'products',
    //       method: 'POST',
    //       body,
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     };
    //   },
    //   invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    // }),
    // editProduct: builder.mutation({
    //   query({body}) {
    //     return {
    //       url: `products`,
    //       method: 'PUT',
    //       body,
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       },
    //     }
    //   },
    //   invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    // }),
    // deleteProduct: builder.mutation({
    //   query(id) {
    //     return {
    //       url: `products/${id}`,
    //       method: 'DELETE',
    //     }
    //   },
    //   invalidatesTags: [{ type: 'Products', id: 'LIST' }]
    // }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useGetOneCategoryQuery,
  // useAddProductMutation,
  // useEditProductMutation,
  // useDeleteProductMutation,
} = categoryApi;
