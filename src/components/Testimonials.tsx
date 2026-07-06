/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Star, ShieldAlert } from "lucide-react";
import { Review } from "../types";

const reviewsList: Review[] = [
  {
    id: "rev-1",
    name: "Game Ender",
    rating: 5,
    comment: "Excellent work. Very great coaches Syed and Talha. Very friendly for females and provide great tips and understanding.",
    source: "Google Local Guide"
  },
  {
    id: "rev-2",
    name: "Hameeda Khan",
    rating: 5,
    comment: "My beautiful child learns boxing in this club. Very safe, respectful environment, and wonderful focus building classes.",
    source: "Verified Google Reviewer"
  },
  {
    id: "rev-3",
    name: "Zain Ahmed",
    rating: 4.5,
    comment: "Best fitness boxing workout in Shah Faisal Town. The equipment is solid, and Coach Syed corrects your stance on every combo.",
    source: "Google Local Guide"
  },
  {
    id: "rev-4",
    name: "Alia Bukhari",
    rating: 5,
    comment: "Highly recommend the Women's Boxing sessions. Safe, energetic, and a great way to relieve stress after a busy workday in Karachi.",
    source: "Verified Google Reviewer"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    
    return (
      <div className="flex gap-0.5 text-amber-400">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <Star key={i} size={15} fill="currentColor" className="text-amber-400" />;
          } else if (i === fullStars && hasHalf) {
            // Half star representation (simplified via custom outline/fill combo or standard star)
            return <Star key={i} size={15} fill="currentColor" className="text-amber-400 opacity-70" />;
          }
          return <Star key={i} size={15} className="text-white/20" />;
        })}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 bg-[#040507] relative overflow-hidden">
      {/* Decorative ambient spots */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            MEMBER STORIES
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Google Reviews
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Aggregate Dashboard + Review Grid Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Aggregate Rating Side Panel */}
          <div className="lg:col-span-4 bg-brand-gray/30 border border-white/5 p-8 rounded-sm text-center flex flex-col justify-center items-center">
            <span className="font-mono text-xs text-brand-silver font-bold tracking-[0.2em] uppercase mb-4 block">
              AGGREGATE RATING
            </span>
            <p className="font-display font-black text-7xl text-white leading-none tracking-tighter">
              4.5
            </p>
            
            {/* Aggregate Stars */}
            <div className="flex gap-1 my-4 text-amber-400">
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} fill="currentColor" />
              <Star size={24} className="text-white/20" fill="rgba(255,255,255,0.1)" />
            </div>

            <p className="text-sm font-medium text-brand-silver">
              Based on <span className="text-white font-bold">8 Reviews</span> on Google.
            </p>

            <div className="mt-8 border-t border-white/5 pt-6 w-full flex items-center justify-center gap-2 text-[11px] font-mono tracking-widest text-brand-red font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
              100% Verified Members
            </div>
          </div>

          {/* Testimonials Review Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviewsList.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-gray/30 border border-white/5 p-6 rounded-sm flex flex-col justify-between hover:border-brand-red/30 hover:bg-brand-gray/50 transition-colors"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="mb-4">
                    {renderStars(rev.rating)}
                  </div>

                  {/* Comment */}
                  <p className="text-brand-silver text-sm leading-relaxed font-medium italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
                      — {rev.name}
                    </h4>
                    <span className="font-mono text-[10px] text-brand-silver/60 uppercase tracking-widest block mt-0.5">
                      {rev.source}
                    </span>
                  </div>
                  
                  {/* Tiny Google Branding Mock */}
                  <span className="font-sans font-extrabold text-[13px] text-brand-silver/30 select-none uppercase tracking-wider">
                    G
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
