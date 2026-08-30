import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Brother's Fitness | 1-on-1 Personal Training Gym & 100% Result Guarantee",
  description:
    "Transform your physique at Brother's Fitness. Dedicated 1-on-1 personal training for every member with custom workout and strict diet guidance. 100% Results or Money-Back Guarantee.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "Brothers Fitness",
    "Brother's Gym",
    "Personal Training Gym",
    "100% Result Guarantee Gym",
    "Weight Loss Gym",
    "Bodybuilding Gym",
    "Fitness Center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} dark`}
    >
      <body className="min-h-screen bg-[#070707] text-[#F3F4F6] font-sans antialiased selection:bg-[#E5A919] selection:text-black font-normal">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}


