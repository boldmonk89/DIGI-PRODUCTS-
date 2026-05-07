"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-brand-black text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/20 blur-[100px] rounded-full -z-0" />

      <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[clamp(32px,5vw,64px)] font-black mb-6 tracking-tighter leading-none"
        >
          Start Building Automated <br /> Income Today.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-brand-gray text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
        >
          Everything you need to automate your business, generate leads on autopilot, and scale without working more hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button className="bg-white text-brand-black hover:bg-white/90 w-full sm:w-auto px-10">
            Get Access Now — ₹299 →
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto px-10">
            View All Templates
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-brand-gray uppercase tracking-widest"
        >
          <span>✓ Instant access</span>
          <span>✓ 7-day refund</span>
          <span>✓ Lifetime updates</span>
          <span>✓ No subscription</span>
        </motion.div>
      </div>
    </section>
  );
}
