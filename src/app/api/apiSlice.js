import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
  /*
  In production the frontend will be built and hosted along with the backend
  so this should be a relative path to the backend itself. That is "/api".
  */
  baseUrl: 'http://localhost:5173/api', // TODO: Change this when in production.
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  /*
  This is meant to get a new accessToken by sending the refreshToken which
  is a cookie if the current one if expired (403 is sent from the backend).
  */
  if (result?.meta?.response.status === 403) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    if (refreshResult?.data) {
      const user = api.getState().auth.user
      api.dispatch(setCredentials({ ...refreshResult.data, user }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})