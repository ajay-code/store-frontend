import { useState } from "react";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

function Login() {
    return (
        <>
            <LoginForm />
            <ForgotPasswordForm />
        </>
    );
}

export default Login;
