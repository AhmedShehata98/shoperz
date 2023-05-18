import { createWrapper } from "next-redux-wrapper";
import { appSlice } from "./slices/app.slice";
import {
  Action,
  ThunkAction,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "@/services/products.service";
import { shippingAddressApi } from "@/services/shippingAddress.service";
import { userApi } from "@/services/user.service";

export const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [shippingAddressApi.reducerPath]: shippingAddressApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        productsApi.middleware,
        userApi.middleware,
        shippingAddressApi.middleware
      ),
    devTools: true,
  });
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export type appDispatch = ReturnType<AppStore["dispatch"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
setupListeners(makeStore().dispatch);
