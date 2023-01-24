import {
    createBrowserRouter,
    isRouteErrorResponse,
    useRouteError,
} from "react-router-dom";
import Nav from "./components/navigation/nav";
import { getStores } from "./core/api";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Register from "./pages/Register";
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
                loader: getStores,
            },
            {
                path: "/stores",
                element: <Stores />,
            },
            {
                path: "/tags",
                element: <Tags />,
            },
            {
                path: "/top",
                element: <Top />,
            },
            {
                path: "/add",
                element: <Add />,
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
