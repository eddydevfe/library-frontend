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
    }
  }
})

export const { setUser } = userReducer.actions

export const login = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    console.log(user)
    window.localStorage.setItem('userSession', JSON.stringify(user.token))
    dispatch(setUser(user))
  }
}

export default userReducer.reducer
