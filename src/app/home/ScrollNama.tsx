"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Satisfy } from "next/font/google";

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
})

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
      {isLocked && <div style={{ height: "100vh" }} />}

      {/* HERO */}
      <section
         className={`h-screen w-full bg-black flex items-center justify-center overflow-hidden transition-all duration-500 ${
          isLocked ? "fixed top-0 left-0 right-0 z-10 translate-y-0" : "relative z-0 -translate-y-10" }`} 
      >
        <div className={`${satisfy.className} name absolute flex flex-col items-center justify-center text-center w-screen`}>
          <motion.h1
            style={{ y: topTextY }}
            className="text-7xl md:text-8xl font-bold leading-none"
          >
            Marsello Meliano 
          </motion.h1>
          <motion.h1
            style={{ y: bottomTextY }}
            className="text-7xl md:text-8xl font-bold leading-none"
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
