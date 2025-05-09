import { skills } from "../services/dataservices";
import { HoverEffect } from "./aceternity-components/Hover-Effect-Card";
import { motion } from "framer-motion";

const Skills = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="bg-[#1e1e1f] py-16 px-4 text-white text-center mb-[30px]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
                <p className="text-[#a0a4a5] mb-10 max-w-xl mx-auto">
                    Technologies and tools I’ve been working with during my backend development journey.
                </p>
            </motion.div>

            <motion.div
                className="max-w-5xl mx-auto px-8"
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                variants={sectionVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <HoverEffect items={skills} />
            </motion.div>
        </section>
    );
};

export default Skills;
