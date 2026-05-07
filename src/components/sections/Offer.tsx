"use client";

import { motion } from "framer-motion";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { Check } from "lucide-react";

export function Offer() {
  const benefits = [
    "All current n8n templates",
    "Step-by-step setup guides",
    "AI-powered workflow systems",
    "Lifetime updates included",
    "Use for yourself or clients",
    "7-day money-back guarantee",
  ];

  return (
    <section id="pricing" className="relative py-32 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-pattern opacity-[0.2]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />

      <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 border border-red-100 rounded-full text-red-600 text-xs font-black tracking-widest uppercase mb-10 shadow-sm">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
          ⏳ Limited Time Offer
        </div>

        <h2 className="text-[clamp(36px,5vw,72px)] font-black text-brand-black mb-6 tracking-tighter leading-none">
          Get Full Access For <br /> Just ₹299 Today
        </h2>
        <p className="text-brand-gray text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
          This price won't last. Once the timer hits zero, the price goes up. Lock in your lifetime access now.
        </p>

        {/* Countdown */}
        <div className="mb-20">
          <CountdownTimer />
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[480px] mx-auto"
        >
          <Card className="p-10 shadow-2xl border-2 border-brand-black relative overflow-hidden" hover={false}>
            {/* Ribbon */}
            <div className="absolute top-0 right-0 bg-brand-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
              BEST VALUE
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-brand-black mb-4 tracking-tight uppercase">The Full Vault</h3>
              <div className="flex flex-col items-center justify-center">
                <span className="text-brand-gray line-through text-2xl font-medium">₹999</span>
                <div className="flex items-start">
                  <span className="text-6xl font-black text-brand-black leading-none">₹299</span>
                </div>
              </div>
              <p className="text-brand-gray text-sm mt-4 font-medium">One-time payment. Lifetime access. <br /> Instant digital delivery.</p>
            </div>

            <div className="space-y-4 mb-10 text-left">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm font-semibold text-brand-black">
                  <div className="w-5 h-5 bg-brand-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  {b}
                </div>
              ))}
            </div>

            <Button className="w-full py-5 text-lg shadow-xl shadow-brand-black/20">
              Start Automating Now — ₹299 →
            </Button>
            
            <p className="text-brand-gray text-[11px] mt-6 font-medium uppercase tracking-widest">
              Secure payment. Instant access. No subscription.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
