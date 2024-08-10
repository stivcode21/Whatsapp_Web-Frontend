import { lazy } from "react";
import Auth from "./pages/Auth/Auth";

const Login = lazy(() => import("./pages/Login/Login"))
const Profile = lazy(() => import( "./pages/Profile/Profile"))
const Main = lazy(() => import("./pages/Main/Main"))
const Settings = lazy(() => import("./pages/Settings/Settings"))
const Chats = lazy(() => import("./pages/Chats/Chats"))
const States = lazy(() => import("./pages/States/States"))
const CreateProfile = lazy(() => import("./pages/CreateProfile/CreateProfile"))
import Contacts from "./pages/Contacts/Contacts";

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <Main />,
        children: [
          {
            path: "",
            element: <Chats />
          },
          {
            path: "states",
            element: <States />
          },
          {
            path: "contacts",
            element: <Contacts />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "profile",
            element: <Profile />
          }
        ]
      },
      {
        path: "create-profile",
        element: <CreateProfile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
])

export default function App() {  
  return <RouterProvider router={router}/>
}