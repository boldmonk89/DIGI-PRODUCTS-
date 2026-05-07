"use client";

import { motion } from "framer-motion";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Templates() {
  const templates = [
    { title: "Instagram Content Automation", desc: "Auto-repurpose, schedule and publish reels from a simple Google Sheet or Notion database.", price: "299", oldPrice: "999", badge: "BESTSELLER" },
    { title: "Lead Gen + CRM Sync", desc: "Instantly capture leads from Facebook/LinkedIn ads and sync them with Notion, Slack and your CRM.", price: "299", oldPrice: "999", badge: "NEW" },
    { title: "AI Email Responder", desc: "Connect OpenAI to your inbox to draft personalized, context-aware responses to every inquiry.", price: "299", oldPrice: "999", badge: "AI-POWERED" },
    { title: "YouTube Script Generator", desc: "Transform a simple topic into a full script, SEO tags, and description using custom AI workflows.", price: "299", oldPrice: "999", badge: "POPULAR" },
    { title: "Client Onboarding System", desc: "Automate your entire onboarding: agreements, intro emails, and project folder creation.", price: "299", oldPrice: "999", badge: "SYSTEM" },
    { title: "WhatsApp Follow-Up Bot", desc: "Never lose a lead again. Automated personalized WhatsApp follow-ups for your sales pipeline.", price: "299", oldPrice: "999", badge: "NEW" },
  ];

  return (
    <section id="templates" className="py-24 bg-brand-surface/30">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <SectionLabel>Premium Templates</SectionLabel>
        <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-brand-black mb-4 tracking-tighter leading-none">
          Automation Workflows Built For Results
        </h2>
        <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-16">
          Each template is a complete system — not just a workflow, but a business asset.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {templates.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-0 overflow-hidden flex flex-col h-full bg-white">
                <div className="aspect-video bg-brand-surface border-b border-brand-border flex items-center justify-center relative">
                  <span className="text-brand-gray/40 font-bold uppercase tracking-widest text-sm">Template Preview</span>
                  {t.badge && (
                    <span className="absolute top-4 left-4 px-2 py-1 bg-brand-blue text-white text-[10px] font-black rounded-md tracking-wider">
                      {t.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-black mb-3 tracking-tight">{t.title}</h3>
                  <p className="text-brand-gray text-sm mb-6 leading-relaxed flex-grow">{t.desc}</p>
                  
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-2xl font-black text-brand-black">₹{t.price}</span>
                    <span className="text-sm text-brand-gray line-through mb-1">₹{t.oldPrice}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button className="py-2.5 text-[13px] px-0">Get Template</Button>
                    <Button variant="secondary" className="py-2.5 text-[13px] px-0">Preview</Button>
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
