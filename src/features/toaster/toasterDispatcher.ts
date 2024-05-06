import { NotificationInterface } from '../../interfaces';
import { addNotification, hideNotifications, removeNotification, setTimeoutId, showNotifications } from './toasterSlice';
import store from '../../store';

const dispatchAddNotification = (payload: NotificationInterface, delay?: number) => {
    const { show, timeoutId } = store.getState().toaster

    if (!show) {
        const timeout = setTimeout(() => {
            store.dispatch(hideNotifications())
        }, delay || 3000)

        store.dispatch(setTimeoutId(timeout))
    }

    if (show) {
        clearTimeout(timeoutId);
    }

    store.dispatch(addNotification(payload))
}

const dispatchRemoveNotification = (index: number) => {
    store.dispatch(removeNotification(index))
}

const dispatchShowNotifications = () => {
    const { timeoutId } = store.getState().toaster

    clearTimeout(timeoutId);
    store.dispatch(showNotifications())
}

const dispatchHideNotifications = () => {
    const timeout = setTimeout(() => {
        store.dispatch(hideNotifications())
    }, 1000)

    store.dispatch(setTimeoutId(timeout))
}

const dispatchCloseNotifications = () => {
    store.dispatch(hideNotifications())
}

export { dispatchAddNotification, dispatchRemoveNotification, dispatchShowNotifications, dispatchHideNotifications, dispatchCloseNotifications }