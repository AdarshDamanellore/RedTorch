import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./mainLayout";
import NotFound from "./not_found";
import SignUpPage from "./pages/signUpPage";
// import FilterPage from "./pages/filterPage";
import Homepage from "./pages/homepage";
import OTPVerification from "./pages/otpVerification/otpVerification";
import ProductsPage from "./pages/productsPage";
import DealsPage from "./pages/dealsPage";
import ContactPage from "./pages/contactPage";

const AppRoutes = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/homepage",
          element: <Homepage />,
        },
        {
          path: "/otp",
          element: <OTPVerification />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        // {
        //   path: "/filter",
        //   element: <FilterPage />,
        // },
        {
          path: "/products",
          element: <ProductsPage />,
        },
        {
          path: "/deals",
          element: <DealsPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default AppRoutes;
