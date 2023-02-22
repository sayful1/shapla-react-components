import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import ButtonPage from "./components/ButtonPage";
import NotificationPage from "./components/NotificationPage";
import ModalPage from "./components/ModalPage";
import CheckboxPage from "./components/CheckboxPage";
import ChipPage from "./components/ChipPage";
import ColumnsPage from "./components/ColumnsPage";
import ConfirmPage from "./components/ConfirmPage";
import CrossPage from "./components/CrossPage";
import DropdownPage from "./components/DropdownPage";
import ProgressPage from "./components/ProgressPage";
import SidenavPage from "./components/SidenavPage";
import SpinnerPage from "./components/SpinnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "button", element: <ButtonPage /> },
      { path: "checkbox", element: <CheckboxPage /> },
      { path: "chip", element: <ChipPage /> },
      { path: "column", element: <ColumnsPage /> },
      { path: "confirm", element: <ConfirmPage /> },
      { path: "cross", element: <CrossPage /> },
      { path: "dropdown", element: <DropdownPage /> },
      { path: "modal", element: <ModalPage /> },
      { path: "notification", element: <NotificationPage /> },
      { path: "progress", element: <ProgressPage /> },
      { path: "sidenav", element: <SidenavPage /> },
      { path: "spinner", element: <SpinnerPage /> }
    ]
  }
]);

export default router;