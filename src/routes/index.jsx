import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Offers from "../pages/Offers/Offers";
import Signin from "../pages/Signin/Signin";
import Login from "../pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/offers",
        element: <Offers/>
    },
    {
        path: "/signin",
        element: <Signin/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path:"*",
        element: <div>Path not found</div>
    }
])