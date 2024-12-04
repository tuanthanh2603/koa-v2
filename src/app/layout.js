"use client"
import localFont from "next/font/local";
import "./globals.css";
import { usePathname } from 'next/navigation';
import Navigation from "../components/Navigation"
import Footer from "@/components/Footer";
const geistSans = localFont({
  src: "./fonts/Proxima-Nova-Thin.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/Proxima-Nova-Thin.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <html lang="en">
      <head>
        <title>KOA Studio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {!isHomePage && <Navigation />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
