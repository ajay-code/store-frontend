import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getHTMLReplacer } from "@/utils";
import { z } from "zod";
import { env } from "@/config";
import { toast } from "react-toastify";

const resetPasswordSchema = z.object({
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
});

function ResetPassword() {
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
    });
    const { token } = useParams();
    const navigate = useNavigate();
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetch(`${env.API_URL}/account/reset/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.status <= 300) {
            toast.success("Password successfully reset.");
            navigate("/login");
            return;
        }

        if (res.status >= 400) {
            const { error } = await res.json();
            toast.error(error.msg);
            console.log(error);
        }
    });
    return (
        <>
            <form className="form" method="POST" onSubmit={onSubmit}>
                <pre>{JSON.stringify(errors, getHTMLReplacer(), 2)}</pre>
                <h2>Reset Your Password</h2>
                <label htmlFor="password">Password</label>
                <input type="password" {...register("password")} />
                <label htmlFor="password-confirm">Confirm Password</label>
                <input type="password" {...register("confirmPassword")} />
                <input type="submit" value="Reset Password →" />
            </form>
        </>
    );
}

export default ResetPassword;
