import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";

export const shoperzApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (payload: Signup) => ({
        url: ENDPOINTS.auth.signup,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json ;charset=UTF-8",
        },
      }),
      // transformErrorResponse: (
      //   response: { status: string | number; data: SignupError },
      //   meta,
      //   arg
      // ) => ({
      //   status: response.status,
      //   errDetails: {
      //     message:
      //       response.data.error?.[0].error?.[0].message ||
      //       response.data.message,
      //     data: response.data.data || null,
      //     field: response.data.error?.[0].field || null,
      //   },
      // }),
    }),
    loginUser: builder.mutation({
      query: (payload: Login) => ({
        url: ENDPOINTS.auth.login,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      }),
    }),
    userData: builder.query<{ data: { user: UserData } }, string | undefined>({
      query: (jwt: string) => ({
        method: "GET",
        url: ENDPOINTS.users.myData,
        headers: {
          authorization: jwt,
        },
      }),
    }),
    verifyEmailAddress: builder.mutation<void, VertifyPayload>({
      query: ({ token, uid }) => ({
        url: `${ENDPOINTS.auth.verifyEmail}?token=${token}&uid=${uid}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      }),
    }),
    changeCurrentPassword: builder.mutation<void, ChangeUserPassword>({
      query: (payload) => ({
        url: ENDPOINTS.users.changePassword,
        method: "PUT",
        body: payload,
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      }),
    }),
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.products,
    }),
    getTopRatedProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.topRatedProduct,
    }),
    getMegaOfferProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.megaOfferProduct,
    }),
    getProductById: builder.query<ProductsResponse, string>({
      query: (id) => `${ENDPOINTS.products.products}/${id}`,
    }),
    getCartItems: builder.query<CartResponse, string>({
      query: (token) => ({
        url: ENDPOINTS.cart,
        headers: {
          authorization: token,
        },
      }),
    }),
    addToCart: builder.mutation<
      CartResponse,
      { productId: string; quantity: number; token: string }
    >({
      query: ({ productId, quantity, token }) => ({
        url: ENDPOINTS.cart,
        body: { productId, quantity },
        headers: {
          authorization: token,
        },
      }),
    }),
    searchProducts: builder.mutation<SearchBox, string>({
      query: (query) => ({
        method: "GET",
        url: `${ENDPOINTS.products.searchProduct}?q=${query}`,
      }),
    }),
    getCartItems: builder.query<Cart, string>({
      query: (token) => ({
        method: "GET",
        url: ENDPOINTS.cart,
        headers: {
          Authorization: token,
        },
      }),
      transformResponse: (response: CartResponse, meta, arg) => response.data,
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useVerifyEmailAddressMutation,
  useChangeCurrentPasswordMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUserDataQuery,
  useSearchProductsMutation,
  useAddToCartMutation,
  useGetCartItemsQuery,
} = shoperzApi;
