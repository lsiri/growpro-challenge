import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./errorPage";
import App from 'src/App'
import RentFormPage from "src/pages/RentFormPage";
import SuccessPage from 'src/pages/SuccessPage';
import DetallesPage from 'src/pages/DetallesPage';

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
    {
        path: "/success",
        element: <SuccessPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/detalles",
        element: <DetallesPage />,
        errorElement: <ErrorPage />
    },
]);


export default function BaseRouterProvider() {
    return <RouterProvider router={router} />;
}