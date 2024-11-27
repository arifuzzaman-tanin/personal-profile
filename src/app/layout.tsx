"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { UserProfileProvider } from "@/context/ProfileContext";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Dynamically load Bootstrap JS on the client side only
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js"); 
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <UserProfileProvider>
          {children}
        </UserProfileProvider>
      </body>
    </html>
  );
}
