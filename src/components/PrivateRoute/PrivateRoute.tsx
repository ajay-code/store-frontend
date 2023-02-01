import { env } from "@/config";
import { useAuthStore } from "@/store";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({ component: Component, ...rest }: any) {
    const { isLoggedIn } = useAuthStore();

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
