"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12 overflow-hidden bg-white">
      {/* Grid Background Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["⭐ 4.9/5 Rating", "🔒 Instant Delivery", "✅ Beginner Friendly", "♾️ Lifetime Access"].map((badge) => (
            <span
              key={badge}
              className="px-4 py-1.5 bg-white border border-brand-border rounded-full text-[12px] font-medium text-brand-gray shadow-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(48px,6vw,88px)] font-[800] leading-[1.05] tracking-[-0.05em] text-brand-black mb-8"
        >
          Digital Products Are <br />
          <span className="relative inline-block">
            The Future.
            <span className="absolute left-0 bottom-3 w-full h-[6px] bg-brand-blue/10 -z-10 rounded-full" />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[clamp(16px,2vw,20px)] text-brand-gray max-w-[560px] mx-auto mb-10 leading-relaxed font-normal"
        >
          Stop selling hours. Start selling systems. NexAutomate gives you ready-to-deploy n8n automation templates — so you can earn while you sleep.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button className="w-full sm:w-auto">Get Instant Access →</Button>
          <Button variant="outline" className="w-full sm:w-auto">See Templates</Button>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative max-w-[900px] mx-auto aspect-video bg-brand-surface rounded-[24px] border border-brand-border shadow-[0_20px_80px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center group overflow-hidden"
        >
          {/* Subtle Glow Ring */}
          <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-blue/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-20 h-20 bg-brand-black rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform duration-300">
              <Play fill="currentColor" className="ml-1" />
            </div>
          </div>
          
          <span className="mt-6 text-brand-gray font-semibold text-lg tracking-tight">Product Demo Coming Soon</span>
        </motion.div>
      </div>
    </section>
  );
}
