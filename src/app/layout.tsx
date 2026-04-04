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
  title: "Abandoned Capital LLC | Proprietary Principal Trading",
  description:
    "Abandoned Capital LLC is a proprietary principal trading company based in George Town, Cayman Islands, deploying systematic and discretionary strategies across global markets.",
  keywords: [
    "proprietary trading",
    "principal trading",
    "Cayman Islands",
    "Abandoned Capital",
    "quantitative trading",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B1120] text-[#E8E6E1]">
        {children}
      </body>
    </html>
  );
}
