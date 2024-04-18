import './assets/css/index.css'
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import { Routes } from './routes'
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        /Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(() => {
            if (!pageYOffset) window.scrollTo(0, 1);
        }, 1000);
    }, [])

    return (
        <RouterProvider router={Routes} />
    )
}

export default App;
