export interface Project {
    title: string;
    tagline: string;
    imageUrl: string;
    techStack: string[];
    problem: string;
    solution: string;
    impact: string;
    liveUrl?: string;
    githubUrl?: string;
}

export const projects: Project[] = [
    
    {
        "title": "Lovewall",
        "tagline": "Global photo wall for couples to preserve their love stories online.",
        "imageUrl": "/projects/Screenshot 2025-12-08 032823.png", // Placeholder
        "techStack": ["Next.js", "Cloudinary", "MongoDB", "Polar"],
        "problem": "Couples lacked a dedicated platform to share and preserve wedding memories in one place.",
        "solution": "Built a web app allowing couples to create shareable wedding pages to showcase photos and messages.",
        "impact": "Provided a lasting digital keepsake for couples and made it easy for friends and family to celebrate their stories.",
        "liveUrl": "https://love-wall-one.vercel.app/",
        "githubUrl": "https://github.com/example/lovewall"
    },
    {
        "title": "Techstars Landing Page",
        "tagline": "High-conversion landing page showcasing Techstars accelerator program.",
        "imageUrl": "/projects/Screenshot 2025-12-08 040801.png", // Placeholder
        "techStack": ["React", "Tailwind CSS", "Shadcn UI", "TypeScript"," Framer Motion"," Vercel","Exel"],
        "problem": "Techstars needed a modern, engaging web page to communicate its value to prospective startup founders.",
        "solution": "Designed a single-page site highlighting the mentorship programs, global network, and success stories of Techstars in a visually engaging format.",
        "impact": "The new page clearly presents the Techstars mission, improving user engagement and driving more applications to their programs.",
        "liveUrl": "https://landingpage-techstars.vercel.app/",
        "githubUrl": "https://github.com/example/techstars-landing"
    },
    {
        "title": "Aenigm3 Labs Website",
        "tagline": "Conversion-focused website leveraging AI to fuel client growth.",
        "imageUrl": "/projects/Screenshot 2025-12-08 032622.png", // Placeholder
        "techStack": ["Next.js", "Tailwind CSS", "TypeScript"],
        "problem": "Aenigm3 Labs needed a strong online presence to convert visitors into leads and showcase its AI-driven CRO services.",
        "solution": "Developed a fast, SEO-optimized website that highlights their conversion process, services, and ROI guarantee, with clear calls-to-action throughout.",
        "impact": "Established Aenigm3 Labs as a credible brand online, leading to increased proposal requests from potential clients.",
        "liveUrl": "https://aenigm3labs.com/",
        "githubUrl": "https://github.com/example/aenigm3labs-website"
    },
    {
        "title": "Link3 Landing Page",
        "tagline": "Landing page for a Web3 link-sharing platform to drive user adoption.",
        "imageUrl": "/projects/Screenshot 2025-12-08 040842.png", // Placeholder
        "techStack": ["Next.js", "Tailwind CSS", "NEAR Protocol"],
        "problem": "The Link3 dApp had no public website to explain its features or onboard new users outside the NEAR ecosystem.",
        "solution": "Created an informative landing page that explains the benefits of Link3 as a decentralized link-in-bio tool, outlines how to get started with a NEAR wallet, and showcases example user profiles.",
        "impact": "Gave Link3 a professional web presence, educating users about the platform and increasing sign-ups through clearer communication of its value.",
        "liveUrl": "https://link3-landing.vercel.app/",
        "githubUrl": "https://github.com/example/link3-landing"
    }


];
