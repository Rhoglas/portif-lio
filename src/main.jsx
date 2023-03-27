import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./sass/main.scss";

import App from "./App";
import Repos from "./components/routes/Repos";
import Followers from "./components/routes/Followers";
import Following from "./components/routes/Following";
import Success from "./components/routes/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/repo",
    element: <Repos />,
  },
  {
    path: "/followers",
    element: <Followers />,
  },
  {
    path: "/following",
    element: <Following />,
  },
]);

import { ContextProvider, SecondProvider } from "./context/ctxServer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <SecondProvider>
      <RouterProvider router={router} />
    </SecondProvider>
  </ContextProvider>
);
