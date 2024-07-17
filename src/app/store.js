import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import authReducer from '../features/auth/authSlice'
import booksReducer from '../features/books/booksSlice'

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    books: booksReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true // TODO: Switch to false in production.
})

export default store
