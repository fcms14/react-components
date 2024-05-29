import './assets/css/index.css'
import { RouterProvider } from 'react-router-dom';
import { Routes } from './routes'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import Notification from './components/atoms/Notification';
import Toaster from './components/atoms/Toaster';
import { RootState } from './store';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
    const routes = useSelector((state: RootState) => state.routes);
    const toaster = useSelector((state: RootState) => state.toaster);
    const notifications = toaster.notifications.slice(1)

    useEffect(() => {
        /Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(() => {
            if (!pageYOffset) window.scrollTo(0, 1);
        }, 1000);
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            {notifications.length > 0 && <Notification />}
            {toaster.show && <Toaster data={notifications} />}
            <RouterProvider router={Routes(routes.routes)} />
        </QueryClientProvider>
    )
}

export default App;
