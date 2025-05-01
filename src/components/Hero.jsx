import React, { useState } from "react";

import "tailwindcss/tailwind.css";
import "flowbite"; 

const Hero = () => {
    // State to track the visibility of the details
    const [showDetails, setShowDetails] = useState(false);
    const [showDetails1, setShowDetails1] = useState(false);

    const toggleDetails = () => {
        if (showDetails1) {
            setShowDetails1(false);
        }
        setShowDetails(!showDetails);
    };

    const toggleDetails1 = () => {
        if (showDetails) {
            setShowDetails(false);
        }
        setShowDetails1(!showDetails1);
    }

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-900 pt-20"
        >

            {/* Name */}
            <h1
                className="text-4xl md:text-6xl font-extrabold text-white mb-4 relative z-10"
            >
                Robert A. Grijalva
            </h1>

            {/* Subtitle */}
            <h2
                className="text-xl md:text-2xl text-gray-400 mb-6 relative z-10"
            >
                Backend Developer | React & .NET Enthusiast
            </h2>

            {/* Buttons */}
            <div className="flex space-x-4 mb-8 relative z-10">
                <a
                    href="#projects"
                    onClick={toggleDetails} // Trigger details on click
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    onClick={toggleDetails1} // Trigger details on click
                    className="relative z-10 border border-white hover:bg-white hover:text-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-all"
                >
                    Contact Me
                </a>
            </div>

            {showDetails && (
                <div className="relative z-10 transform transition-all duration-700 ease-out opacity-100 translate-y-0 max-w-xl text-gray-300">
                    <p className="mb-6">
                        Projects I have worked on include:
                    </p>
                    <ul className="list-disc pl-6">
                        
                    </ul>
                </div>
            )}
            {showDetails1 && (
                <div className="relative z-10 transform transition-all duration-700 ease-out opacity-100 translate-y-0 max-w-xl text-gray-300">
                    <p className="mb-6">
                        You can contact me via:
                    </p>
                    <ul className="list-disc pl-6">
                        
                    </ul>
                </div>
            )}

        </section>
    );
};

export default Hero;
