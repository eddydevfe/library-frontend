import { createSlice } from '@reduxjs/toolkit'

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    setBooks(state, action) {
      return action.payload
    }
  }
})

export const { setBooks } = booksSlice.actions
export default booksSlice.reducer