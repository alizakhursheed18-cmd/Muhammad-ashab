/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Zap, Shield, Heart } from "lucide-react";
import { Coach } from "../types";

const coaches: Coach[] = [
  {
    id: "coach-talha",
    name: "Coach Talha",
    role: "Lead Support Trainer",
    bio: "Highly friendly, patient, and motivating. Famous for helping beginners, children, and fitness enthusiasts build tremendous skills and confidence from day one.",
    specialties: ["Beginner Confidence", "Self-Defense Drills", "Kids Boxing Coordination", "Fitness Conditioning"],
    image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHU4IzA8TiD3lZQX5_MmgyjjK9J9iicTulXPK5iKcdEdEqwhiI-MMbAXqgi8x1M-kNRnYGicaJp3sH-jA0R-HFdd6vI5BLYVJigVl4Cx9ouVHy5tn1RRgwZJIMnHaK_P4KDXkUG=w800",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 bg-[#040507] relative overflow-hidden">
      {/* Absolute abstract layout decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-red/5 skew-y-12 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            MEET THE CORNERMEN
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Our Expert Coaches
          </h2>
          <p className="text-brand-silver mt-4">
            Learn from skilled, dedicated mentors committed to tracking your athletic growth, fitness stamina, and defensive skills.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Coaches Row */}
        <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
          {coaches.map((coach, idx) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-brand-gray/30 border border-white/5 rounded-sm overflow-hidden flex flex-col md:flex-row group hover:border-brand-red/30 transition-all duration-300"
            >
              {/* Photo Section */}
              <div className="w-full md:w-2/5 h-80 md:h-auto relative overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-dark via-brand-dark/20 to-transparent" />
              </div>

              {/* Bio Details Section */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-0.5 bg-brand-red" />
                    <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest">
                      {coach.role}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider mb-4">
                    {coach.name}
                  </h3>
                  <p className="text-brand-silver/90 text-sm leading-relaxed mb-6">
                    {coach.bio}
                  </p>
                </div>

                {/* Specialties Badges */}
                <div className="border-t border-white/5 pt-4">
                  <h4 className="font-mono text-[10px] text-brand-silver font-black uppercase tracking-widest mb-3">
                    CORE SPECIALTIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {coach.specialties.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-sans font-bold text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-sm uppercase tracking-wider"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
