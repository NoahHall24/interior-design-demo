'use client';

import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { TransitionProvider, useTransition } from "@/components/TransitionContext";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const TRANSITION_DURATION = 1400; // Match this with the duration in your PageTransition component

function TransitionHandler({ children }) {
  const pathname = usePathname();
  const { startTransition, endTransition, isTransitioning, showContent } = useTransition();

  useEffect(() => {
    startTransition();
    const timer = setTimeout(endTransition, TRANSITION_DURATION);
    return () => clearTimeout(timer);
  }, [pathname, startTransition, endTransition]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && <PageTransition key="transition" />}
      </AnimatePresence>
      {children}
      {!showContent && (
        <motion.div
          className="fixed inset-0 bg-white z-40"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: TRANSITION_DURATION / 1000 }}
        />
      )}
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <TransitionProvider>
        <body className={playfair.className}>
          <Header />
          <main className="pt-24 bg-[#f5f5f5]">
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