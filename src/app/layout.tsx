import type { Metadata } from "next";
import {
  Space_Grotesk,
  Inter,
  Fraunces,
  VT323,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionProvider } from "@/components/motion/MotionProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-accent-italic",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-data",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cerenetics — AI-Native Systems & Applied Engineering",
  description: "Cerenetics engineers high-impact AI-native digital systems, deterministic business software, and specialized agentic architectures.",
  metadataBase: new URL("https://cerenetics.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${fraunces.variable} ${vt323.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0A1128] text-foreground font-body p-2 sm:p-4 md:p-6 flex flex-col selection:bg-panel selection:text-text-primary">
        <MotionProvider>
          {/* Outer Architectural Enclosure Frame */}
          <div className="flex-1 flex flex-col w-full max-w-[1680px] mx-auto bg-white border border-[#0A1128]/20 shadow-2xl overflow-hidden">
            <SiteHeader />
            <main id="main-content" className="flex-1 flex flex-col w-full">
              {children}
            </main>
            <SiteFooter />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
