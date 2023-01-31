/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import { ReactComponent as Tag } from "@/assets/icons/tag.svg";
import { ReactComponent as Add } from "@/assets/icons/add.svg";
import { ReactComponent as Map } from "@/assets/icons/map.svg";
import { ReactComponent as Store } from "@/assets/icons/store.svg";
import { ReactComponent as Top } from "@/assets/icons/top.svg";
import { ReactComponent as LogoutIcon } from "@/assets/icons/logout.svg";
import { ReactComponent as HeartIcon } from "@/assets/icons/heart.svg";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store";
import { getGravatar } from "@/pages/Store/getGravatar";

function Nav() {
    const location = useLocation();
    const { isLoggedIn, user } = useAuthStore((state) => ({
        isLoggedIn: state.isLoggedIn,
        user: state.user,
    }));

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
                {isLoggedIn ? (
                    <>
                        <li className="nav__item">
                            <Link
                                className={`nav__link ${
                                    location.pathname === "/logout"
                                        ? "nav__link--active"
                                        : ""
                                }`}
                                to="/hearts"
                            >
                                <HeartIcon />2
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className={`nav__link ${
                                    location.pathname === "/logout"
                                        ? "nav__link--active"
                                        : ""
                                }`}
                                to="/logout"
                            >
                                <LogoutIcon />
                                Logout
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                className={`nav__link ${
                                    location.pathname === "/account"
                                        ? "nav__link--active"
                                        : ""
                                }`}
                                to="/account"
                            >
                                <img
                                    className="avatar"
                                    src={getGravatar(user.email)}
                                    alt={user.name}
                                />
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </nav>
    );
}

export default Nav;
