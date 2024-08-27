// services/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const blogApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://a2sv-backend.onrender.com" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/api/blogs",
    }),
    getBlogById: builder.query({
      query: (id: number) => `/api/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetBlogByIdQuery } = blogApi;
export default blogApi;
