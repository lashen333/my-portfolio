"use client";

import { useState, FormEvent } from "react";
import { Button } from "../shared/Button";
import { Card } from "../shared/Card";
import { Send, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Full Web App",
        budget: "$2,000–$5,000",
        details: ""
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate network request
        setTimeout(() => {
            setStatus("success");
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#22d3ee", "#a855f7", "#fbbf24"],
            });

            // Reset after 3 seconds
            setTimeout(() => {
                setStatus("idle");
                setFormData({
                    name: "",
                    email: "",
                    projectType: "Full Web App",
                    budget: "$2,000–$5,000",
                    details: ""
                });
            }, 5000);
        }, 1500);
    };

    return (
        <Card className="border-white/10 p-8 glass-card">
            {status === "success" ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-400">I'll get back to you within 24 hours.</p>
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Name</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email</label>
                        <input
                            required
                            type="email"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Project Type</label>
                            <select
                                className="w-full px-4 py-3 bg-[#050814] border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                value={formData.projectType}
                                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            >
                                <option>MVP / Startup</option>
                                <option>AI/ML Integration</option>
                                <option>Full Web App</option>
                                <option>Consultation Only</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Budget Range</label>
                            <select
                                className="w-full px-4 py-3 bg-[#050814] border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                value={formData.budget}
                                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            >
                                <option>&lt; $500</option>
                                <option>$500 – $2,000</option>
                                <option>$2,000 – $5,000</option>
                                <option>$5,000+</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Project Details</label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600 resize-none"
                            placeholder="Tell me about your project..."
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full"
                        size="lg"
                    >
                        {status === "submitting" ? "Sending..." : "Send Message"}
                        {!status && <Send className="ml-2 w-4 h-4" />}
                    </Button>
                </form>
            )}
        </Card>
    );
}
