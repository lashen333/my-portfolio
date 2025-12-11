"use client";

import { Card } from "../shared/Card";
import { Badge } from "../shared/Badge";
import { Globe, Clock, Zap, Cpu, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutBento() {
    return (
        <section className="py-32 relative">

            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering for Scale</h2>
                    <p className="text-zinc-400 text-lg">
                        I combine technical expertise with product intuition to deliver software that drives business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

                    {/* Main Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-1"
                    >
                        <Card className="h-full flex flex-col justify-center bg-zinc-900/60 border-zinc-800/50 hover:border-violet-500/20 transition-colors group">
                            <div className="mb-6 w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform duration-300">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Fullstack Architect</h3>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                I don't just write code; I design systems. Specializing in
                                <span className="text-zinc-200 font-medium"> React Ecosystems</span> and
                                <span className="text-zinc-200 font-medium"> AI Integration</span>,
                                I help startups and enterprises build their flagship products.
                                My focus is on performance, accessibility (a11y), and developer experience (DX).
                            </p>
                        </Card>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 row-span-2"
                    >
                        <Card className="h-full flex flex-col justify-between bg-zinc-950/80 border-zinc-800/80">
                            <div>
                                <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-zinc-300">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    Impact by the Numbers
                                </h3>
                                <div className="space-y-8">
                                    <div className="group">
                                        <div className="text-5xl font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">20+</div>
                                        <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Projects Shipped</div>
                                    </div>
                                    <div className="group">
                                        <div className="text-5xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">100k+</div>
                                        <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Active Users</div>
                                    </div>
                                    <div className="group">
                                        <div className="text-5xl font-bold text-white mb-1 group-hover:text-rose-400 transition-colors">99%</div>
                                        <div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    Based in India (GMT+5:30)
                                </div>
                                <div className="flex items-center gap-3 text-sm text-zinc-400">
                                    <Globe className="w-4 h-4" /> Remote Native
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Stack Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 row-span-1"
                    >
                        <Card className="h-full flex flex-col justify-between bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <Layers className="w-5 h-5 text-zinc-400" />
                                    <h3 className="text-xl font-semibold">Technical Arsenal</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {["Next.js", "React", "TailwindCSS", "Node.js", "Python", "FastAPI", "OpenAI", "LangChain", "PostgreSQL", "Redis", "Docker", "AWS"].map((tech) => (
                                        <Badge key={tech} variant="secondary" className="px-4 py-1.5 text-sm bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 border border-white/5">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
