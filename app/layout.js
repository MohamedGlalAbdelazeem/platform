'use client';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Cairo } from "next/font/google";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import "./globals.css";
import { ToastContainer } from 'react-toastify';
 

const cairo = Cairo({ subsets: ["latin"] });

// Uncomment if you need metadata
// export const metadata = {
//   title: "Naser's Academy Platform",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Check if the current page is one where you want to hide the header/footer
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
        {!hideHeaderFooter && <Header />} {/* Conditionally render Header */}
        {children} {/* Render the page content */}
        <ToastContainer />
        {!hideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
      </body>
    </html>
  );
}
