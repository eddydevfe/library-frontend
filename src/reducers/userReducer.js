import { createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

const initialState = {
  token: null,
  username: null,
  name: null
}

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
    clearUser(state) {
      return initialState
    }
  }
})

export const { setUser, clearUser } = userReducer.actions

export const login = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    console.log(user)

    // Don't save token to the localStorage because it's not secure.
    // window.localStorage.setItem('userSession', JSON.stringify(user.token))
    dispatch(setUser(user))
  }
}

// How will I access the name and username of users...?

// export const checkUserSession = () => {
//   return dispatch => {
//     const userSession = window.localStorage.getItem('userSession')
//     if (userSession) {
//       const user = { token: JSON.parse(userSession) }
//       // dispatch(setUser(user))
//     } else {
//       // dispatch(clearUser())
//     }
//   }
// }

export default userReducer.reducer
