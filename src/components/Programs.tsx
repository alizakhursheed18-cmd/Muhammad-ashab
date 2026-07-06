/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Program } from "../types";

const programs: Program[] = [
  {
    id: "beginner-boxing",
    title: "Beginner Boxing",
    description: "Perfect for newcomers learning boxing fundamentals. Focus on stance, basic punches, footwork, and defensive guards.",
    benefits: ["Stance & guard positions", "Jab, cross, hook basics", "Core athletic balance", "Safe introductory drills"],
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "advanced-boxing",
    title: "Advanced Boxing",
    description: "Improve speed, technique, endurance, and ring strategy. Tailored for fighters ready for sparring and competitive preparation.",
    benefits: ["Counter-punch mechanics", "Full contact sparring", "Ring generalship & strategy", "High speed endurance"],
    image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80&w=600"
  },

  {
    id: "kids-boxing",
    title: "Kids Boxing",
    description: "Fun, disciplined classes that teach fitness, coordination, respect, and self-confidence. Led by certified supportive coaches.",
    benefits: ["Coordination & reflexes", "Confidence & team building", "Anti-bullying self-defense", "Discipline & mental focus"],
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "fitness-boxing",
    title: "Fitness Boxing",
    description: "High-intensity boxing workouts focused on weight loss, cardiorespiratory health, muscle endurance, and overall conditioning.",
    benefits: ["Fat-burning HIIT style", "Heavy bag combo drills", "High-energy calorie burn", "No partner sparring needed"],
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-[#040507] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            CHOOSE YOUR FIGHT
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Our Training Programs
          </h2>
          <p className="text-brand-silver mt-4 max-w-xl mx-auto">
            From absolute beginners looking to build confidence, to athletes seeking competitive sparring—we have a class crafted for you.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-brand-gray/30 border border-white/5 rounded-sm overflow-hidden flex flex-col hover:border-brand-red/30 hover:shadow-[0_4px_25px_rgba(220,38,38,0.15)] transition-all duration-300"
            >
              {/* Card Image with Red hover zoom overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-4 left-4 bg-brand-red text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 font-bold skew-x-[-10deg]">
                  <span className="skew-x-[10deg] block">ACTIVE CLASS</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display font-bold text-xl text-white uppercase tracking-wider mb-3 group-hover:text-brand-red transition-colors">
                  {program.title}
                </h3>
                <p className="text-brand-silver/80 text-sm leading-relaxed mb-6 flex-1">
                  {program.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2.5 text-xs text-brand-silver">
                      <span className="flex-shrink-0 w-4 h-4 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
