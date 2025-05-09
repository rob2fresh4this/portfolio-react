import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Resume from "../assets/Resume-Version-2.pdf";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show footer when scrolling down, hide when scrolling up
            if (currentScrollY > lastScrollY) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.footer
            className="bg-[#1e1e1f] text-gray-300 py-6 text-center fixed bottom-0 left-0 w-full z-50"
            initial={{ y: 100 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="flex justify-center space-x-4 mb-4">
                <div className="flex items-center">
                    <a href="https://github.com/rob2fresh4this" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <i className="devicon-github-original text-2xl mx-2" />
                </div>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/robert-grijalva-351048359/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                    <i className="devicon-linkedin-plain text-2xl mx-2" />
                </div>
                <div className="flex items-center">
                    <a href={Resume} target="_blank" rel="noopener noreferrer" className="hover:text-white">Resume</a>
                    <FontAwesomeIcon icon={faFilePdf} className="text-gray-300 text-2xl mx-2" />
                </div>
            </div>
            <p>&copy; {new Date().getFullYear()} Robert A. Grijalva. All rights reserved.</p>
        </motion.footer>
    );
};

export default Footer;
