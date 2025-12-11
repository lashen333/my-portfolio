"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    text: string;
    speed?: number;
    className?: string;
    delay?: number;
}

export function Typewriter({ text, speed = 50, className, delay = 0 }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay * 1000);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i > text.length) clearInterval(intervalId);
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed, started]);

    return (
        <motion.span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block ml-1 w-2 h-4 bg-green-500 align-middle"
            />
        </motion.span>
    );
}
