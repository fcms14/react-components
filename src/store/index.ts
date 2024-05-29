import { configureStore } from '@reduxjs/toolkit'
import toasterReducer from '../features/toaster/toasterSlice'
import routesReducer from '../features/routes/routeSlice'
import { RoutesInterface, ToasterInterface } from '../interfaces';

interface Routes {
    routes: RoutesInterface[]
}

export interface RootState {
    toaster: ToasterInterface
    routes: Routes
}

export default configureStore({
    reducer: {
        toaster: toasterReducer,
        routes: routesReducer
    }
})