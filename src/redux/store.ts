import { createWrapper } from "next-redux-wrapper";
import { appSlice } from "./slices/app.slice";
import {
  Action,
  ThunkAction,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { dummyjsonApi } from "@/services/dummyjson.service";
import { shoperzApi } from "@/services/shoperzApi.service";

export const makeStore = () =>
  configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [dummyjsonApi.reducerPath]: dummyjsonApi.reducer,
      [shoperzApi.reducerPath]: shoperzApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        dummyjsonApi.middleware,
        shoperzApi.middleware
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
