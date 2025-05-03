import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="bg-[#1e1e1f] text-white py-20 px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    I’m Robert A. Grijalva, a backend developer in training at CodeStack Academy.
                    I earned my high school diploma in 2024 and have since been committed to mastering backend technologies like
                    <span className="text-[#e8bf40]"> C#</span>,
                    <span className="text-[#e8bf40]"> .NET</span>, and
                    <span className="text-[#e8bf40]"> React TypeScript</span>.
                    <br /><br />
                    I enjoy building real-time systems, solving complex problems, and bringing ideas to life with clean code.
                    My current focus is on developing secure login systems, real-time messaging features, and modern web APIs.
                </p>
            </div>
        </section>
    );
};

export default About;
