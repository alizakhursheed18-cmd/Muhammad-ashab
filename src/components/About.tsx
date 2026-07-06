/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Eye, Flame, Shield, Users, Trophy } from "lucide-react";

export default function About() {
  const values = [
    { name: "Discipline", icon: Award, desc: "The foundation of champions, both in and out of the boxing ring." },
    { name: "Respect", icon: Shield, desc: "Honor for opponents, coaches, yourself, and the art of boxing." },
    { name: "Fitness", icon: Flame, desc: "Building optimal speed, strength, and explosive physical conditioning." },
    { name: "Confidence", icon: Trophy, desc: "Unlocking inner power and belief through boxing skills." },
    { name: "Community", icon: Users, desc: "A supportive, inclusive family environment open to everyone." }
  ];

  return (
    <section id="about" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Absolute graphic accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            WHO WE ARE
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Universal Boxing Club
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Narrative & Mission/Vision Row along with the real Gym image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text Description & Cards */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight">
                Dedicated to building strength and confidence
              </h3>
              <p className="text-brand-silver text-base md:text-lg leading-relaxed">
                Universal Boxing Club is dedicated to helping individuals improve their fitness, confidence, and boxing skills in a supportive environment. Our experienced coaches provide specialized training for beginners, fitness enthusiasts, and competitive athletes.
              </p>
              <p className="text-brand-silver/80 text-sm leading-relaxed">
                Located inside Falaknaz Tower, we are proud to offer high-caliber training facilities where anyone—regardless of experience level—can lace up their gloves and begin their journey to a healthier, stronger self. Under the guidance of Coach Talha and our dedicated trainers, you will experience authentic boxing workouts that build true physical grit and mental fortitude.
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-brand-gray/50 border border-white/5 p-6 rounded-sm relative overflow-hidden group hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-brand-red/10" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm">
                    <Flame size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2">
                      Our Mission
                    </h4>
                    <p className="text-brand-silver text-xs leading-relaxed">
                      To build stronger, healthier, and more confident individuals through professional boxing training.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-brand-gray/50 border border-white/5 p-6 rounded-sm relative overflow-hidden group hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red/5 rounded-bl-full pointer-events-none transition-all group-hover:bg-brand-red/10" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-lg text-white uppercase tracking-wider mb-2">
                      Our Vision
                    </h4>
                    <p className="text-brand-silver text-xs leading-relaxed">
                      To become one of Pakistan's leading boxing training centers, cultivating champions both in life and in sport.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Real Gym Image Showcase Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-sm overflow-hidden border-2 border-white/5 hover:border-brand-red/40 transition-all duration-500 shadow-[0_4px_30px_rgba(220,38,38,0.15)]"
            >
              {/* Actual Google Maps Photo of Universal Boxing Club */}
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAFRQvG2EUQHL-iHIXo23c9y_13sy7ED_kPucOGiXA-APiDrsjyZVEpp2QPt-bhqlrLhzQIqYGN2zaL1cj4_1aO95vokCvJzYeRgEGGNvOmuvHzqTKR4-B5XN6yDTACUUh9b-x50=w800"
                alt="Universal Boxing Club Entrance"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Ambient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-85" />
              <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Badges/Labels */}
              <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1.5 skew-x-[-10deg] shadow-lg">
                <span className="skew-x-[10deg] block">VERIFIED CLUB PHOTOS</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-mono text-[9px] text-brand-red font-black uppercase tracking-[0.2em] mb-1 block">
                  FALAKNAZ TOWER BRANCH
                </span>
                <h4 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">
                  Official Gym Entrance
                </h4>
                <p className="text-white/70 text-xs leading-relaxed">
                  Welcome to Karachi's top high-intensity boxing facility. Step into the arena and discover your inner champion.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Core Values Section */}
        <div>
          <h3 className="font-display font-black text-center text-xl md:text-2xl text-white uppercase tracking-widest mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-brand-dark border border-white/5 p-6 text-center rounded-sm hover:border-brand-red/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-brand-red/5 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-red/10">
                  <val.icon size={22} />
                </div>
                <h4 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2">
                  {val.name}
                </h4>
                <p className="text-brand-silver/70 text-xs leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
