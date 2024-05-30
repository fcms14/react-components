import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Exchange from "../pages/Exchange";
import ApiDocs from "../pages/ApiDocs";
import Error from "../pages/Error";
import { RoutesInterface } from "../interfaces";

const components = {
  SignIn,
  Dashboard,
  Exchange,
  ApiDocs,
  Error,
}

export type ElementType = keyof typeof components;

export const Routes = (allowedRoutes: RoutesInterface[]) => {
  const isElementType = (element: string): element is ElementType => element in components

  const routes = allowedRoutes.map((route: RoutesInterface) => {
    const Component = isElementType(route.element) ? components[route.element] : Error

    return {
      path: route.path,
      element: <Component />,
      ErrorBoundary: Error
    }
  })

  return createBrowserRouter(routes)
};
