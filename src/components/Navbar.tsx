/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Coaches", href: "#coaches" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events for navbar opacity & active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current visible section
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If top of section is close to top of viewport
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const offset = 80; // height of sticky navbar
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
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center font-display font-black text-xl text-white tracking-tighter skew-x-[-10deg] shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105 transition-transform">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-wider text-white uppercase leading-none">
                UNIVERSAL
              </span>
              <span className="font-display font-bold text-[11px] tracking-[0.25em] text-brand-red uppercase leading-none mt-1">
                BOXING CLUB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  id={`nav-link-${link.label.toLowerCase()}`}
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 font-display text-xs font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-brand-red ${
                    isActive ? "text-brand-red" : "text-white/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call to action button */}
          <div className="hidden lg:block">
            <a
              id="nav-join-button"
              href="#membership"
              onClick={(e) => handleLinkClick(e, "#membership")}
              className="inline-flex items-center justify-center px-5 py-2.5 font-display text-xs font-extrabold tracking-widest text-white uppercase bg-brand-red skew-x-[-10deg] border border-transparent shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:bg-brand-red-dark hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] hover:scale-105 transition-all duration-300"
            >
              <span className="skew-x-[10deg]">JOIN CLUB</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/80 hover:text-brand-red focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#090a0f] border-b border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    id={`mobile-nav-link-${link.label.toLowerCase()}`}
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`block px-4 py-3 rounded-md font-display text-sm font-bold tracking-widest uppercase transition-colors ${
                      isActive
                        ? "text-brand-red bg-white/5"
                        : "text-white/80 hover:text-brand-red hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  id="mobile-nav-join-button"
                  href="#membership"
                  onClick={(e) => handleLinkClick(e, "#membership")}
                  className="block w-full py-3 text-center font-display text-sm font-extrabold tracking-widest text-white uppercase bg-brand-red shadow-[0_4px_15px_rgba(220,38,38,0.4)]"
                >
                  JOIN CLUB
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
