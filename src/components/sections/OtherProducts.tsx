"use client";

import { motion } from "framer-motion";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function OtherProducts() {
  const futureProducts = [
    { title: "AI Prompt Packs", desc: "10,000+ Master prompts for ChatGPT, Midjourney, and Claude." },
    { title: "Notion Business OS", desc: "The ultimate operating system to manage your entire startup in Notion." },
    { title: "Digital Course Bundle", desc: "Step-by-step masterclass on building and selling your own digital assets." },
  ];

  return (
    <section className="py-24 bg-white border-t border-brand-border">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <SectionLabel>More From NexAutomate</SectionLabel>
        <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-brand-black mb-4 tracking-tighter leading-none">
          More Digital Products Coming Soon
        </h2>
        <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-16">
          We're constantly building — follow us to be first when new products drop.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          {futureProducts.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="opacity-60 grayscale-[0.5] blur-[0.5px]"
            >
              <Card className="h-full relative overflow-hidden group">
                <div className="absolute top-4 right-4 bg-brand-gray/10 text-brand-gray text-[10px] font-bold px-2 py-1 rounded">
                  COMING SOON
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{p.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{p.desc}</p>
                {/* ADD FUTURE PRODUCTS HERE */}
              </Card>
            </motion.div>
          ))}
        </div>

        <Button variant="secondary" className="px-10">Join Waitlist</Button>
      </div>
    </section>
  );
}
