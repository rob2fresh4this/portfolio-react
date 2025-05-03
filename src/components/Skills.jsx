import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { skills } from "../services/dataservices"; // Importing the skills data


const Skills = () => {
    return (
        <section id="skills" className="bg-[#1e1e1f] py-16 px-4 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
            <p className="text-[#a0a4a5] mb-10 max-w-xl mx-auto">
                Technologies and tools I’ve been working with during my backend development journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        onClick={() => window.open(skill.link, "_blank")}
                        className="bg-[#e2bd3f] hover:bg-[#B59422] transition p-4 rounded-xl flex flex-col items-center justify-center shadow-md"
                    >
                        {skill.icon ? (
                            <i className={`${skill.icon} text-[#6b6c6b] text-4xl mb-3 hover:scale-110 transition-transform duration-300`} />
                        ) : (
                            <FontAwesomeIcon icon={faCode} className="text-[#6b6c6b] mb-3 text-3xl hover:scale-110 transition-transform duration-300" />// fallback icon
                        )}
                        <span className="text-sm text-[#252526] font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
