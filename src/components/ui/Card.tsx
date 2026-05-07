import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" } : {}}
      className={`bg-white border border-brand-border rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 bg-brand-surface border border-brand-border rounded-full text-[10px] font-bold tracking-[0.1em] text-brand-gray uppercase mb-4">
      {children}
    </span>
  );
}
