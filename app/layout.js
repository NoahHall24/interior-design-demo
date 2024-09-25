'use client';

import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { TransitionProvider, useTransition } from "@/components/TransitionContext";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function TransitionHandler({ children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { startTransition, endTransition, isTransitioning, showContent } = useTransition();

  useEffect(() => {
    startTransition();
    const timer = setTimeout(endTransition, 900); // Slightly shorter than the animation duration
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition key="transition" />}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TransitionProvider>
        <body className={playfair.className}>
          <Header />
          <main className="pt-24"> {/* Adjust pt-24 as needed */}
            <TransitionHandler>
              {children}
            </TransitionHandler>
          </main>
          <Footer />
        </body>
      </TransitionProvider>
    </html>
  );
}