import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 lg:px-16 py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-md">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Let’s build something remarkable together
        </motion.h3>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          Have a project in mind or looking for a creative developer to elevate your brand? I’m open to freelance work, collaborations, and full-time opportunities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@maulana.pro" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            <Mail size={16} />
            Email me
          </a>
          <a href="tel:+62800000000" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
            <Phone size={16} />
            Book a call
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
            <Github size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/90 backdrop-blur-md transition hover:bg-white/10">
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
