/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import {
  Users,
  Smile,
  Zap,
  Shield,
  Dumbbell,
  Clock,
  Heart,
  Sparkles,
  CreditCard,
  Crown
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const features: Feature[] = [
  {
    title: "Professional Coaches",
    description: "Train under licensed, champion-level Coach Talha and our dedicated training staff, focused entirely on your technique and goals.",
    icon: Users
  },
  {
    title: "Friendly Environment",
    description: "Experience a motivating, zero-ego community that supports and pushes you to succeed every single day.",
    icon: Smile
  },
  {
    title: "Beginner Friendly",
    description: "No prior experience required. We start from absolute scratch, covering stance, movement, and standard punch mechanics.",
    icon: Sparkles
  },
  {
    title: "Modern Equipment",
    description: "Premium heavy bags, dynamic double-end bags, speedbags, full-sized competition ring, and professional training mitts.",
    icon: Dumbbell
  },
  {
    title: "Strength & Conditioning",
    description: "Beyond pure boxing, improve cardiorespiratory output, explode your core strength, and develop high athletic stamina.",
    icon: Zap
  },
  {
    title: "Flexible Training Sessions",
    description: "Convenient evening slots open daily from 7:00 PM onwards, allowing you to train seamlessly around your active schedule.",
    icon: Clock
  },
  {
    title: "Safe Learning Environment",
    description: "Safety is our paramount rule. Sparring is strictly supervised with high-grade protective headgear, wraps, and premium gloves.",
    icon: Shield
  },
  {
    title: "Community Support",
    description: "Join an active brotherhood/sisterhood of fitness and boxing enthusiasts. Share tips, stay accountable, and grow together.",
    icon: Heart
  },
  {
    title: "Affordable Membership Plans",
    description: "Transparent, budget-friendly tier choices, letting you select exactly what you need without long-term locks.",
    icon: CreditCard
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Decorative vertical red bars representing boxing ring ropes on borders */}
      <div className="absolute right-0 top-1/4 w-1 h-48 bg-gradient-to-b from-brand-red to-transparent opacity-30" />
      <div className="absolute left-0 bottom-1/4 w-1 h-48 bg-gradient-to-t from-brand-red to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            WHY FIGHT WITH US
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            What Sets Us Apart
          </h2>
          <p className="text-brand-silver mt-4">
            At Universal Boxing Club, we combine high-level professional athletic coaching with an accessible, supportive, and safe gym environment.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-brand-gray/30 border border-white/5 p-6 rounded-sm hover:border-brand-red/30 hover:bg-brand-gray/50 transition-all duration-300 flex flex-col group"
            >
              <div className="w-10 h-10 bg-brand-red/10 text-brand-red rounded-sm flex items-center justify-center mb-4 border border-brand-red/10 group-hover:scale-110 transition-transform">
                <feat.icon size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-white uppercase tracking-wider mb-2 group-hover:text-brand-red transition-colors">
                {feat.title}
              </h3>
              <p className="text-brand-silver/75 text-xs leading-relaxed flex-1">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
