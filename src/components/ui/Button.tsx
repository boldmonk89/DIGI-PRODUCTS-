import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const variants = {
    primary: "bg-brand-black text-white hover:bg-brand-black/90 hover:scale-[1.02] shadow-lg hover:shadow-brand-black/20",
    secondary: "bg-brand-surface text-brand-black border border-brand-border hover:border-brand-gray/50 hover:bg-brand-border/20",
    outline: "bg-transparent border border-brand-border text-brand-black hover:bg-brand-surface",
  };

  return (
    <button
      className={cn(
        "px-7 py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
