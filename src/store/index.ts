import { configureStore } from '@reduxjs/toolkit'
import toasterReducer from '../features/toaster/toasterSlice'

export default configureStore({
    reducer: {
        toaster: toasterReducer
    }
})