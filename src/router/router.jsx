import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NavigationPage from "../pages/NavigationPage/Navigation";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element: <HomePage/>
            },
            {
                path:'categories',
                element:<NavigationPage/>
            }
        ]
    }
])