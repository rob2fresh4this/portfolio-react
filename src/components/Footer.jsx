import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1e1e1f] text-gray-300 py-6 text-center">
            <p>&copy; {new Date().getFullYear()} Robert A. Grijalva. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <div className="flex items-center">
                    <a href="https://github.com/rob2fresh4this" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
                    <i className="devicon-github-original text-2xl mx-2" />
                </div>
                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/robert-grijalva-351048359/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
                    <i className="devicon-linkedin-plain text-2xl mx-2" />
                </div>
            </div>
        </footer>

    )

}

export default Footer;