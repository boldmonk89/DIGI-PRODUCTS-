"use client";

import { motion } from "framer-motion";
import { Card, SectionLabel } from "@/components/ui/Card";

export function Testimonials() {
  const testimonials = [
    { name: "Priya M.", role: "Freelance Marketer", quote: "I set up the Lead Gen + CRM Sync template in under 20 minutes. It's been running for 3 weeks and has captured 340 leads automatically." },
    { name: "Rohan K.", role: "Content Creator", quote: "As someone with zero coding skills, I was shocked how easy this was. My content is now auto-posted across 4 platforms while I sleep." },
    { name: "Ananya S.", role: "E-commerce Founder", quote: "I've tried 6 different automation tools. NexAutomate templates saved me weeks of setup time and ₹40,000 in agency fees." },
    { name: "Vikram T.", role: "SaaS Consultant", quote: "The AI Email Responder template alone was worth 10x the price. My response rate doubled in the first week." },
    { name: "Deepika R.", role: "Digital Agency Owner", quote: "I'm now offering automation setup as a service to my clients using these templates. It's become a new revenue stream." },
    { name: "Siddharth N.", role: "Solopreneur", quote: "Honestly shocked at the quality for ₹299. The documentation alone is better than most paid courses I've bought." },
  ];

  return (
    <section className="py-24 bg-brand-surface/30">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <SectionLabel>Creator Reviews</SectionLabel>
        <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-brand-black mb-4 tracking-tighter leading-none">
          Real Creators. Real Results.
        </h2>
        <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-16">
          Join thousands of digital entrepreneurs who've already automated their workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between bg-white border-brand-border/50">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-yellow-400 text-lg leading-none">★</span>
                    ))}
                  </div>
                  <p className="text-brand-black font-medium leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-border rounded-full flex items-center justify-center text-[12px] font-black text-brand-gray">
                    {t.name.split(' ')[0][0]}{t.name.split(' ')[1] ? t.name.split(' ')[1][0] : ''}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-brand-black">{t.name}</div>
                    <div className="text-[12px] text-brand-gray">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
