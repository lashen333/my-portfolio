"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../shared/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FloatingLogos from "./FloatingLogos";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            {/* Floating Logos Layer */}
            <FloatingLogos />

            <div className="container relative z-10 mx-auto px-6 text-center pointer-events-none">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center"
                >
                    {/* Status Pill */}
                    <div className="inline-flex pointer-events-auto items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm text-sm text-zinc-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for New Projects
                    </div>

                    {/* Profile Image - Clean & Circle */}
                    <div className="relative mb-8 group pointer-events-auto">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
                        <div className="relative w-32 h-32 md:w-45 md:h-45 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900">
                            <Image
                                src="/lashen.jpg"
                                alt="Lashen Yasawardhana"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pointer-events-auto">
                        Building Intelligent <br className="hidden md:block" />
                        <span className="text-white">Systems for the Future</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl leading-relaxed pointer-events-auto">
                        I help forward-thinking companies build scalable web applications
                        and integrate AI agents to automate complex workflows.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto">
                        <Link href="/contact">
                            <Button size="lg" className="group">
                                Start a Project
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                View Work
                            </Button>
                        </Link>
                    </div>

                    {/* Tech strip */}
                    <div className="mt-16 pt-6 border-t border-white/5 w-full max-w-4xl pointer-events-auto">
                        <p className="text-sm text-zinc-500 mb-6 uppercase tracking-widest font-semibold">Powering Solutions With</p>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-zinc-400 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="hover:text-white transition-colors">Next.js</span>
                            <span className="hover:text-white transition-colors">React </span>
                            <span className="hover:text-white transition-colors">TypeScript</span>
                            <span className="hover:text-white transition-colors">OpenAI</span>
                            <span className="hover:text-white transition-colors">Anthropic</span>
                            <span className="hover:text-white transition-colors">LangChain</span>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
