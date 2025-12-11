import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({
    title,
    subtitle,
    align = "center",
    className,
    ...props
}: SectionHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-3 mb-12",
                align === "center" && "items-center text-center",
                align === "right" && "items-end text-right",
                className
            )}
            {...props}
        >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
                {title}
            </h2>
            {subtitle && (
                <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>
            )}
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mt-2" />
        </div>
    );
}
