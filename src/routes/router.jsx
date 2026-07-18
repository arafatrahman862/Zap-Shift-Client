import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Covarage from "../pages/Coverage/Covarage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'coverage',
                Component: Covarage,
                loader: () => fetch('/serviceCenter.json').then((res) => res.json())
            }
           
        ]
    },
]);