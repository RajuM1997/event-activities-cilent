import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "JoinUp | Discover & Join Events",
    template: "%s | JoinUp",
  },
  description:
    "JoinUp is a modern events platform to discover, join, and host events. Connect with people through music, tech, sports, and community activities.",
  applicationName: "JoinUp",
  keywords: [
    "JoinUp",
    "events",
    "event platform",
    "local events",
    "meetups",
    "host events",
    "community activities",
    "event booking",
  ],
  authors: [{ name: "JoinUp Team" }],
  creator: "JoinUp",
  publisher: "JoinUp",

  metadataBase: new URL("https://joinup.com"), // replace with real domain

  openGraph: {
    title: "JoinUp | Discover & Join Events",
    description:
      "Find nearby events, join exciting activities, and connect with people using JoinUp.",
    url: "https://joinup.com",
    siteName: "JoinUp",
    images: [
      {
        url: "/og-main.png",
        width: 1200,
        height: 630,
        alt: "JoinUp - Discover Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JoinUp | Discover & Join Events",
    description:
      "Discover events, meet people, and host your own events with JoinUp.",
    images: ["/og-main.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
