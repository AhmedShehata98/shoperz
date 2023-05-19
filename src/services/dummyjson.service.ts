import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyjsonApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<ICart, string>({
      query: (name) => "products",
    }),
    getCartItems: builder.query<ICart, void>({
      query: () => "carts",
    }),
  }),
});

export const { useGetProductsQuery, useGetCartItemsQuery } = dummyjsonApi;
