/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import { ReactComponent as Tag } from "@/assets/icons/tag.svg";
import { ReactComponent as Add } from "@/assets/icons/add.svg";
import { ReactComponent as Map } from "@/assets/icons/map.svg";
import { ReactComponent as Store } from "@/assets/icons/store.svg";
import { ReactComponent as Top } from "@/assets/icons/top.svg";
import { Link, useLocation } from "react-router-dom";

function Nav() {
    const location = useLocation();

    const links = [
        { to: "/stores", text: "Stores", icon: <Store /> },
        { to: "/tags", text: "Tags", icon: <Tag /> },
        { to: "/top", text: "Top", icon: <Top /> },
        { to: "/add", text: "Add", icon: <Add /> },
        { to: "/map", text: "Map", icon: <Map /> },
    ];
    return (
        <nav className="nav">
            <div className="nav__section nav__section--pages">
                <li className="nav__item">
                    <Link className="nav__link nav__link--logo" to="/">
                        <Logo />
                    </Link>
                </li>
                {links.map((link) => (
                    <li className="nav__item" key={link.to}>
                        <Link
                            className={`nav__link ${
                                location.pathname === link.to
                                    ? "nav__link--active"
                                    : ""
                            }`}
                            to={link.to}
                        >
                            {link.icon}
                            <span>{link.text}</span>
                        </Link>
                    </li>
                ))}
            </div>
            <div className="nav__section nav__section--search">
                <div className="search">
                    <input
                        className="search__input"
                        type="text"
                        placeholder="Coffee, beer..."
                        name="search"
                    />
                    <div className="search__results"></div>
                </div>
            </div>
            <div className="nav__section nav__section--user">
                <li className="nav__item">
                    <Link
                        className={`nav__link ${
                            location.pathname === "/register"
                                ? "nav__link--active"
                                : ""
                        }`}
                        to="/register"
                    >
                        Register
                    </Link>
                </li>
                <li className="nav__item">
                    <Link
                        className={`nav__link ${
                            location.pathname === "/login"
                                ? "nav__link--active"
                                : ""
                        }`}
                        to="/login"
                    >
                        Log In
                    </Link>
                </li>
            </div>
        </nav>
    );
}

export default Nav;
