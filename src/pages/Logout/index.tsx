import { useAuthStore } from "@/store";
import { useEffect } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
    const { logout } = useAuthStore((state) => ({ logout: state.logout }));
    const navigate = useNavigate();
    useEffect(() => {
        fetch("api/logout", {
            method: "POST",
        }).then((res) => {
            logout();
            toast.success("You are now Logged Out");
            navigate("/");
        });
    }, []);

    return <h2>Loading...</h2>;
}

export default Logout;
