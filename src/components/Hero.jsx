import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative px-6 md:px-10 lg:px-16 pt-8 pb-24">
      {/* Subtle grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <svg className="absolute left-1/2 top-0 h-[900px] w-[1500px] -translate-x-1/2 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-sm"
        >
          <Star size={14} className="text-yellow-300" />
          <span>Available for freelance & collaborations</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-5xl font-semibold leading-tight text-transparent md:text-6xl lg:text-7xl"
        >
          Crafting immersive web experiences
          <br className="hidden md:block" />
          that blend code and artistry.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300"
        >
          Maulana is a creative developer focused on building delightful, performant interfaces for modern brands and startups. Polished interactions, purposeful motion, and bold aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
          >
            View selected work
            <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
