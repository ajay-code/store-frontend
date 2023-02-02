import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { env } from "@/config";
import { toast } from "react-toastify";

const forgotSchema = z.object({
    email: z.string().email(),
});

function ForgotPasswordForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(forgotSchema),
    });

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const res = await fetch(`${env.API_URL}/account/forgot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (res.status >= 400) {
            console.error(res);
            const { error } = await res.json();
            toast.error(error.msg);
            return;
        } else if (res.status <= 300) {
            toast("You have been emailed a password reset link.");
            reset();
        }
    });

    return (
        <form className="form" onSubmit={onSubmit}>
            <h2>I forgot my password!</h2>
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
            <input
                className="button"
                type="submit"
                defaultValue="Send a Reset"
            />
        </form>
    );
}

export default ForgotPasswordForm;
