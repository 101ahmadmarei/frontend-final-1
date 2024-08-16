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
import LayoutProfile from "../Component/Layout/LayoutProfile";
import OrderPage from "../pages/OrderPage/OrderPage";

export const router = createBrowserRouter([
  {
    //homePage layout
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LayoutHomeProduct />,
        children: [
          {
            path: "/",
            element: <NavigationPage />,
          },
          {
            path: "products",
            element: <NavigationPage />,
          },
        ],
      },
      //product details
      {
        path: "/productdetails/:id",
        element: <DetailsPage />,
      },
      //auth layout
      {
        path: "/",
        element: <LayoutAuth />,
        loader: authLoader,
        children: [
          {
            path: "checkout",
            element: <CheckOutPage />,
          },
          {
            path: "myCart",
            element: <MycartPage />,
          },
          {
            path: "/",
            element: <LayoutProfile />,
            children: [
              {
                path: "personalInformation",
                element: <PersonalPage />,
              },
              {
                path: "personalInformation/myOrders",
                element: <MyOrdersPage />,
              },
              {
                path: "personalInformation/order/:orderId",
                element: <OrderPage />,
              },
            ],
          },
        ],
      },
      // login
      {
        path: "/login",
        loader: loginLoader,
        element: <LoginPage />,
      },
    ],
  },
]);
