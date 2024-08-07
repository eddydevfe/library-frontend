import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
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
    }
  }
})

export const { setSidebar } = uiSlice.actions
export default uiSlice.reducer
