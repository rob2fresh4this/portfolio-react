import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CornerIcon = () => {
    return (
        <div
                className="fixed bottom-5 right-5 bg-[#171515] hover:bg-[#444] p-4 rounded-full shadow-md cursor-pointer transition duration-300 group hidden sm:block"
                onClick={() => window.open("https://github.com/rob2fresh4this", "_blank")}
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white text-3xl group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500"
                />
            </div>
    );
}

export default CornerIcon;