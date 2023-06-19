import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from 'src/App'
import RentFormPage from "src/pages/RentFormPage";
import ErrorPage from "./errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/alquiler/:id",
        element: <RentFormPage />,
        errorElement: <ErrorPage />
    },
]);


export default function BaseRouterProvider() {
    return <RouterProvider router={router} />;
}