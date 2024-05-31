import { toggleVisibility } from './sensibleDataSlice';
import store from '../../store';

const dispatchVisibility = () => {
    store.dispatch(toggleVisibility())
}

export { dispatchVisibility }