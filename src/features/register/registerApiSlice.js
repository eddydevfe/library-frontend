import { apiSlice } from '../../app/api/apiSlice'

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: '/register',
        method: 'POST',
        body: credentials,
      }),
    })
  })
})

export const {
  useRegisterUserMutation
} = registerApiSlice
