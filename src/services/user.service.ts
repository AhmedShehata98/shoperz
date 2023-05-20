import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_BASE_URL, ENDPOINTS } from "./api/shoppers.api";

export const userApi = createApi({
  reducerPath: "user",
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
      transformErrorResponse: (
        response: { status: string | number; data: SignupError },
        meta,
        arg
      ) => ({
        status: response.status,
        errDetails: {
          message:
            response.data.error?.[0].error?.[0].message ||
            response.data.message,
          data: response.data.data || null,
          field: response.data.error?.[0].field || null,
        },
      }),
    }),
  }),
});

export const { useSignupUserMutation } = userApi;
