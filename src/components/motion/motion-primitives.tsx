"use client";

import * as React from "react";
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

/*
 * Reusable, restrained scroll/entrance animations built on Framer Motion.
 * Every primitive animates once on view and inherits the user's
 * prefers-reduced-motion setting (Framer respects it globally via
 * MotionConfig in the layout — we also keep distances small).
 */

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE } },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

type DivMotionProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function FadeIn({ className, delay = 0, ...props }: DivMotionProps) {
  return (
    <motion.div
      className={className}
      variants={fadeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      {...props}
    />
  );
}

export function SlideUp({ className, delay = 0, ...props }: DivMotionProps) {
  return (
    <motion.div
      className={className}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      {...props}
    />
  );
}

/**
 * Stagger — wraps a list of {@link StaggerItem} children so they slide up in
 * sequence. Put it around a grid/flex container; each child must be a
 * StaggerItem (or any element using the shared `visible`/`hidden` variants).
 */
export function Stagger({
  className,
  stagger = 0.08,
  ...props
}: DivMotionProps & { stagger?: number }) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    />
  );
}

export function StaggerItem({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(className)}
      variants={slideUpVariants}
      {...props}
    />
  );
}
