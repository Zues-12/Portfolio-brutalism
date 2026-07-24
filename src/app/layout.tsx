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
  title: "Zunair Saeed — Full-stack Developer",
  description:
    "Full-stack developer building scalable web applications, APIs, and AI-powered products.",
  keywords: [
    "Zunair Saeed",
    "Full-stack developer",
    "MERN developer",
    "Next.js",
    "Node.js",
    "React",
    "Python",
    "RAG",
    "LLM",
    "AI",
    "Automation",
    "AI Agentic Development",
  ],
  openGraph: {
    title: "Zunair Saeed — Full-stack Developer",
    description:
      "Scalable web applications, APIs, and AI-powered digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
