import { Outlet } from "react-router-dom";
import Nav from "./components/navigation/nav";

function Root() {
    return (
        <>
            <header className="top">
                <Nav />
            </header>
            <main className="content">
                <div className="inner">
                    <Outlet />
                </div>
            </main>
        </>
    );
}

export default Root;
