import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Exchange from "../pages/Exchange";
import ApiDocs from "../pages/ApiDocs";
import Error from "../pages/Error";
import { RoutesInterface } from "../interfaces";
import SignUp from "../pages/SignUp";
import Menu from "../pages/Menu";

const components = {
  SignIn,
  SignUp,
  Dashboard,
  Exchange,
  ApiDocs,
  Error,
  Menu
}

export type ElementType = keyof typeof components;

export const Routes = (allowedRoutes: RoutesInterface[]) => {
  const routes = allowedRoutes.map((route: RoutesInterface) => {
    const Component = components[route.element]

    return {
      path: route.path,
      element: <Component />,
      ErrorBoundary: Error
    }
  })

  return createBrowserRouter(routes)
};
