import React from "react";

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
        <section id="skills" className="bg-gray-950 py-16 px-4 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
                Technologies and tools I’ve been working with during my backend development journey.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-xl flex flex-col items-center justify-center shadow-md"
                    >
                        {skill.icon ? (
                            <i className={`${skill.icon} text-4xl mb-3 hover:scale-110 transition-transform duration-300`} />
                        ) : (
                            <span className="text-xl mb-3">🔧</span> // fallback icon
                        )}
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
