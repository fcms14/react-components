import { createSlice } from '@reduxjs/toolkit'

export const routeSlice = createSlice({
    name: 'routes',
    initialState: {
        routes: [{
            path: "/",
            element: "Login",
        },
        {
            path: "/api-docs",
            element: "ApiDocs",
        },
        {
            path: "/testes",
            element: "Index",
        },
        {
            path: "*",
            element: "Login",
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

