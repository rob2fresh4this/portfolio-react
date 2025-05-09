import { skills } from "../services/dataservices"; // Importing the skills data
import { HoverEffect } from "./aceternity-components/Hover-Effect-Card";


const Skills = () => {
    return (
        <section id="skills" className="bg-[#1e1e1f] py-16 px-4 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
            <p className="text-[#a0a4a5] mb-10 max-w-xl mx-auto">
                Technologies and tools I’ve been working with during my backend development journey.
            </p>
            
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={skills} />
            </div>
        </section>
    );
};

export default Skills;
