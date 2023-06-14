import {
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { appDispatch } from "@/redux/store";

import { shoperzApi } from "@/services/shoperzApi.service";

export const useAppDispatch: () => appDispatch = useDispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
