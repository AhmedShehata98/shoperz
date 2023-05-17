import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENDPOINTS } from "./api/shoppers.api";
import { ICart } from "@/models/shopperz.model";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<{ products: ICart[] }, string>({
      query: (name) => ENDPOINTS.products,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
