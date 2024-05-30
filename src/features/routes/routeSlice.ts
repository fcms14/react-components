import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'routes',
    initialState: {
        routes: [{
            path: "/",
            element: "SignIn",
        },
        {
            path: "/signup",
            element: "SignUp",
        },
        {
            path: "/dashboard",
            element: "Dashboard",
        },
        {
            path: "/api-docs",
            element: "ApiDocs",
        },
        {
            path: "*",
            element: "SignIn",
        }]
    },
    reducers: {
        setRoutes: (state, action) => {
            const unique = new Map();
            const routes = [...state.routes, ...action.payload]

            routes.forEach(route => { unique.set(route.path, route) })

            state.routes = Array.from(unique.values())
        },
    },
})

export const { setRoutes } = routeSlice.actions

export default routeSlice.reducer

