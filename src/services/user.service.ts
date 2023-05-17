import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "https://shoperz.vercel.app/" }),
  endpoints: (builder) => ({}),
});
