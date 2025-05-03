import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const skills = [
    { name: "C#", icon: "devicon-csharp-plain" },
    { name: ".NET", icon: "devicon-dot-net-plain" },
    { name: "React", icon: "devicon-react-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "HTML", icon: "devicon-html5-plain" },
    { name: "CSS", icon: "devicon-css3-plain" },
    { name: "Node.js", icon: "devicon-nodejs-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "SignalR", icon: "" }, // No Devicon available
];

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
