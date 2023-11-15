import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NavigationPage from "../pages/NavigationPage/Navigation";
import LayoutHomeProduct from "../Component/Layout/LayoutHomeProduct";

export const router = createBrowserRouter([
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element: <LayoutHomeProduct/>,
                children:[
                    {
                        path:'/',
                        element:<HomePage/>
                    },
                    {
                        path:'product',
                        element:<NavigationPage/>
                    }
                ]
            },
        ]
    }
])