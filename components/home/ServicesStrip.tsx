"use client";

import { Card } from "../shared/Card";
import { Code2, Bot, Rocket, BarChart3 } from "lucide-react";

const services = [
    {
        icon: <Code2 className="w-6 h-6 text-violet-400" />,
        title: "Fullstack Development",
        desc: "Scalable web applications built with Next.js and TypeScript. I focus on speed, SEO, and maintainability.",
    },
    {
        icon: <Bot className="w-6 h-6 text-cyan-400" />,
        title: "AI Integration",
        desc: "Custom AI agents and RAG systems using OpenAI/Anthropic APIs to automate your business capabilities.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-rose-400" />,
        title: "MVP Launchpad",
        desc: "Rapid prototyping to take your idea from concept to market-ready product in weeks, not months.",
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
        title: "Performance Tuning",
        desc: "Auditing and optimizing existing React applications for maximum speed and conversion rates.",
    },
];

export default function ServicesStrip() {
    return (
        <section className=" bg-zinc-950">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="max-w-xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 ">How I Can Helps</h2>
                        <p className="text-zinc-400">
                            Comprehensive strategies to build your next big thing.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Card key={idx} className="group hover:-translate-y-1 transition-transform duration-300 bg-zinc-900/30 border-zinc-800/50">
                            <div className="mb-6 w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-white/20 transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-3 text-zinc-100 group-hover:text-violet-400 transition-colors">{service.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                                {service.desc}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
