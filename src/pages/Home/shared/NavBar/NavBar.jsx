
import { FiArrowRight, FiMenu } from "react-icons/fi";
import Logo from "../../../../components/Logo/Logo";
import { NavLink } from "react-router";

const navItems = [
    { name: "Services", path: "/services" },
    { name: "Coverage", path: "/coverage" },
    { name: "About Us", path: "/about_us" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
   
];

const NavBar = () => {
    return (
        <header className="sticky top-0 z-50 bg-transparent py-4">
            <div className="mx-auto max-w-7xl px-4">
                <div className="navbar rounded-full border border-white/20 bg-white/90 px-4 py-2 shadow-xl backdrop-blur-xl">

                    {/* Logo */}
                    <div className="navbar-start">
                        {/* Mobile Menu */}
                        <div className="dropdown lg:hidden">
                            <label
                                tabIndex={0}
                                className="btn btn-circle btn-ghost"
                            >
                                <FiMenu size={22} />
                            </label>

                            <ul
                                tabIndex={0}
                                className="menu dropdown-content mt-4 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl"
                            >
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <NavLink
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `rounded-xl py-3 font-medium transition-all ${isActive
                                                    ? "bg-primary text-white"
                                                    : "hover:bg-primary/10 hover:text-primary"
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Logo />
                    </div>

                    {/* Desktop Menu */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal gap-2 rounded-full bg-slate-100 p-2">

                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${isActive
                                                ? "bg-primary text-white shadow-lg"
                                                : "text-slate-700 hover:bg-primary/10 hover:text-primary"
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="navbar-end">
                        <button className="group btn rounded-full border-0 bg-primary px-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary">

                            <span className="hidden sm:block">
                                Book Delivery
                            </span>

                            <span className="sm:hidden">
                                Book
                            </span>

                            <span className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:rotate-45">
                                <FiArrowRight />
                            </span>

                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default NavBar;