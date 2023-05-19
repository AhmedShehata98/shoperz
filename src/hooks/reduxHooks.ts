import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { appDispatch } from "@/redux/store";
import { dummyjsonApi } from "@/services/dummyjson.service";

export const useAppDispatch: () => appDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectCartIState = dummyjsonApi.endpoints.getCartItems.select();
export const selectAllCart = createSelector(
  selectCartIState,
  (cartItems) => cartItems.data ?? []
);
