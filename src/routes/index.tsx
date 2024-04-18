import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Index from "../pages/Index";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    ErrorBoundary: Error
  },
  {
    path: "*",
    element: <Error />,
    ErrorBoundary: Error
  },
]);
