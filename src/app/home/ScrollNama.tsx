"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const { scrollY } = useScroll();
   const [isLocked, setIsLocked] = useState(true);

  // Animasi teks 
  const topTextY = useTransform(scrollY, [0, 200], [0, -100]);
  const bottomTextY = useTransform(scrollY, [0, 200], [0, 100]);
 const aboutTextOpacity = useTransform(scrollY, [150, 200], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      if (isLocked && y > 220) {
        setIsLocked(false);

      }
      else if (!isLocked && y <= 220) {
        setIsLocked(true)}
    });
    return () => unsubscribe();
  }, [scrollY, isLocked]);

  return (
    <main className="relative w-full text-white">
      {/* HERO */}
      <section
         className={`h-screen w-full bg-black flex items-center justify-center overflow-hidden transition-all duration-500 ${
          isLocked ? "fixed top-0 left-0 right-0 z-10" : "relative z-0" }`} 
      >
        <div className="absolute flex flex-col items-center justify-center text-center">
          <motion.h1
            style={{ y: topTextY }}
            className="text-6xl md:text-8xl font-bold leading-none"
          >
            Marsello Meliano 
          </motion.h1>
          <motion.h1
            style={{ y: bottomTextY }}
            className="text-6xl md:text-8xl font-bold leading-none"
          >
           Maail
          </motion.h1>
        </div>

        <motion.div
          style={{ opacity: aboutTextOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="text-gray-600 text-bold">
            <h1>
            About Me ↓
            </h1>
        </div>
        </motion.div>
      </section>
    </main>
  );
}
