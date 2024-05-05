import './assets/css/index.css'
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Notification from './components/atoms/Notification';
import { Toaster } from './components/organisms/Toaster';
import { RootState } from './store';

const App = () => {
    const toaster = useSelector((state: RootState) => state.toaster);
    const notifications = toaster.notifications.slice(1)

    useEffect(() => {
        /Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(() => {
            if (!pageYOffset) window.scrollTo(0, 1);
        }, 1000);
    }, [])

    return (
        <>
            {notifications.length > 0 && <Notification />}
            {toaster.show && <Toaster.List data={notifications} />}
            <RouterProvider router={Routes} />
        </>
    )
}

export default App;
