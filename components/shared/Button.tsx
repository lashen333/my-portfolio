import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"; // Added ReactNode
import { cn } from "@/lib/utils";

// 1. Extend props to include optional 'asChild'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean; // <--- ADDED 'asChild' PROP
    children?: ReactNode; // Ensure children is defined
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        // Helper function to generate class names based on variant and size
        const getClasses = () => cn(
            "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-95",

            // Variants
            variant === "primary" &&
            "bg-zinc-50 text-zinc-950 hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)]",
            variant === "secondary" &&
            "bg-violet-600 text-white hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)]",
            variant === "outline" &&
            "border border-white/10 bg-transparent text-zinc-300 hover:bg-white/5 hover:text-white hover:border-white/20",
            variant === "ghost" &&
            "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",

            // Sizes
            size === "sm" && "h-8 px-4 text-xs",
            size === "md" && "h-10 px-6 text-sm",
            size === "lg" && "h-12 px-8 text-base",
            size === "icon" && "h-10 w-10 p-2",

            className
        );

        // 2. Conditional Rendering Logic
        // If asChild is true, we render the children directly (and assume they are the element we want, e.g., <a>)
        // and merge the props onto the child.
        if (asChild) {
            // We cast props as any here because we are dynamically assigning the classes 
            // and ref to the children, which requires the children to be valid elements.
            return (
                <div
                    ref={ref as any}
                    className={getClasses()}
                    {...props as any}
                >
                    {props.children}
                </div>
            );
        }

        // 3. Default Rendering (standard button)
        return (
            <button
                ref={ref}
                className={getClasses()}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };