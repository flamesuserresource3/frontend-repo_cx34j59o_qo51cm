import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function MagneticButton({ href, children, variant = 'primary' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-30, 30], [10, -10]);
  const rotateY = useTransform(x, [-30, 30], [-10, 10]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX / 2);
    y.set(offsetY / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const className =
    variant === 'primary'
      ? 'group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black transition will-change-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]'
      : 'inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition will-change-transform hover:bg-white/10';

  return (
    <motion.a
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x, y, rotateX, rotateY, transformPerspective: 600 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[640px] w-full overflow-hidden px-6 pt-8 md:px-10 lg:px-16">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Light overlays for depth (do not block interaction) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(69,144,255,0.18),rgba(0,0,0,0))] blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-white/80 backdrop-blur-sm"
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
          Immersive, micro‑animated
          <br className="hidden md:block" />
          web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-zinc-200"
        >
          Maulana is a creative developer crafting premium interfaces with playful motion, depth, and clarity. Blending design sensibility with robust engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#work" variant="primary">
            View selected work
            <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
