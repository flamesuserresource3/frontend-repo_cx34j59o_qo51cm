import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WORKS = [
  {
    title: 'Interactive Brand Microsite',
    tag: 'WebGL • Motion • Performance',
    link: 'https://www.maulana.pro',
    accent: 'from-cyan-300/20 via-blue-400/10 to-purple-300/10',
  },
  {
    title: 'E-commerce Experience',
    tag: 'UX • React • Headless',
    link: 'https://www.maulana.pro',
    accent: 'from-pink-300/20 via-rose-300/10 to-amber-300/10',
  },
  {
    title: 'SaaS Dashboard',
    tag: 'Design Systems • Data Viz',
    link: 'https://www.maulana.pro',
    accent: 'from-emerald-300/20 via-teal-300/10 to-cyan-300/10',
  },
  {
    title: 'Portfolio Experience',
    tag: 'Awwwards vibes • Interactions',
    link: 'https://www.maulana.pro',
    accent: 'from-indigo-300/20 via-violet-300/10 to-fuchsia-300/10',
  },
];

function WorkCard({ title, tag, link, accent }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
    >
      <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="relative z-10">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white/90">{title}</h3>
            <p className="mt-1 text-sm text-zinc-300">{tag}</p>
          </div>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-black">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="h-40 w-full rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))] ring-1 ring-white/10" />
      </div>
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-125" />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white/90 md:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">A curation of recent projects spanning interactive marketing sites, product interfaces, and immersive visuals.</p>
          </div>
          <a href="https://www.maulana.pro" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/10 md:inline-flex">
            View full archive
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {WORKS.map((w, i) => (
            <WorkCard key={i} {...w} />
          ))}
        </div>
      </div>
    </section>
  );
}
