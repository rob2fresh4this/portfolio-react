import React from "react";
import 'tailwindcss/tailwind.css';
import 'flowbite';

const Navbar = ({ setNavButton }) => {
    return (
        <nav className="w-full fixed top-0 z-50 bg-gray-950 bg-opacity-90 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo / Name */}
                <div className="text-2xl font-bold text-white tracking-wide">
                    Robert A. Grijalva
                </div>

                {/* Navigation Links */}
                <div className="space-x-6 hidden md:flex">
                    <a href="#about" className="text-gray-300 hover:text-white transition">
                        About
                    </a>
                    <a href="#skills" className="text-gray-300 hover:text-white transition">
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="text-gray-300 hover:text-white transition"
                        onClick={() => setNavButton("projects")}
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-300 hover:text-white transition"
                        onClick={() => setNavButton("contact")}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;