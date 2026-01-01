import { motion } from "framer-motion";

export function HoverSlideText({ children, className = "" }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={`relative overflow-hidden cursor-default ${className}`}
    >
      {/* Texto normal */}
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      {/* Texto que sobe */}
      <motion.div
        className="absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
