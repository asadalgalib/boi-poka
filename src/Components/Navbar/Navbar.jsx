import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className=""><NavLink to= '/listedbooks'>Listed Books</NavLink></li>
        <li className=""><NavLink>Pages To Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 space-y-2 w-52 p-2 flex flex-col items-start justify-center px-4 ">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost font-semibold text-2xl">Boi Poka</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center justify-center gap-5 px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Log In</a>
            </div>
        </div>
    );
};

export default Navbar;