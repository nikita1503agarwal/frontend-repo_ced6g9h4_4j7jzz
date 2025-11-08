import React from 'react';
import { motion } from 'framer-motion';

const FooterCTA = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b from-emerald-950 to-black text-emerald-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-xl text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold">Join the EcoBuddy movement</h3>
          <p className="mt-2 text-emerald-100/80">Challenge friends, unlock achievements, and plant real trees with your impact.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="rounded-full bg-emerald-500 px-6 py-3 text-white hover:bg-emerald-400">Start Free</a>
            <a href="#" className="rounded-full bg-white/10 px-6 py-3 text-white ring-1 ring-white/10 hover:bg-white/20">Go Premium</a>
          </div>
        </motion.div>
        <div className="mt-10 flex items-center justify-between text-xs text-emerald-100/60">
          <span>© {new Date().getFullYear()} EcoBuddy AI. Green Intelligence for all.</span>
          <div className="flex gap-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
