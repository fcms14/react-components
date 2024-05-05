import { configureStore } from '@reduxjs/toolkit'
import toasterReducer from '../features/toaster/toasterSlice'
import { ToasterInterface } from '../interfaces';

export interface RootState {
    toaster: ToasterInterface;
}

export default configureStore({
    reducer: {
        toaster: toasterReducer
    }
})