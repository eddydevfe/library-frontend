import { apiSlice } from '../../app/api/apiSlice'
import { setCredentials, logOut } from './authSlice'

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // TODO: The setCredentials for the login maybe could be moved here.
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials }
      })
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(logOut())
          setTimeout(() => {
            // Clear cache and query subscriptions.
            dispatch(apiSlice.util.resetApiState())
          }, 1000)
        } catch (err) {
          console.log(err)
        }
      }
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/refresh',
        method: 'GET',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          const { accessToken } = data
          dispatch(setCredentials({ accessToken }))
        } catch (err) {
          console.log(err)
        }
      }
    }),
  })
})

/*
Instead of importing both the useDispatch and and the action creator, the mutations
can be be imported individually and used and they do everything as expected.
*/

export const {
  useLoginMutation,
  useSendLogoutMutation,
  useRefreshMutation
} = authApiSlice