import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppProvider } from "./context/app";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";

const router = createBrowserRouter([...Routes]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
