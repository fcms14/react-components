import { AlertInterface } from '../../interfaces';
import { hideAlerts, setAlerts } from './alertSlice';
import store from '../../store';

const dispatchSetAlerts = (payload: AlertInterface) => {
    store.dispatch(setAlerts(payload))
}

const dispatchHideAlerts = () => {
    store.dispatch(hideAlerts())
}

export { dispatchSetAlerts, dispatchHideAlerts }