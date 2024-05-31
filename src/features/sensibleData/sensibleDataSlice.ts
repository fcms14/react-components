import { createSlice } from '@reduxjs/toolkit'

export const sensibleDataSlice = createSlice({
  name: 'sensibleData',
  initialState: {
    show: false,
  },
  reducers: {
    toggleVisibility: (state) => {
      state.show = !state.show
    },
  },
})

export const { toggleVisibility } = sensibleDataSlice.actions

export default sensibleDataSlice.reducer

