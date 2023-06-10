import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";
import {
  setCartLength,
  setIsLoggedIn,
  setShowCartDrawer,
} from "@/redux/slices/app.slice";

export const shoperzApi = createApi({
  reducerPath: "user",
  tagTypes: ["Products", "Users", "Cart", "Address"],
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
    loginUser: builder.mutation<LoginResponse, Login>({
      query: (payload) => ({
        url: ENDPOINTS.auth.login,
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json ; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Users"],
      onQueryStarted: async (response, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          const hostname = window.location.hostname;
          document.cookie = `${hostname}=${res.data.data.token}`;
          dispatch(setIsLoggedIn(true));
        } catch (error) {
          dispatch(setIsLoggedIn(false));
        }
      },
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
      onQueryStarted(arg, { dispatch, queryFulfilled, extra, getState }) {
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
    removeFromCart: builder.mutation<
      ApiResponse,
      { productId: string | undefined; token: string | undefined }
    >({
      query: ({ productId, token }) => ({
        url: `${ENDPOINTS.cart}/${productId}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartQuantity: builder.mutation<
      any,
      {
        productId: string | undefined;
        quantity: number | undefined;
        token: string | undefined;
      }
    >({
      query: ({ productId, quantity, token }) => ({
        url: `${ENDPOINTS.cart}/${productId}/${quantity}`,
        method: "PUT",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Cart"],
    }),
    getUserAddressList: builder.query<
      ShippingAddressResponse,
      string | undefined
    >({
      query: (token) => ({
        method: "GET",
        url: ENDPOINTS.address,
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["Address"],
    }),
    addUserAddress: builder.mutation<
      ShippingAddressResponse,
      {
        address: Omit<
          UserAddress,
          "_id" | "userId" | "createdAt" | "updatedAt" | "__v"
        >;
        token: string | undefined;
      }
    >({
      query: ({ address, token }) => ({
        method: "POST",
        url: ENDPOINTS.address,
        headers: {
          authorization: token,
        },
        body: address,
      }),
      invalidatesTags: ["Address"],
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
  useRemoveFromCartMutation,
  useGetCartItemsQuery,
  useUpdateCartQuantityMutation,
  useGetUserAddressListQuery,
  useAddUserAddressMutation,
} = shoperzApi;
