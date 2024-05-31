import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'routes',
    initialState: {
        routes: [{
            path: "/",
            element: "SignIn",
            label: "",
            show: false,
        },
        {
            path: "/signup",
            element: "SignUp",
            label: "",
            show: false,
        },
        {
            path: "/dashboard",
            element: "Dashboard",
            label: "Início",
            show: true,
        },
        {
            path: "/api-docs",
            element: "ApiDocs",
            label: "",
            show: false,
        },
        {
            path: "*",
            element: "SignIn",
            label: "",
            show: false,
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

