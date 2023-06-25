import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";
import {
  setShoppingCart,
  setIsLoggedIn,
  setShowCartDrawer,
} from "@/redux/slices/app.slice";
import { HYDRATE } from "next-redux-wrapper";

export const shoperzApi = createApi({
  reducerPath: "shoperz",
  tagTypes: ["Products", "Users", "Cart", "Address", "OneProduct"],
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
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
    getAllProducts: builder.query<ProductsResponse, productQueriesParameter>({
      query: ({ limit, sortQueries, page }) =>
        `${ENDPOINTS.products.products}/?sort=${
          sortQueries || "-createdAt"
        }&limit=${limit || 10}&page=${page || 1}`,
      providesTags: ["OneProduct"],
    }),
    getTopRatedProducts: builder.query<
      TopRatedProductsResponse,
      { limit: number }
    >({
      query: ({ limit }) =>
        `${ENDPOINTS.products.topRatedProduct}/?limit=${limit || 5}`,
      providesTags: ["Products"],
    }),
    getMegaOfferProducts: builder.query<
      TopRatedProductsResponse,
      { limit: number }
    >({
      query: ({ limit }) =>
        `${ENDPOINTS.products.megaOfferProduct}/?limit=${limit || 5}`,
      providesTags: ["Products"],
    }),
    getProductById: builder.query<ProductByIdResponse, string | undefined>({
      query: (id) => `${ENDPOINTS.products.products}/${id}`,
      providesTags: ["OneProduct"],
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
      onQueryStarted(_, { dispatch, queryFulfilled }) {
        queryFulfilled.then((cart) => {
          const cartIds = cart.data.userCart.items.map(
            ({ productId: { _id } }) => ({ _id })
          );
          dispatch(setShoppingCart({ cart: cartIds }));
        });
      },
    }),
    getCartById: builder.query<
      any,
      { productId: string | undefined; token: string | undefined }
    >({
      query: ({ productId, token }) => ({
        url: `${ENDPOINTS.cart}/${productId}`,
        method: "GET",
        headers: {
          authorization: token,
        },
      }),
    }),
    addToCart: builder.mutation<
      AddToCartResponse,
      { productId: string; quantity: number; token: string | undefined }
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
            dispatch(setShoppingCart({ cart }));
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
      invalidatesTags: ["Cart", "OneProduct"],
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
    updateAddressData: builder.mutation<
      ApiResponse,
      {
        payload: Partial<UserAddress>;
        token: string | undefined;
        addressId: string;
      }
    >({
      query: ({ payload, token, addressId }) => ({
        url: `${ENDPOINTS.address}/${addressId}`,
        method: "PUT",
        headers: {
          authorization: token,
        },
        body: payload,
      }),
      invalidatesTags: ["Address"],
    }),
    removeAddress: builder.mutation<
      ApiResponse,
      { addressId: string; token: string | undefined }
    >({
      query: ({ addressId, token }) => ({
        url: `${ENDPOINTS.address}/${addressId}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Address", "OneProduct"],
    }),
  }),
});

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useChangeCurrentPasswordMutation,
  useGetAllProductsQuery,
  useGetTopRatedProductsQuery,
  useGetMegaOfferProductsQuery,
  useGetProductByIdQuery,
  useUserDataQuery,
  useSearchProductsMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartItemsQuery,
  useGetCartByIdQuery,
  useUpdateCartQuantityMutation,
  useGetUserAddressListQuery,
  useAddUserAddressMutation,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
} = shoperzApi;
export const { getRunningQueriesThunk } = shoperzApi.util;
