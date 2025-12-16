import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "osbix",
  description: "Insights That Drive Business Growth - Explore expert articles, case studies, and industry trends",
  icons: {
    icon: "/hero/favicon.svg",
    shortcut: "/hero/favicon.svg",
    apple: "/hero/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
