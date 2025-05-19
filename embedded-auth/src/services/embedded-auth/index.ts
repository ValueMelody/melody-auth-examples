import {
  createApi, fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8787',
  prepareHeaders: async (
    headers,
  ) => {
    return headers
  },
})

export const embeddedAuthApi = createApi({
  reducerPath: 'embeddedAuthApi',
  baseQuery,
  endpoints: () => ({}),
})
