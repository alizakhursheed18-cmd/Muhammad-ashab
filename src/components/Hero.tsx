/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function Hero() {
  const handleScrollTo = (targetId: string) => {
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          id="hero-bg-img"
          src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAHJUyrz0h4WH9MEH4wRFDlmHl_BUfTBU2ofGTzZT7vYBWKM9siyI7MTfY17VC5iZ6GHHf6EZ2D-a1bkimwTP2a8uM632f5djYIKbCagu0hzSSzZp0J9gxpQWRG6Yfdxwei5gf0L=w1600"
          alt="Universal Boxing Club Gym"
          className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-layer overlay masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#040507]/60 to-[#040507]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040507]/90 via-[#040507]/40 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Boxing Ring Grid accents */}
      <div className="absolute inset-0 z-1 pointer-events-none opacity-20">
        <div className="absolute left-10 top-1/4 w-[1px] h-32 bg-brand-red" />
        <div className="absolute right-10 bottom-1/4 w-[1px] h-32 bg-brand-red" />
        <div className="absolute left-10 top-1/4 w-8 h-[1px] bg-brand-red" />
        <div className="absolute right-10 bottom-1/4 w-8 h-[1px] bg-brand-red" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
        <div className="max-w-3xl">
          {/* Accent Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red rounded-sm mb-6 uppercase tracking-[0.3em] font-display text-[11px] font-black skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              EST. 2026 • KARACHI, PAKISTAN
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-[0.9] mb-6"
          >
            Train Like a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-red font-extrabold stroke-text">
              Champion
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-2xl border-l-2 border-brand-red pl-4"
          >
            Build strength, confidence, speed, and discipline at Universal Boxing Club. Whether you're a beginner or an experienced fighter, our expert coaches will help you reach your full potential.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <button
              id="hero-cta-join"
              onClick={() => handleScrollTo("#membership")}
              className="px-8 py-4 font-display text-sm font-extrabold tracking-widest text-white uppercase bg-brand-red skew-x-[-10deg] border border-transparent shadow-[0_4px_25px_rgba(220,38,38,0.5)] hover:bg-brand-red-dark hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-105 transition-all duration-300 focus:outline-none"
            >
              <span className="skew-x-[10deg] block">JOIN TODAY</span>
            </button>
            <button
              id="hero-cta-trial"
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-4 font-display text-sm font-extrabold tracking-widest text-white uppercase bg-transparent skew-x-[-10deg] border-2 border-white/20 hover:border-brand-red hover:bg-brand-red/5 hover:scale-105 transition-all duration-300 focus:outline-none"
            >
              <span className="skew-x-[10deg] block">BOOK FREE TRIAL</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Meta Stats Banner for high premium feel */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-brand-darker to-transparent pt-12 pb-6 z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 border-t border-white/5 pt-6 text-center">
            <div>
              <p className="font-display font-black text-3xl text-white">⭐ 4.5/5</p>
              <p className="font-mono text-xs text-brand-silver tracking-widest uppercase mt-1">Google Rating (8 Reviews)</p>
            </div>
            <div className="border-x border-white/5">
              <p className="font-display font-black text-3xl text-white uppercase tracking-wider">7:00 PM</p>
              <p className="font-mono text-xs text-brand-silver tracking-widest uppercase mt-1">Daily Training Session Hours</p>
            </div>
            <div>
              <p className="font-display font-black text-3xl text-brand-red">100%</p>
              <p className="font-mono text-xs text-brand-silver tracking-widest uppercase mt-1">Real Boxing & Grit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
