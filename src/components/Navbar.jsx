import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <header id="top" className="px-6 md:px-10 lg:px-16 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-white/80 to-white/20 ring-1 ring-white/20">
            <div className="absolute inset-0 animate-pulse bg-[conic-gradient(from_90deg_at_50%_50%,#7dd3fc,#60a5fa,#a78bfa,#f472b6,#7dd3fc)] opacity-20" />
          </div>
          <span className="font-medium tracking-wide text-white/90">Maulana</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#work" className="text-sm text-zinc-300 transition-colors hover:text-white">Work</a>
          <a href="#about" className="text-sm text-zinc-300 transition-colors hover:text-white">About</a>
          <a href="#contact" className="text-sm text-zinc-300 transition-colors hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:hello@maulana.pro" aria-label="Email" className="rounded-full p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white">
            <Mail size={18} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href="https://www.maulana.pro" target="_blank" rel="noreferrer" aria-label="Website" className="rounded-full p-2 text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/5 hover:text-white">
            <Globe size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
