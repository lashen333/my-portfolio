import { Github, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h3 className="text-xl font-bold text-white">
                        Lashen Yasawardhana
                    </h3>
                    <p className="text-zinc-400 text-sm">
                        Fullstack Engineer & AI Integrator
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/lashen333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors hover:scale-110"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lashen-yasawardhana-855352261/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-violet-400 transition-colors hover:scale-110"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61571682174363"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-cyan-400 transition-colors hover:scale-110"
                    >
                        <Facebook className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="mt-12 text-center text-xs text-zinc-600">
                © {new Date().getFullYear()} Lashen Yasawardhana. All rights reserved.
            </div>
        </footer>
    );
}
