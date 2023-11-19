import { Link } from "react-router-dom";

const Header = () => {
    // nav menu options
    const menu = (
        <>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link>CONTACT US</Link>
            </li>
            <li>
                <Link>DASHBOARD</Link>
            </li>
            <li>
                <Link to="/menu">OUR MENU</Link>
            </li>
            <li>
                <Link>OUR SHOP</Link>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black lg:text-white max-w-screen-xl mx-auto">
                {/* logo and hamberger icon section */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
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
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 rounded-none"
                        >
                            {menu}
                        </ul>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-Cinzel font-extrabold">BISTRO BOSS</p>
                        <span className="font-Cinzel text-xl tracking-widest">
                            Restaurant
                        </span>
                    </div>
                </div>
                {/* desktop menu section */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menu}</ul>
                </div>
                {/* cart and login options */}
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Header;
