import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const HoverEffect = ({
    items,
    className
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6", className)}>
            {items.map((item, idx) => (
                <motion.a
                    href={item?.link}
                    target="_blank"
                    key={item?.link}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial="hidden"
                    whileInView="visible"
                    exit="hidden"
                    variants={cardVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-500/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                            />
                        )}
                    </AnimatePresence>

                    <Card className="bg-[#e2bd3f] hover:bg-[#B59422] transition p-4 rounded-xl flex flex-col items-center justify-center shadow-md">
                        {item.icon ? (
                            <i className={`${item.icon} text-[#6b6c6b] text-4xl mb-3 hover:scale-110 transition-transform duration-300`} />
                        ) : (
                            <FontAwesomeIcon icon={faCode} className="text-[#6b6c6b] mb-3 text-3xl hover:scale-110 transition-transform duration-300" />
                        )}
                        <CardTitle className="text-sm text-[#252526] font-lg">
                            {item.name}
                        </CardTitle>
                    </Card>
                </motion.a>
            ))}
        </div>
    );
};

export const Card = ({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({ className, children }) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};

export const CardDescription = ({ className, children }) => {
    return (
        <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};
