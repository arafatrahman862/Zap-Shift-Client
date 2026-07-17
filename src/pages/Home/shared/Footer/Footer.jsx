import {
    FaFacebookF,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";
import Logo from "../../../../components/Logo/Logo";

const Footer = () => {
    const navLinks = [
        "Services",
        "Coverage",
        "About Us",
        "Pricing",
        "Blog",
        "Contact",
    ];

    return (
        <footer className="bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 items-center justify-center">

                {/* Logo & Description */}
                <div className="mx-auto max-w-2xl text-center items-center rounded-lg p-6">
                    <Logo/>

                    <p className="mt-4 text-sm leading-7 text-gray-400">
                        Enjoy fast, reliable parcel delivery with real-time
                        tracking and zero hassle. From personal packages to
                        business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Divider */}
                <div className="my-8 "></div>

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-sm text-gray-300 transition duration-300 hover:text-primary"
                        >
                            {link}
                        </a>
                    ))}
                </nav>

                {/* Divider */}
                <div className="my-8 "></div>

                {/* Social Icons */}
                <div className="flex justify-center gap-4">
                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-110"
                    >
                        <FaLinkedinIn size={18} />
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition hover:scale-110"
                    >
                        <FaXTwitter size={16} />
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] transition hover:scale-110"
                    >
                        <FaFacebookF size={16} />
                    </a>

                    <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF0000] transition hover:scale-110"
                    >
                        <FaYoutube size={18} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="mt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} ZepShift. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;