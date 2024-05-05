import { createSlice } from '@reduxjs/toolkit'

export const toasterSlice = createSlice({
    name: 'toaster',
    initialState: {
        show: false,
        timeoutId: 0,
        notifications: [{
            active: false,
            toasterStyle: { type: '' },
            subtitle: '',
            text: '',
            caption: '',
        }]
    },
    reducers: {
        showNotifications: (state) => {
            state.show = true
        },
        hideNotifications: (state) => {
            state.show = false
        },
        setTimeoutId: (state, action) => {
            state.timeoutId = action.payload
        },
        addNotification: (state, action) => {
            state.show = true;
            state.notifications.push(
                {
                    active: action.payload.active,
                    toasterStyle: { type: action.payload.toasterStyle.type },
                    subtitle: action.payload.subtitle,
                    text: action.payload.text,
                    caption: action.payload.caption,
                }
            )
        },
        removeNotification(state, action) {
            const indexToRemove = action.payload;
            state.notifications.splice(indexToRemove, 1);
            if (state.notifications.length === 1) {
                state.show = false
            }
        },
    },
})

export const { addNotification, removeNotification, showNotifications, hideNotifications, setTimeoutId } = toasterSlice.actions

export default toasterSlice.reducer

