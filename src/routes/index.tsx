import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Index from "../pages/Index";
import Exchange from "../pages/Exchange";
import Login from "../pages/Login";
import ApiDocs from "../pages/Docs";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    ErrorBoundary: Error
  },
  {
    path: "/testes",
    element: <Index />,
    ErrorBoundary: Error
  },
  {
    path: "/api-docs",
    element: <ApiDocs />,
    ErrorBoundary: Error
  },
  {
    path: "/exchange",
    element: <Exchange />,
    ErrorBoundary: Error
  },
  {
    path: "*",
    element: <Error />,
    ErrorBoundary: Error
  },
]);
