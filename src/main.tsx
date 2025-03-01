import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Layout from "./layout"
import AboutRoute from "./routes/about"
import HomeRoute from "./routes/home"
import Event from "./routes/event"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/about",
        element: <AboutRoute />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
