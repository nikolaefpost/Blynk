import React from "react";
import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from "./error-page";
import { Layout, Home} from "./pages";

export const router = createBrowserRouter([
    {
        element: <Layout  />,
        children: [
            {
                path: "",
                element: <Home  />,
                errorElement: <ErrorPage />,
            },
        ],

    },
]);