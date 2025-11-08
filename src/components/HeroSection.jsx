import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-emerald-900/30 to-emerald-950/60" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold tracking-tight drop-shadow-xl text-4xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 via-emerald-100 to-white"
        >
          EcoBuddy AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-3 max-w-2xl text-emerald-50/90 text-base sm:text-lg"
        >
          Green Intelligence – AI for a Sustainable Planet. Track your carbon footprint, get personalized eco-tips, and watch your impact glow on a living 3D world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#dashboard"
            className="group relative inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-6 py-3 text-white backdrop-blur-md shadow-xl shadow-emerald-900/30 ring-1 ring-white/10 hover:bg-emerald-400 transition"
          >
            <span className="relative z-10">Open EcoScore Dashboard</span>
            <span className="absolute inset-0 -z-0 rounded-full bg-emerald-300/20 blur-xl group-hover:bg-emerald-200/30 transition" />
          </a>
          <a
            href="#chatbot"
            className="rounded-full px-6 py-3 bg-white/15 text-white ring-1 ring-white/20 hover:bg-white/25 backdrop-blur-md transition"
          >
            Ask the Sustainable Assistant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
