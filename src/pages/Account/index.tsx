import { apiFetch } from "@/core/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();
    const [user, setUser] = useState<{
        id: number;
        email: string;
        name: string;
    }>();

    const fetchUser = async () => {
        const res = await apiFetch(navigate, "/me");
        const user = await res.json();
        setUser(user);
    };
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            {user ? (
                <pre>{JSON.stringify(user, null, 2)}</pre>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
}

export default Account;
