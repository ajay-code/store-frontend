import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
    confirmPassword: z.string().min(3),
});

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <form className="form" onSubmit={onSubmit}>
            <h2>Register</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                {...register("name")}
                className={`${errors.name ? "input--error" : ""}`}
            />
            {errors.name && (
                <p className="error-message">{errors.name.message as string}</p>
            )}
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password-confirm">Confirm Password</label>
            <input
                type="password"
                {...register("confirmPassword")}
                className={`${errors.confirmPassword ? "input--error" : ""}`}
            />
            {errors.confirmPassword && (
                <p className="error-message">
                    {errors.confirmPassword.message as string}
                </p>
            )}
            <input className="button" type="submit" defaultValue="Register →" />
        </form>
    );
}

export default Register;
