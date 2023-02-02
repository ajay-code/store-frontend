import {
    createBrowserRouter,
    isRouteErrorResponse,
    useRouteError,
} from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoute";
import {
    getStores,
    getPaginatedStores,
    getTopStores,
    getStoresByTag,
    getStoreBySlug,
} from "./core/api";
import Account from "./pages/Account";
import ResetPassword from "./pages/Account/ResetPassword";
import AddStore from "./pages/Add";
import Hearts from "./pages/Hearts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Map from "./pages/Map";
import Register from "./pages/Register";
import Store from "./pages/Store";
import Stores from "./pages/Stores";
import Tags from "./pages/Tags";
import Top from "./pages/Top";
import Root from "./Root";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => getStores(),
            },
            {
                path: "/stores",
                element: <Stores />,
                loader: getPaginatedStores,
            },
            {
                path: "/store/:slug",
                element: <Store />,
                loader: getStoreBySlug,
            },
            {
                path: "/tags",
                element: <Tags />,
                loader: getStoresByTag,
            },
            {
                path: "/tags/:tag",
                element: <Tags />,
                loader: getStoresByTag,
            },
            {
                path: "/top",
                element: <Top />,
                loader: getTopStores,
            },

            {
                path: "/map",
                element: <Map />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/logout",
                element: <Logout />,
            },
            {
                path: "/account/reset/:token",
                element: <ResetPassword />,
            },
            {
                path: "/",
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "/add",
                        element: <AddStore />,
                    },
                    {
                        path: "/hearts",
                        element: <Hearts />,
                    },
                    {
                        path: "/account",
                        element: <Account />,
                    },
                ],
            },
        ],
    },
]);

function ErrorBoundary() {
    let error = useRouteError();
    let message = "something went wrong.";
    console.error(error);

    if (error instanceof Error) {
        message = error.message;
    } else if (isRouteErrorResponse(error)) {
        message = error.data;
    }

    return (
        <div className="main">
            <header>
                <Nav />
            </header>
            <main>
                <h1>{message}</h1>
            </main>
        </div>
    );
}
