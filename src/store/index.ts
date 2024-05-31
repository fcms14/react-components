import { configureStore } from '@reduxjs/toolkit'
import toasterReducer from '../features/toaster/toasterSlice'
import routesReducer from '../features/routes/routeSlice'
import alertReducer from '../features/alert/alertSlice'
import sensibleDataReducer from '../features/sensibleData/sensibleDataSlice'
import { AlertInterface, RoutesInterface, SensibleDataInterface, ToasterInterface } from '../interfaces';

interface Routes {
    routes: RoutesInterface[]
}

export interface RootState {
    toaster: ToasterInterface
    routes: Routes
    alert: AlertInterface
    sensibleData: SensibleDataInterface
}

export default configureStore({
    reducer: {
        toaster: toasterReducer,
        routes: routesReducer,
        alert: alertReducer,
        sensibleData: sensibleDataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})