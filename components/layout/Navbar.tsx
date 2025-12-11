"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../shared/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "Expertise", href: "/certificates" }, // Retaining certificate page but calling it Expertise
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl shadow-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-950 border border-white/10 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
                        <span className="font-bold text-white text-lg">L</span>
                    </div>
                    <span className="font-medium text-zinc-200 group-hover:text-white transition-colors">Lashen.dev</span>
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-1 bg-zinc-800/50 rounded-full px-2 py-1 border border-white/5">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative",
                                        isActive ? "text-white" : "text-zinc-400 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-zinc-700/80 rounded-full"
                                            style={{ zIndex: -1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button size="sm" variant="primary" className="rounded-full">Get in Touch</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="absolute top-24 left-4 right-4 bg-zinc-900 border border-white/10 rounded-2xl p-4 shadow-2xl md:hidden flex flex-col gap-2"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="p-3 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-2"
                        >
                            <Button className="w-full">Get in Touch</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
