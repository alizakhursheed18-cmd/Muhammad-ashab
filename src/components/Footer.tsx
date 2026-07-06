/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Facebook, Instagram, Youtube, MapPin, Phone, Clock, ArrowUp, ExternalLink } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
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

  const mapDirectionLink = "https://maps.app.goo.gl/9bNfCgR3gZ6f8z448";

  return (
    <footer id="club-footer" className="bg-brand-darker border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          
          {/* Col 1: Club info & description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-brand-red flex items-center justify-center font-display font-black text-base text-white tracking-tighter skew-x-[-10deg]">
                U
              </div>
              <span className="font-display font-black text-base tracking-wider text-white uppercase">
                UNIVERSAL BOXING CLUB
              </span>
            </div>
            <p className="text-brand-silver/70 text-xs leading-relaxed max-w-sm">
              Karachi's premier training center dedicated to building absolute fitness, defensive speed, and mental grit. Champion-level guidance for beginners, kids, and female members.
            </p>
            
            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-social-fb"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-brand-silver flex items-center justify-center transition-colors"
                aria-label="Facebook Profile"
              >
                <Facebook size={16} />
              </a>
              <a
                id="footer-social-insta"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-brand-silver flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={16} />
              </a>
              <a
                id="footer-social-yt"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-brand-red hover:text-white text-brand-silver flex items-center justify-center transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick navigation links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-3">
              QUICK NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "#home")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Home Base
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "#about")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  About Club
                </a>
                <a
                  href="#programs"
                  onClick={(e) => handleLinkClick(e, "#programs")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Our Programs
                </a>
                <a
                  href="#coaches"
                  onClick={(e) => handleLinkClick(e, "#coaches")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Our Coaches
                </a>
              </div>
              <div className="space-y-2">
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, "#gallery")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Gym Gallery
                </a>
                <a
                  href="#membership"
                  onClick={(e) => handleLinkClick(e, "#membership")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Memberships
                </a>
                <a
                  href="#reviews"
                  onClick={(e) => handleLinkClick(e, "#reviews")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Google Reviews
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="block text-brand-silver/75 hover:text-brand-red text-xs transition-colors"
                >
                  Contact Page
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Business Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-3">
              BUSINESS HOURS
            </h4>
            <div className="space-y-2 text-brand-silver/70 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday — Sunday</span>
                <span className="text-white font-bold font-mono">7:00 PM Onwards</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span>Kids Classes</span>
                <span className="text-brand-red font-bold font-mono">Slots Available</span>
              </div>
              <div className="flex justify-between">
                <span>Fitness Boxing</span>
                <span className="text-brand-red font-bold font-mono">Slots Available</span>
              </div>
            </div>
          </div>

          {/* Col 4: Gym Contact details */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-widest border-l-2 border-brand-red pl-3">
              GYM ADDRESS
            </h4>
            <ul className="space-y-3.5 text-brand-silver/75 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-red mt-0.5 flex-shrink-0" />
                <span>
                  Falaknaz Tower, Shahra-e-Faisal, Faisal Colony, Karachi, Pakistan.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-brand-red flex-shrink-0" />
                <a href="tel:+923221232815" className="hover:text-brand-red font-mono">
                  +92 322 1232815
                </a>
              </li>
              <li>
                <a
                  id="footer-maps-link"
                  href={mapDirectionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-red hover:underline font-bold uppercase tracking-wider text-[10px] font-mono mt-1"
                >
                  Open in Google Maps <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-brand-silver/50 text-center sm:text-left">
            © 2026 Universal Boxing Club. All Rights Reserved. Managed in Karachi, Pakistan.
          </p>
          
          {/* Scroll to Top helper button */}
          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-brand-red hover:text-white text-brand-silver/80 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors focus:outline-none"
            aria-label="Back to top"
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
