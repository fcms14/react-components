import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Index from "../pages/Index";
import Exchange from "../pages/Exchange";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
