import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Background gradient decor */}
      <div aria-hidden className="fixed inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(69,144,255,0.25),rgba(0,0,0,0))] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-20 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,83,112,0.2),rgba(0,0,0,0))] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-10 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(88,255,192,0.18),rgba(0,0,0,0))] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <footer className="px-6 md:px-10 lg:px-16 py-10 text-sm text-zinc-400">
          <div className="flex items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Maulana — All rights reserved.</p>
            <a href="#top" className="hover:text-white transition-colors">Back to top ↑</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
