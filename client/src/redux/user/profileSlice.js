import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentProfile: null,
  defaultUserPage: true,
  error: false,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileDefaultPage: (state, action) => {
      state.currentProfile = action.payload
      state.defaultUserPage = true
      state.error = false
    },
    profileUpdatePage: (state, action) => {
      state.currentProfile = action.payload
      state.defaultUserPage = false
      state.error = false
    },
  },
})

export const { profileDefaultPage, profileUpdatePage } = profileSlice.actions

export default profileSlice.reducer
