import { SectionHeader } from "@/components/shared/SectionHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#050814] pb-24">
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                <SectionHeader
                    title="Featured Projects"
                    subtitle="A selection of case studies demonstrating technical depth and business impact."
                />

                <div className="grid grid-cols-1 gap-12 mt-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
