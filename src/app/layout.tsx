import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexAutomate | Premium n8n Automation Workflows",
  description: "Stop selling hours. Start selling systems. Get 4000+ battle-tested n8n automation templates to scale your business on autopilot.",
  keywords: ["n8n templates", "automation workflows", "business automation", "digital products", "NexAutomate"],
  openGraph: {
    title: "NexAutomate | Automate Everything. Scale Faster.",
    description: "Premium n8n automation templates for digital creators and businesses.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
