import { createSlice } from "@reduxjs/toolkit";

interface AppStateProps {
  jwt: string;
}

const initialState: AppStateProps = {
  jwt: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
});
