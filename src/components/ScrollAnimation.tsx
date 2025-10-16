import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "fadeInSlow";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation = ({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    fadeInSlow: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const getTransition = () => {
    if (variant === "fadeInSlow") {
      return {
        duration: duration * 1.5,
        delay,
        ease: "easeIn",
      };
    }
    return {
      duration,
      delay,
      ease: "easeOut",
    };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={getTransition()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
