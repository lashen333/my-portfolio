"use client";

import { Certificate } from "@/data/certificates";
import { Card } from "../shared/Card";
import { Button } from "../shared/Button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CertificateCardProps {
    cert: Certificate;
    index: number;
}

export default function CertificateCard({ cert, index }: CertificateCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <Card className="flex flex-col h-full group p-0 overflow-hidden bg-zinc-900/50 border-zinc-800 hover:border-violet-500/50 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-all z-10" />
                    <Image
                        src={cert.imageUrl}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-zinc-100 group-hover:text-violet-400 transition-colors">{cert.title}</h3>
                    <p className="text-zinc-500 text-sm mb-6">{cert.issuer} • {cert.year} </p>

                    {cert.certificateId && (
                    <p className="text-zinc-400 text-xs mb-4">
                        <span className="font-medium">Certificate ID:</span> {cert.certificateId}
                    </p>
                    )}
                    
                    {cert.credentialUrl && (
                    <div className="mt-auto">
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm" className="w-full border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500">
                                View Credential <ExternalLink className="ml-2 w-3 h-3" />
                            </Button>
                        </a>
                    </div>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}
