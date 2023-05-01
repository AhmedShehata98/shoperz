import { appSlice } from "./slices/app.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [appSlice.name]: appSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
