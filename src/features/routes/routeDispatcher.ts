import { RoutesInterface } from '../../interfaces';
import { setRoutes } from './routeSlice';
import store from '../../store';

const dispatchSetRoutes = (payload: RoutesInterface[]) => {
    store.dispatch(setRoutes(payload))
}

export { dispatchSetRoutes }