import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export const CtaButton = forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-display text-sm tracking-[0.2em] uppercase transition-all clip-tactical group",
          variant === "primary" &&
            "bg-gradient-ember text-primary-foreground hover:scale-[1.02] shadow-ember",
          variant === "ghost" &&
            "bg-transparent border border-ember text-ember hover:bg-ember hover:text-primary-foreground",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);
CtaButton.displayName = "CtaButton";
