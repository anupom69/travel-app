"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WordReveal({ value, className }: { value: string, className: string }) {
  const scrollTarget = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start 0.95", "end 0.60"],
  });

  const words = value.split(" ");

  return (
    <p ref={scrollTarget} className={`${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative 4 px-[1.5px]">
      <span className="absolute opacity-10">
        {children} {` `}
      </span>
      <motion.span className="" style={{ opacity: opacity }}>
        {children} {` `}
      </motion.span>
      {/* {" "} */}
    </span>
  );
}
