"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll({ multiplier: 1 });
    })();
  }, []);

  return <motion.div>{children}</motion.div>;
}
