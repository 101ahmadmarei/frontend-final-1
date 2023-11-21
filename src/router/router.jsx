import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import NavigationPage from "../pages/NavigationPage/Navigation";
import LayoutHomeProduct from "../Component/Layout/LayoutHomeProduct";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import LoginPage, { loginLoader } from "../pages/loginPage/LoginPage";
import { LayoutAuth, authLoader } from "../Component/Layout/LayoutAuth";
import CheckOutPage from "../pages/checkOutPage/checkOutPage";
import MycartPage from "../pages/myCartPage/mycartPage";
import PersonalPage from "../pages/PersonalPage/PersonalPage";
import MyOrdersPage from "../pages/myOrdersPage/MyOrdersPage";

export const router = createBrowserRouter([
    {
        //homePage layout
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
            //product details
            {
                path: '/productdetails/:id',
                element: <DetailsPage />
            },
            //auth layout
            {
                path: '/',
                element: <LayoutAuth/>,
                loader: authLoader,
                children: [
                    {
                        path:'checkout',
                        element: <CheckOutPage/>
                    },
                    {
                        path:'myCart',
                        element: <MycartPage/>
                    }, 
                    {
                        path:'personalInformation',
                        element: <PersonalPage/>
                    },
                    {
                        path:'myOrders',
                        element: <MyOrdersPage/>
                    }
                ]
            },
            // login
            {
                path: '/login',
                loader:loginLoader,
                element: <LoginPage />
            },
        ]
    }
])