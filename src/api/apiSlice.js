import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const apiSlice = createApi({
  mode: "cors",
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.ultimate.systems/public/index.php/api/v1",
  }),
  tagTypes: ["EmployeesData", "Registration", "Refresh"],
  endpoints: (builder) => ({
    tokenRefresh: builder.mutation({
      query: (refresh) => ({
        url: "/auth/token/refresh",
        method: "POST",
        body: refresh,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      transformResponse: (response) => {
        Cookies.set("auth", response.token);
        Cookies.set("refresh", response.refresh_token);
      },
      providesTags: ["Refresh"]
    }),
    registerNew: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/login/check",
        method: "POST",
        body: user,
      }),
      transformResponse: (response) => {
        Cookies.set("auth", response.token);
        Cookies.set("refresh", response.refresh_token);
      },
    }),
    getEmployees: builder.query({
      query: () => ({
        url: "/auth/users",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${Cookies.get("auth")}`,
        },
        params: {
          page: 1,
          perPage: 5,
        },
      }),
      transformResponse: (response) => console.log(response),
      providesTags: ["Refresh"]
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useRegisterNewMutation,
  useLoginUserMutation,
  useTokenRefreshMutation,
} = apiSlice;
