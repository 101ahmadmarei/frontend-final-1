import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NavigationPage from "../pages/NavigationPage/Navigation";
import LayoutHomeProduct from "../Component/Layout/LayoutHomeProduct";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <LayoutHomeProduct />,
                children: [
                    {
                        path: '/',
                        element: <HomePage />
                    },
                    {
                        path: 'products',
                        element: <NavigationPage />
                    }
                ]
            },

            {
                path: '/productdetails/:id',
                element: <DetailsPage />



            },
        ]
    }
])