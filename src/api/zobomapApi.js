import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const zobomapApi = createApi({
  reducerPath: "zobomapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zobomap-dev.azurewebsites.net/v1/",
  }),
  endpoints: (build) => ({
    getNigeriaData: build.query({
      query: () => `nigeria`,
    }),
    postStateData: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ state }) => ({
        url: `nigeria/${state}`,
        method: "POST",
        body: { state },
      }),
    }),
    postLgaData: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ state, lga }) => ({
        url: `nigeria/${state}/${lga}`,
        method: "POST",
        body: { state, lga },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLazyGetNigeriaDataQuery,
  usePostStateDataMutation,
  usePostLgaDataMutation,
} = zobomapApi;
