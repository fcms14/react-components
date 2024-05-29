import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Index from "../pages/Index";
import Exchange from "../pages/Exchange";
import Login from "../pages/Login";
import ApiDocs from "../pages/Docs";
import { RoutesInterface } from "../interfaces";

const components = {
  Exchange,
  Error,
  Login,
  ApiDocs,
  Index
}

export type ElementType = keyof typeof components;

export const Routes = (allowedRoutes: RoutesInterface[]) => {
  const routes = allowedRoutes.map((route: RoutesInterface) => {
    const Component = components[route.element ?? "Error"]

    return {
      path: route.path,
      element: <Component />,
      ErrorBoundary: Error
    }
  })

  return createBrowserRouter(routes)
};
