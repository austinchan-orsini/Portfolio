import { motion } from "framer-motion";

/** Slide children in when they enter the viewport. */
export default function SlideInOnView({
  children,
  direction = "left",   // "left" | "right" | "up" | "down"
  offset = 100,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
  amount = 0.5,         // portion of element that must be visible
  once = true,          // play once by default
  className,
  style,
}) {
  const x =
    direction === "left" ? -offset :
    direction === "right" ? offset : 0;

  const y =
    direction === "up" ? -offset :
    direction === "down" ? offset : 0;

    return (
    <motion.div
        className={className}
        style={{
        willChange: "transform,opacity",
        overflow: "hidden",          // ← no inner scrollbars
        maxWidth: "100%",
        ...style
        }}
        initial={{ opacity: 0, x, y }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration, delay, ease }}
        viewport={{ amount, once }}
    >
        {children}
    </motion.div>
    );
}
