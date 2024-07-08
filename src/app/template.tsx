"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import LocomotiveScroll from "locomotive-scroll";
export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  // const scroll = new LocomotiveScroll();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return <motion.div ref={containerRef} data-scroll data-scroll-speed="0.3">{children}</motion.div>;
}
