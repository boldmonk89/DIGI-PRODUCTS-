export function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border py-20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="text-2xl font-black tracking-tighter text-brand-black mb-4">
              NexAutomate
            </div>
            <p className="text-brand-gray text-sm leading-relaxed">
              Premium n8n automation templates for digital creators and businesses. Build systems that scale.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <FooterCol title="Product" links={["Features", "Templates", "Pricing", "Waitlist"]} />
            <FooterCol title="Legal" links={["Privacy Policy", "Terms & Conditions", "Refund Policy", "Contact"]} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-brand-border/50">
          <p className="text-brand-gray text-[13px] font-medium">
            © 2025 NexAutomate. All rights reserved.
          </p>
          <p className="text-brand-black font-black text-sm tracking-tight">
            nexautomate.in
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-[13px] font-bold text-brand-black uppercase tracking-widest">{title}</h4>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a key={link} href="#" className="text-sm font-medium text-brand-gray hover:text-brand-black transition-colors">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
