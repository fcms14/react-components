import { NotificationInterface } from '../../interfaces';
import { addNotification, hideNotifications, removeNotification, setTimeoutId, showNotifications } from './toasterSlice';
import store from '../../store';

const dispatchAddNotification = (payload: NotificationInterface, delay?: number) => {
    const state = store.getState().toaster
    console.log(state)
    if (!state.show) {
        const timeout = setTimeout(() => {
            store.dispatch(hideNotifications())
        }, delay || 3000)

        store.dispatch(setTimeoutId(timeout))
    }
    if (state.show) {
        clearTimeout(state.timeoutId);
    }
    store.dispatch(addNotification(payload))
}

const dispatchRemoveNotification = (index: number) => {
    store.dispatch(removeNotification(index))
}

const dispatchShowNotifications = () => {
    store.dispatch(showNotifications())
}

const dispatchHideNotifications = () => {
    store.dispatch(hideNotifications())
}

export { dispatchAddNotification, dispatchRemoveNotification, dispatchShowNotifications, dispatchHideNotifications }