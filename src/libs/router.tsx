import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import RootLayout from "../components/layouts/layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);
export default router;
