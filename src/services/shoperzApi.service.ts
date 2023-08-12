import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";
import {
  setShoppingCart,
  setIsLoggedIn,
  setShowCartDrawer,
  removeFromShoppingCart,
  setOrder,
  setClientSecret,
  setAddressId,
} from "@/redux/slices/app.slice";
import { HYDRATE } from "next-redux-wrapper";
import { isInCartMiddleware } from "@/utils/isInCartMiddleware";

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
      query: ({ limit, page, filters, parts, q }) => ({
        method: "GET",
        url: ENDPOINTS.products.products,
        params: {
          limit,
          page,
          parts,
          q,
          ...filters,
        },
      }),
      providesTags: ["Products"],
    }),
    getTopRatedProducts: builder.query<
      TopRatedProductsResponse,
      { limit: number }
    >({
      query: ({ limit }) => ({
        method: "GET",
        url: ENDPOINTS.products.topRatedProduct,
        params: {
          limit,
        },
      }),
      providesTags: ["Products"],
    }),
    getMegaOfferProducts: builder.query<
      TopRatedProductsResponse,
      { limit: number }
    >({
      query: ({ limit }) => ({
        method: "GET",
        url: ENDPOINTS.products.megaOfferProduct,
        params: {
          limit,
        },
      }),
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
      GetCartByIdResponse,
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
      RemoveCartitemResponse,
      { productId: string | undefined; token: string | undefined }
    >({
      query: ({ productId, token }) => ({
        url: `${ENDPOINTS.cart}/${productId}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Cart", "OneProduct", "Products"],
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        await queryFulfilled;
        dispatch(removeFromShoppingCart({ _id: arg.productId }));
      },
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
    clearCart: builder.query({
      query: (token) => ({
        method: "DELETE",
        url: `${ENDPOINTS.cart}/clear`,
        headers: {
          authorization: token,
        },
      }),
    }),

    createOrder: builder.mutation<
      CreateOrderResponse,
      {
        addressId: string | null;
        method: "cod" | "pypl" | "card";
        token: Token;
      }
    >({
      query: ({ addressId, method, token }) => ({
        method: "POST",
        url: ENDPOINTS.order.orders,
        headers: {
          authorization: token,
        },
        body: { address: addressId, method },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data.error === null && data.data) {
          dispatch(shoperzApi.endpoints.clearCart.initiate(arg.token));
        }
        return;
      },
    }),
    getUserOrders: builder.query<
      OrdersResponse,
      { limit: number; page: number; token: Token }
    >({
      query: ({ limit, page, token }) => ({
        url: ENDPOINTS.order.userOrders,
        headers: {
          authorization: token,
        },
        params: {
          limit,
          page,
        },
      }),
    }),
    getOrderById: builder.query<any, { id: Id; token: Token }>({
      query: ({ id, token }) => ({
        url: `${ENDPOINTS.order.orders}/${id}`,
        headers: {
          authorization: token,
        },
      }),
    }),
    getStripePublishableKey: builder.query<
      PublishableKeyResponse,
      { token: Token }
    >({
      query: ({ token }) => ({
        url: ENDPOINTS.payments.pk,
        headers: { authorization: token },
      }),
    }),
    createPaymentIntent: builder.mutation({
      query: (orderId: string | undefined) => ({
        url: ENDPOINTS.checkout["create-payment-intent"],
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: orderId,
      }),
    }),

    getUserAddressList: builder.query<
      ShippingAddressResponse,
      { token: string | undefined }
    >({
      query: ({ token }) => ({
        method: "GET",
        url: ENDPOINTS.address,
        headers: {
          authorization: token,
        },
      }),
      providesTags: ["Address"],
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const address = await queryFulfilled;
        const addressId = address.data.data.userAddresses.find(
          (adrs) => adrs.default === true
        )?._id;
        dispatch(setAddressId({ addressId }));
      },
    }),
    getUserAddressById: builder.query<
      ShippingAddressByIdResponse,
      { id: Id; token: Token }
    >({
      query: ({ id, token }) => ({
        url: `${ENDPOINTS.address}/${id}`,
        headers: {
          authorization: token,
        },
      }),
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
        token: Token;
        addressId: Id;
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
      { addressId: Id; token: Token }
    >({
      query: ({ addressId, token }) => ({
        url: `${ENDPOINTS.address}/${addressId}`,
        method: "DELETE",
        headers: {
          authorization: token,
        },
      }),
      invalidatesTags: ["Address"],
    }),

    getAllCategories: builder.query<CategoryResponse, void>({
      query: () => ({
        url: ENDPOINTS.categories.category,
      }),
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
  useClearCartQuery,
  useUpdateCartQuantityMutation,
  useCreateOrderMutation,
  useGetUserOrdersQuery,
  useGetOrderByIdQuery,
  useGetStripePublishableKeyQuery,
  useCreatePaymentIntentMutation,
  useGetUserAddressListQuery,
  useGetUserAddressByIdQuery,
  useAddUserAddressMutation,
  useRemoveAddressMutation,
  useUpdateAddressDataMutation,
  useGetAllCategoriesQuery,
} = shoperzApi;
export const { getRunningQueriesThunk } = shoperzApi.util;
