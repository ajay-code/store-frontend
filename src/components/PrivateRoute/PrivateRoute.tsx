import { env } from "@/config";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ component: Component, ...rest }: any) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);

    const authenticate = async () => {
        const res = await fetch(`${env.API_URL}/me`);
        if (res.status < 400) {
            setIsAuthenticated(true);
        }

        setChecking(false);
    };
    useEffect(() => {
        authenticate();
    }, []);

    return checking ? (
        <h2>Checking</h2>
    ) : isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
}

export default PrivateRoutes;
