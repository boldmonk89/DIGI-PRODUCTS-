"use client";

import { motion } from "framer-motion";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  GitBranch, Bot, Zap, GraduationCap, 
  Infinity, BookOpen, Clock, Users, FileText 
} from "lucide-react";

export function Features() {
  const features = [
    { icon: GitBranch, title: "Ready-to-Use n8n Workflows", desc: "Fully built automation workflows you can import into n8n in seconds. No building from scratch." },
    { icon: Bot, title: "AI Automation Systems", desc: "Leverage OpenAI, Claude, and other AI APIs — pre-connected inside ready templates." },
    { icon: Zap, title: "Plug-and-Play Setup", desc: "Connect your accounts, hit activate. Most templates take under 15 minutes to go live." },
    { icon: GraduationCap, title: "Beginner Friendly", desc: "No tech background needed. Every template includes plain-English instructions." },
    { icon: Infinity, title: "Lifetime Access", desc: "Pay once, use forever. All future updates to templates you've purchased are free." },
    { icon: BookOpen, title: "Step-by-Step Documentation", desc: "Detailed written guides with screenshots so you never get stuck." },
    { icon: Clock, title: "Time-Saving Automations", desc: "Eliminate the manual, repetitive tasks eating hours of your week." },
    { icon: Users, title: "Lead Generation Systems", desc: "Automated lead capture, follow-up sequences, and CRM syncs — all pre-built." },
    { icon: FileText, title: "Content Automation Systems", desc: "Auto-publish content, repurpose posts, schedule newsletters — on autopilot." },
  ];

  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 text-center">
        <SectionLabel>Everything Included</SectionLabel>
        <h2 className="text-[clamp(32px,4vw,56px)] font-extrabold text-brand-black mb-4 tracking-tighter leading-none">
          One Purchase. Unlimited Leverage.
        </h2>
        <p className="text-brand-gray text-lg max-w-2xl mx-auto mb-16">
          Every template is built to work from day one — no coding required, no complicated setup.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full">
                <div className="w-10 h-10 bg-brand-black text-white rounded-lg flex items-center justify-center mb-6">
                  <f.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed font-normal">
                  {f.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Button className="px-12 py-5 text-lg">Start Automating Today →</Button>
        </motion.div>
      </div>
    </section>
  );
}
