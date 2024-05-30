import { configureStore } from '@reduxjs/toolkit'
import toasterReducer from '../features/toaster/toasterSlice'
import routesReducer from '../features/routes/routeSlice'
import alertReducer from '../features/alert/alertSlice'
import { AlertInterface, RoutesInterface, ToasterInterface } from '../interfaces';

interface Routes {
    routes: RoutesInterface[]
}

export interface RootState {
    toaster: ToasterInterface
    routes: Routes
    alert: AlertInterface
}

export default configureStore({
    reducer: {
        toaster: toasterReducer,
        routes: routesReducer,
        alert: alertReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})