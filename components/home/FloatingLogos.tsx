"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    // Top Left Group
    { id: "react", icon: "https://cdn.simpleicons.org/react/61DAFB", top: "15%", left: "15%", delay: 0 },
    { id: "nextdotjs", icon: "https://cdn.simpleicons.org/nextdotjs/white", top: "25%", left: "25%", delay: 1.5 },

    // Top Right Group
    { id: "typescript", icon: "https://cdn.simpleicons.org/typescript/3178C6", top: "15%", right: "15%", delay: 0.5 },
    { id: "tailwindcss", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", top: "28%", right: "22%", delay: 2 },

    // Bottom Left Group
    { id: "python", icon: "https://cdn.simpleicons.org/python/3776AB", bottom: "20%", left: "10%", delay: 1 },
    { id: "nodedotjs", icon: "https://cdn.simpleicons.org/nodedotjs/339933", bottom: "35%", left: "20%", delay: 2.5 },

    // Bottom Right Group
    { id: "vercel", icon: "https://cdn.simpleicons.org/vercel/white", bottom: "25%", right: "10%", delay: 1.2 }, // Fixed color to white
    { id: "docker", icon: "https://cdn.simpleicons.org/docker/2496ED", bottom: "38%", right: "25%", delay: 2.8 },

    // Mid Floating
    { id: "postgresql", icon: "https://cdn.simpleicons.org/postgresql/4169E1", bottom: "15%", left: "45%", delay: 3 }, // Bottom center-ish
];

export default function FloatingLogos() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {skills.map((skill) => (
                <motion.div
                    key={skill.id}
                    className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-zinc-900/50 border border-white/5 shadow-2xl flex items-center justify-center backdrop-blur-md"
                    style={{
                        top: skill.top,
                        left: skill.left,
                        right: skill.right,
                        bottom: skill.bottom,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0], // Gentle float up and down
                    }}
                    transition={{
                        opacity: { duration: 1, delay: skill.delay * 0.2 }, // Fade in
                        scale: { duration: 1, delay: skill.delay * 0.2 },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: Math.random() * 2 // Randomize float start
                        }
                    }}
                >
                    <img
                        src={skill.icon}
                        alt={skill.id}
                        className="w-7 h-7 md:w-8 md:h-8 opacity-90"
                    />
                </motion.div>
            ))}
        </div>
    );
}
