import React, { useEffect, useState } from "react";
import asabaharumasazzz from "../assets/asaba-harumasa-zzz.mp4";
import "tailwindcss/tailwind.css";
import "flowbite";
import TypewriterEffect from "./aceternity-components/Typewriter-Effect";



const Hero = ({ navButton }) => {
    const [showDetails, setShowDetails] = useState(false);// projects
    const [showDetails1, setShowDetails1] = useState(false);// contact
    const [nameDone, setNameDone] = useState(false); // State to track if the name has finished typing

    useEffect(() => {
        if (navButton === "projects") {
            toggleDetails();
        } else if (navButton === "contact") {
            toggleDetails1();
        }
    }, [navButton]);

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

    const handleNameComplete = () => {
        setNameDone(true); // Set the state to true when name is done typing
    };


    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#585754] pt-20"
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-left z-0"
            >
                <source src={asabaharumasazzz} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Name */}
            <TypewriterEffect
                text="Robert A. Grijalva"
                speed={100}
                className="text-4xl md:text-6xl font-extrabold text-white mb-4 relative z-10"
                onComplete={handleNameComplete} // Pass the callback to be called when typing finishes
            />

            {nameDone && (
                <h2 className="text-xl md:text-2xl text-[white] text-outline-thicc mb-6 relative z-10">
                    {/* <span className="shadow-2xl">Backend Developer</span> |
                    <span className="shadow-2xl">React & .NET Enthusiast</span> */}
                    <TypewriterEffect
                        text="Backend Developer | React & .NET Enthusiast"
                        speed={100}
                        className="text-xl md:text-2xl text-[white] text-outline-thicc mb-6 relative z-10"
                    />
                </h2>
            )}

            {/* Buttons */}
            <div className="flex space-x-4 mb-8 relative z-10">
                <a
                    
                    href="#projects"
                    className="bg-[#e5be41] hover:bg-[#B59422] text-white font-medium py-2 px-4 rounded-lg transition-all"
                    onClick={toggleDetails}
                >
                    View Projects
                </a>
                <a
                    
                    href="#contact"
                    className="relative z-10 borde bg-[#6b6c6b] hover:bg-[#565551] md:border-white md:hover:bg-white hover:text-gray-900 text-white font-medium py-2 px-4 rounded-lg transition-all"
                    onClick={toggleDetails1}
                >
                    Contact Me
                </a>
            </div>

            <div className="relative w-[90%] md:w-[40%] min-h-[150px]">
                {/* Projects */}
                <div
                    className={`absolute inset-0 transition-all duration-700 ease-out
                    ${showDetails ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
                >
                    <p className="mb-6 text-gray-100 font-bold text-outline md:text-no-outline">Projects I have worked on include:</p>
                    <ul className="list-disc pl-6 text-gray-50 space-y-2 text-outline md:text-no-outline">
                        <p className="font-bold">Study Buddys: <a href="https://github.com/davidmonterrosa/study-buddies-frontend" target="_blank" className="text-[#e8bf40] font-normal hover:font-bold">frontend</a></p>
                        <p className="font-bold">Study Buddys: <a href="https://github.com/rob2fresh4this/study-buddys-backend-v2" target="_blank" className="text-[#e8bf40] font-normal hover:font-bold">backend</a></p>
                        <p className="font-bold">Pokemon Next App: <a href="https://github.com/rob2fresh4this/pokemon-api-next-rebuild" target="_blank" className="text-[#e8bf40] font-normal hover:font-bold">frontend</a></p>
                    </ul>
                </div>

                {/* Contact */}
                <div
                    
                    className={`absolute inset-0 transition-all duration-700 ease-out delay-200
                    ${showDetails1 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
                `}
                >
                    <p className="mb-6 text-gray-100 font-bold text-outline md:text-no-outline">You can contact me via:</p>
                    <ul className="list-disc pl-6 text-gray-50 space-y-2 text-outline md:text-no-outline">
                        <p className="font-bold">Email: <a href="mailto:grijrob07@gmail.com" className="font-normal text-[#e8bf40] hover:font-bold">My Email</a></p>
                        <p className="font-bold">GitHub: <a href="https://github.com/rob2fresh4this" target="_blank" className="font-normal text-[#e8bf40] hover:font-bold">My Github</a></p>
                        <p className="font-bold">Phone: <a href="tel:2095945363" className="font-normal text-[#e8bf40] hover:font-bold">My Phone</a></p>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;