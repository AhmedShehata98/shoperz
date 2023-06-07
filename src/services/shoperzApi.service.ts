import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";
import { setCartLength, setShowCartDrawer } from "@/redux/slices/app.slice";

export const shoperzApi = createApi({
  reducerPath: "user",
  tagTypes: ["Products", "Users", "Cart"],
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
      providesTags: ["Users"],
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
      invalidatesTags: ["Users"],
    }),
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.products,
      providesTags: ["Products"],
    }),
    getTopRatedProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.topRatedProduct,
      providesTags: ["Products"],
    }),
    getMegaOfferProducts: builder.query<ProductsResponse, void>({
      query: () => ENDPOINTS.products.megaOfferProduct,
      providesTags: ["Products"],
    }),
    getProductById: builder.query<ProductsResponse, string>({
      query: (id) => `${ENDPOINTS.products.products}/${id}`,
      providesTags: ["Products"],
    }),
    getCartItems: builder.query<Cart, string>({
      query: (token) => ({
        method: "GET",
        url: ENDPOINTS.cart,
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["Cart"],
      transformResponse: (response: CartResponse, meta, arg): Cart =>
        response.data,
    }),
    addToCart: builder.mutation<
      AddToCartResponse,
      { productId: string; quantity: number; token: string }
    >({
      query: ({ productId, quantity, token }) => ({
        method: "POST",
        url: ENDPOINTS.cart,
        body: { productId, quantity },
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Cart"],
      onQueryStarted(arg, { dispatch, queryFulfilled }) {
        queryFulfilled.then(
          ({
            data: {
              data: { cart },
            },
          }) => {
            const cartLength = cart.items.length;
            dispatch(setCartLength(cartLength));
            dispatch(setShowCartDrawer(true));
          }
        );
      },
    }),
    searchProducts: builder.mutation<SearchBox, string>({
      query: (query) => ({
        method: "GET",
        url: `${ENDPOINTS.products.searchProduct}?q=${query}`,
      }),
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,

  useChangeCurrentPasswordMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUserDataQuery,
  useSearchProductsMutation,
  useAddToCartMutation,
  useGetCartItemsQuery,
} = shoperzApi;
