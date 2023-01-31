import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/Navigation/Nav";

import "react-toastify/dist/ReactToastify.css";
function Root() {
    return (
        <>
            <header className="top">
                <Nav />
            </header>
            <ToastContainer />
            <main className="content">
                <div className="inner">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Root;
