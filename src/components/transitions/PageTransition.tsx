"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { LoadingAnimation } from "./LoadingAnimation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(true);

  // Intercept navigation
  const handleNavigation = useCallback((path: string) => {
    setIsLoading(true);
    setShowContent(false);
    setNextPath(path);
  }, []);

  useEffect(() => {
    // Add click event listener to all anchor tags
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (link?.href && !link.href.startsWith("javascript:") && !link.target) {
        e.preventDefault();
        const path = link.href.replace(window.location.origin, "");
        handleNavigation(path);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleNavigation]);

  useEffect(() => {
    if (isLoading && nextPath) {
      const timer = setTimeout(() => {
        router.push(nextPath);
        setIsLoading(false);
        setShowContent(true);
        setNextPath(null);
      }, 2000); // Animation duration

      return () => clearTimeout(timer);
    }
  }, [isLoading, nextPath, router]);

  // Export the handleNavigation function to be used programmatically
  (window as any).navigateWithTransition = handleNavigation;

  return (
    <AnimatePresence mode="wait">
      {isLoading && <LoadingAnimation />}
      {showContent && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
