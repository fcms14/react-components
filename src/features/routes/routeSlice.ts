import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'routes',
    initialState: {
        routes: [{
            path: "/",
            element: "SignIn",
            label: "SigIn",
            show: false,
        },
        {
            path: "/signup",
            element: "SignUp",
            label: "SigUp",
            show: false,
        },
        {
            path: "/api-docs",
            element: "ApiDocs",
            label: "ApiDocs",
            show: false,
        },
        {
            path: "*",
            element: "SignIn",
            label: "404",
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

