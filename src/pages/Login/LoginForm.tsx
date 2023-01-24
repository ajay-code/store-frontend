import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { env } from "@/config";

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
});

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onLogin = handleSubmit(async (data) => {
        const res = await fetch(`${env.API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            console.log("success status:", res.status);
            const user = await res.json();
            console.log("welcome, ", user.name);
        } else {
            console.log("error status:", res.status);
        }
    });
    return (
        <form className="form" onSubmit={onLogin}>
            <h2>Login</h2>
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                {...register("email")}
                className={`${errors.email ? "input--error" : ""}`}
            />
            {errors.email && (
                <p className="error-message">
                    {errors.email.message as string}
                </p>
            )}
            <label htmlFor="password">Password</label>
            <input
                type="password"
                {...register("password")}
                className={`${errors.password ? "input--error" : ""}`}
            />
            {errors.password && (
                <p className="error-message">
                    {errors.password.message as string}
                </p>
            )}
            <input className="button" type="submit" defaultValue="Log In →" />
        </form>
    );
}

export default LoginForm;
