import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    const handleSingOut = () => {
        logoutUser()
            .then(() => {
                toast("user Logout successful");
            })
            .catch((err) => console.log(err));
    };

    const navLink = (
        <>
            <li>
                {" "}
                <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/top"}>Top Rated</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/kids"}>Kids wear</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/mens"}>MENS wear</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/women"}>WOMEN wear</NavLink>
            </li>
        </>
    );
    const profile = (
        <>
            <li>
                {" "}
                <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/user"}>USERS</NavLink>
            </li>
            <li>
                {" "}
                <NavLink to={"/addProduct"}>ADD PRODUCT</NavLink>
            </li>{" "}
        </>
    );

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLink}
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-xl">
                        ShopSy
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{navLink}</ul>
                </div>
                <div className="navbar-end ">
                    {/* mode */}
                    <label className="swap swap-rotate mr-2">
                        {/* this hidden checkbox controls the state */}
                        <input
                            onChange={handleToggle}
                            type="checkbox"
                            className="theme-controller"
                            value="synthwave"
                        />

                        {/* sun icon */}
                        <svg
                            className="swap-off fill-current w-7 h-10"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on fill-current w-7 h-10"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user ? (
                        <div>
                            <div className="drawer drawer-end z-50">
                                <input
                                    id="my-drawer-4"
                                    type="checkbox"
                                    className="drawer-toggle"
                                />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label
                                        htmlFor="my-drawer-4"
                                        className="drawer-button  "
                                    >
                                        <CgProfile className="text-3xl"></CgProfile>
                                    </label>
                                </div>
                                <div className="drawer-side">
                                    <label
                                        htmlFor="my-drawer-4"
                                        aria-label="close sidebar"
                                        className="drawer-overlay "
                                    ></label>
                                    <ul className="menu p-4 justify-between w-80 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        <div>
                                            {" "}
                                            <div className="m-4 mt-2 flex justify-between items-center">
                                                <CgProfile className="text-3xl"></CgProfile>
                                                <label
                                                    htmlFor="my-drawer-4"
                                                    aria-label="close sidebar"
                                                    className="drawer-overlay "
                                                >
                                                    <IoMdClose className="text-3xl cursor-pointer"></IoMdClose>
                                                </label>
                                            </div>
                                            {profile}
                                        </div>{" "}
                                        <button
                                            className="btn"
                                            onClick={handleSingOut}
                                        >
                                            SIGNOUT
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link className="btn" to={"/login"}>
                                SINGIN
                            </Link>
                            <Link className="btn" to={"/register"}>
                                SINGNUP
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
{
    /*  <div className="flex items-center ">
                            <details className="dropdown dropdown-end relative ">
                                <summary className="btn p-0 h-0 bg-white border shadow-white border-white hover:bg-white hover:border-white">
                                    <CgProfile className="text-3xl"></CgProfile>
                                </summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 h-[88vh] justify-between">
                                    <div className="h-[calc(100% - 100px)] gap-2 grid">
                                        {profile}
                                    </div>
                                    <button
                                        className="btn"
                                        onClick={handleSingOut}
                                    >
                                        SIGNOUT
                                    </button>
                                </ul>
                            </details>
                        </div> */
}
