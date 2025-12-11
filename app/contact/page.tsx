'use client';

import { SectionHeader } from "@/components/shared/SectionHeader";
import { Github, Linkedin, Facebook, Mail, Phone, Copy } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { useState } from "react";

// --- PLACEHOLDER DATA ---
const MY_EMAIL = "chumudithalashen@gmail.com";
const MY_WHATSAPP_NUMBER = "+94704159800";
// WhatsApp link format: https://wa.me/COUNTRYCODEPHONENUMBER (no spaces, no +)
const MY_WHATSAPP_LINK = "https://wa.me/94704159800";
// ------------------------

export default function ContactPage() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const handleCopy = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    // --- Contact Card Component for Reusability ---
    const ContactCard = ({ icon, title, value, href, type }: { icon: React.ReactNode, title: string, value: string, href: string, type: 'email' | 'phone' }) => (
        <div className="group flex items-center justify-between p-6 rounded-xl bg-white/[0.05] border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${type === 'email' ? 'bg-blue-600/20 text-blue-400' : 'bg-green-600/20 text-green-400'}`}>
                    {icon}
                </div>
                <div>
                    <h4 className="text-sm font-medium text-slate-400">{title}</h4>
                    <a
                        href={href}
                        className="text-lg font-semibold text-white hover:text-opacity-80 transition-opacity"
                    >
                        {value}
                    </a>
                </div>
            </div>
            <button
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title={`Copy ${title}`}
                onClick={(e) => {
                    e.preventDefault(); // Prevent navigating if inside an anchor
                    handleCopy(value, type);
                }}
            >
                {type === 'email' ? (
                    copiedEmail ? <Mail className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />
                ) : (
                    copiedPhone ? <Phone className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />
                )}
            </button>
        </div>
    );
    // ----------------------------------------------


    return (
        <div className="min-h-screen bg-[#050814] pb-24 text-slate-200">
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                <SectionHeader
                    title="Let's Build Something Exceptional"
                    subtitle="Ready to take your project to the next level? I'm currently accepting new contracts."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">

                    {/* Left Column (Pitch/Skills) - Reverting to your original content */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Why work with me?</h3>
                            <p className="text-slate-400 leading-relaxed mb-6">
                                I don't just write code; I act as a technical partner. From architectural decisions to UX refinements,
                                I ensure your product is built for scale, performance, and user retention.
                            </p>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3">
                                    {/* These colors assume 'primary', 'secondary', 'accent' are defined in your Tailwind config */}
                                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                                    Production-grade Next.js development
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                                    AI/ML integration experts
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                                    Conversion-focused UX design
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Connect on Social</h3>
                            <div className="flex flex-wrap gap-4">
                                {/* The Button component here should handle the hover/variant styles */}
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://github.com/lashen333" target="_blank">
                                        <Github className="mr-2 w-4 h-4" /> GitHub
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://linkedin.com/in/lashen-yasawardhana" target="_blank">
                                        <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="https://facebook.com/lashen-yasawardhana" target="_blank">
                                        <Facebook className="mr-2 w-4 h-4" /> Facebook
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Direct Contact Details) - REPLACED FORM */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-4">Direct Access</h3>
                        <p className="text-slate-400 leading-relaxed">
                            For project inquiries and immediate discussions, use the direct channels below. I prioritize speed and clarity.
                        </p>

                        {/* Email Card */}
                        <ContactCard
                            icon={<Mail className="w-5 h-5" />}
                            title="Primary Email"
                            value={MY_EMAIL}
                            href={`mailto:${MY_EMAIL}`}
                            type="email"
                        />

                        {/* WhatsApp Card */}
                        <ContactCard
                            icon={<Phone className="w-5 h-5" />}
                            title="WhatsApp Chat"
                            value={MY_WHATSAPP_NUMBER}
                            href={MY_WHATSAPP_LINK}
                            type="phone"
                        />

                        <div className="pt-6">
                            <h3 className="text-xl font-bold text-white mb-3">Project Scope?</h3>
                            <p className="text-slate-400 text-sm">
                                Send a brief message explaining your project idea, budget range, and timeline. This helps me prepare the most relevant response.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}