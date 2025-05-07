
import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const TypewriterEffect = ({ text, speed = 50, className = '', onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex(index + 1);
            } else {
                if (onComplete) onComplete(); // Notify when typing is done
                clearTimeout(timeout);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [index, text, speed, onComplete]);

    return <span className={cn(className, "text-outline-thicc")}>{displayedText}</span>;
};

export default TypewriterEffect;
