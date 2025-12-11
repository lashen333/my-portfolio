import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline" | "secondary" | "accent";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",

                    variant === "default" &&
                    "border-transparent bg-violet-500/10 text-violet-400 hover:bg-violet-500/20",
                    variant === "secondary" &&
                    "border-transparent bg-zinc-800 text-zinc-300 hover:bg-zinc-700",
                    variant === "outline" &&
                    "border border-zinc-800 text-zinc-400",
                    variant === "accent" &&
                    "border-transparent bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20",

                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
