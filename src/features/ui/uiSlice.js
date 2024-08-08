import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
  bookViewMode: 'ALL'
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSidebar(state, action) {
      if (typeof action.payload === 'boolean') {
        state.isSidebarOpen = action.payload
      } else {
        state.isSidebarOpen = !state.isSidebarOpen
      }
    },
    setBookViewMode(state, action) {
      state.bookViewMode === action.payload
    }
  }
})

export const { setSidebar, setBookViewMode } = uiSlice.actions
export default uiSlice.reducer
