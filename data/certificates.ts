export interface Certificate {
    title: string;
    issuer: string;
    year: string;
    imageUrl: string;
    credentialUrl?: string;
    certificateId?: string;
}

export const certificates: Certificate[] = [
    {
        title: "Machine Learning with Python",
        issuer: "Coursera / IBM",
        year: "2023",
        imageUrl: "/certificates/COURSERA.png",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MNCE8QMTMYTJ",
    },
    {
        title: "AI/ML Engineer - Stage 1",
        issuer: "SLIIT UNIVERSITY",
        year: "2023",
        imageUrl: "/certificates/AI-1.png",
        credentialUrl: "",
        certificateId: "asomovu1tr"
    },
    {
        title: "AI/ML Engineer - Stage 2",
        issuer: "SLIIT UNIVERSITY",
        year: "2023",
        imageUrl: "/certificates/AI-2.png",
        credentialUrl: "",
        certificateId: "uzznsjlmxx"
    },

    {
        title: "Python for Beginners",
        issuer: "UNIVERSITY OF MORATUWA,SRI LANKA",
        year: "2023",
        imageUrl: "/certificates/PYTHON.png",
        credentialUrl: "https://open.uom.lk/verify",
        certificateId: "FeOpqHXHkQ"
    },

    {
        title: "Fundamentals of 5G Technology",
        issuer: "eAcademy",
        year: "2023",
        imageUrl: "/certificates/5G.png",
        credentialUrl: "",
        certificateId: ""
    },

    {
        title: "Cloud Computing",
        issuer: "eAcademy",
        year: "2023",
        imageUrl: "/certificates/CLOUD.png",
        credentialUrl: "",
        certificateId: ""
    },
    {
        title: "Inbound Marketing",
        issuer: "Hubspot Academy",
        year: "2023",
        imageUrl: "/certificates/MARKETING.png",
        credentialUrl: "",
        certificateId: ""
    },
    {
        title: "Social Media Certified",
        issuer: "Hubspot Academy",
        year: "2023",
        imageUrl: "/certificates/MARKETING2.png",
        credentialUrl: "",
        certificateId: ""
    },
    {
        title: "HACKATHON CERTIFICATE",
        issuer: "UNIVERSITY OF KELANIYA,SRI LANKA",
        year: "2024",
        imageUrl: "/certificates/HACKATHON.png",
        credentialUrl: "",
        certificateId: ""
    },
];
