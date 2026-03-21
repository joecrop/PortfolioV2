import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const checkPointer = (e) => {
      const el = e.target;
      const cursor = window.getComputedStyle(el).cursor;
      setIsPointer(cursor === "pointer");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkPointer);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: "spring", stiffness: 800, damping: 40 }}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-screen"
      />
      {/* Outer ring */}
      <motion.div
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          width: isPointer ? 40 : 32,
          height: isPointer ? 40 : 32,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed top-0 left-0 rounded-full border border-accent/50 pointer-events-none z-[9999]"
        style={{ marginLeft: isPointer ? -4 : 0, marginTop: isPointer ? -4 : 0 }}
      />
    </>
  );
}
