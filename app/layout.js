'use client';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Cairo } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";

import { ToastContainer } from 'react-toastify';
const cairo = Cairo({ subsets: ["latin"] });

// Uncomment if you need metadata
// export const metadata = { 
//   title: "Naser's Academy Platform",
//   description: "Generated by create next app",
// };
export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const hideHeaderFooter = [
    "/sign-in", 
    "/sign-up", 
    "/Forget-pass", 
    "/Rest-pass", 
    "/verify-code", 
    "/Success-reg"
  ].includes(pathname);
  return (
      <html lang="en">
          <body className={`cairo-font ${cairo.className}`}>
            {!hideHeaderFooter && <Header />}
            {children} 
            <ToastContainer />
            {!hideHeaderFooter && <Footer />} 
          </body>
        </html>
  );
}
