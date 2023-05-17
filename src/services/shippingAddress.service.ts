import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const shippingAddressApi = createApi({
  reducerPath: "shipping-address",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUserAddress: builder.query<
      Array<{
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
          street: string;
          suite: string;
          city: string;
          zipcode: string;
          geo: {
            lat: string;
            lng: string;
          };
        };
        phone: string;
        website: string;
        company: {
          name: string;
          catchPhrase: string;
          bs: string;
        };
      }>,
      string
    >({
      query: (name) => "users",
    }),
  }),
});

export const { useGetUserAddressQuery } = shippingAddressApi;
