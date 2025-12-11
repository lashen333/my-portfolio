import { SectionHeader } from "@/components/shared/SectionHeader";
import CertificateCard from "@/components/certificates/CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificatesPage() {
    return (
        <div className="min-h-screen bg-[#050814] pb-24">
            <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20">
                <SectionHeader
                    title="Certificates & Learning"
                    subtitle="Continuous growth is part of the job. Here are some of my recent qualifications."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {certificates.map((cert, index) => (
                        <CertificateCard key={cert.title} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
