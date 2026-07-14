"use client";

import { motion, useInView, Variants } from "motion/react";
import { useRef } from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before this element starts animating, in seconds. Use to stagger a list. */
  delay?: number;
  /** How far (px) the content travels while fading in. */
  yOffset?: number;
  duration?: number;
  once?: boolean;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(6px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

/**
 * Magic UI-style scroll/mount reveal: blurs + fades + rises into place.
 * Drop this around any block to give it an entrance animation.
 *
 * <BlurFade delay={0.1}><h2>Title</h2></BlurFade>
 */
export default function BlurFade({
  children,
  className,
  delay = 0,
  yOffset = 8,
  duration = 0.5,
  once = true,
}: BlurFadeProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { ...defaultVariants.hidden, y: yOffset },
        visible: { ...defaultVariants.visible, y: 0 },
      }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
