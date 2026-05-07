"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/Card";

export function FAQ() {
  const faqs = [
    { q: "How do I access the templates after purchase?", a: "Immediately after payment, you'll receive an email with download links and setup instructions. Everything is delivered digitally — no waiting." },
    { q: "Do I need to know how to code?", a: "Not at all. Every template is designed for non-technical users. If you can follow step-by-step instructions, you can set these up. Most users are live within 15–30 minutes." },
    { q: "Do I get lifetime access?", a: "Yes. Once you purchase, the templates are yours forever. We continuously improve our templates and all updates are included at no extra cost." },
    { q: "How fast can I get a workflow running?", a: "Most templates take 15–30 minutes to set up from scratch. The plug-and-play design means you're connecting existing accounts, not building anything." },
    { q: "Can I use these templates for my clients?", a: "Yes. You can use the templates for your own business and for client projects. Many of our users have built agencies around these systems." },
    { q: "What is your refund policy?", a: "We offer a 7-day no-questions-asked refund policy. If you're not satisfied for any reason within 7 days of purchase, contact us and we'll issue a full refund." },
    { q: "Do I need to pay for n8n separately?", a: "n8n has a free self-hosted version you can use at no cost. Some cloud features may require a paid n8n plan — we'll note any requirements clearly in each template's documentation." },
    { q: "What tools do these templates connect to?", a: "Our templates connect to tools like Google Workspace, Notion, Slack, WhatsApp, Instagram, YouTube, OpenAI, Gmail, Airtable, and many more via n8n's 400+ native integrations." },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Questions</SectionLabel>
          <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-brand-black tracking-tighter">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-border rounded-2xl overflow-hidden bg-brand-surface/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 transition-colors hover:bg-brand-surface/40"
      >
        <span className="text-lg font-bold text-brand-black tracking-tight">{question}</span>
        <div className="flex-shrink-0 text-brand-gray">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-brand-gray text-base leading-relaxed border-t border-brand-border/30 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
