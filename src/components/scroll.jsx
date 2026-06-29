// components/ScrollProgress.jsx
import { useScroll, useSpring, motion } from "motion/react";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll(); // tracks entire page scroll

  // useSpring makes it smooth instead of jumpy
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-1 bg-black origin-left"
    />
  );
};

export default ScrollProgress;