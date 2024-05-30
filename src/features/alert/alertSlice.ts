import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: {
    show: false,
    title: '',
    text: '',
    buttons: [
      {
        text: '',
        onClick: undefined,
        buttonStyle: {
          type: 'button',
          active: true,
          secondary: true,
          isLoading: false,
          color: '',
        }
      }
    ],
  },
  reducers: {
    setAlerts: (state, action) => {
      state.show = action.payload.show
      state.title = action.payload.title
      state.text = action.payload.text
      state.buttons = action.payload.buttons
    },
    hideAlerts: (state) => {
      state.show = false
      state.title = ''
      state.text = ''
      state.buttons = []
    }
  },
})

export const { setAlerts, hideAlerts } = alertSlice.actions

export default alertSlice.reducer

