import { useAuthStore } from "@/store";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

function Logout() {
    const { logout } = useAuthStore((state) => ({ logout: state.logout }));
    const navigate = useNavigate();
    const { hash } = useLocation();

    useEffect(() => {
        fetch("api/logout", {
            method: "POST",
        }).then((res) => {
            logout();
            if (hash === "#401") {
                console.log("401 logout");
                navigate("/login");
            } else {
                console.log("normal logout");
                toast.success("You are now Logged Out");
                navigate("/");
            }
        });
    }, []);

    return <h2>Loading...</h2>;
}

export default Logout;
