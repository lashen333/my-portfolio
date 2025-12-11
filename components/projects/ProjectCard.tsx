"use client";

import { Project } from "@/data/projects";
import { Card } from "../shared/Card";
import { Badge } from "../shared/Badge";
import { Button } from "../shared/Button";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="group p-0 overflow-hidden border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 hover:shadow-2xl transition-all duration-500">

                <div className="flex flex-col lg:flex-row h-full">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative min-h-[300px] overflow-hidden">
                        <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors z-10" />
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col">
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-base text-zinc-400 mb-6 font-medium">
                                {project.tagline}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Challenge</span>
                                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{project.problem}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Solution</span>
                                    <p className="text-sm text-zinc-400 mt-1 leading-relaxed">{project.solution}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/5">
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <Badge key={tech} variant="outline" className="border-zinc-700 text-zinc-400">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}
