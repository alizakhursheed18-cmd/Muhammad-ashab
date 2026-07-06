/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { GalleryItem } from "../types";

const galleryItems: GalleryItem[] = [
  {
    id: "gal-ring",
    category: "ring",
    title: "Competition Boxing Ring",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-train-1",
    category: "training",
    title: "Coach Pad Workout",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-sparring",
    category: "sparring",
    title: "Heavy Sparring Session",
    image: "https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-kids",
    category: "kids",
    title: "Kids Reflex Training",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-workout",
    category: "workouts",
    title: "Heavy Bag Combo Drills",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "gal-equip",
    category: "equipment",
    title: "Elite Gloves & Mitts",
    image: "https://images.unsplash.com/photo-1516208226553-90d56569eb2e?auto=format&fit=crop&q=80&w=800"
  }
];

type FilterCategory = "all" | GalleryItem["category"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on active category
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (id: string) => {
    const idx = filteredItems.findIndex(item => item.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const categories: { label: string; val: FilterCategory }[] = [
    { label: "All Photos", val: "all" },
    { label: "Boxing Ring", val: "ring" },
    { label: "Training", val: "training" },
    { label: "Sparring", val: "sparring" },
    { label: "Kids", val: "kids" },
    { label: "Group", val: "workouts" },
    { label: "Equipment", val: "equipment" }
  ];

  return (
    <section id="gallery" className="py-24 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            VISUAL GRIT
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Club Gallery
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              id={`gallery-filter-${cat.val}`}
              key={cat.val}
              onClick={() => setActiveFilter(cat.val)}
              className={`px-4 py-2 font-display text-[10px] md:text-xs font-extrabold tracking-widest uppercase transition-colors skew-x-[-10deg] border ${
                activeFilter === cat.val
                  ? "bg-brand-red text-white border-brand-red"
                  : "bg-white/5 text-brand-silver border-white/5 hover:border-brand-red/30 hover:text-white"
              }`}
            >
              <span className="skew-x-[10deg] block">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          id="gallery-grid"
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                id={`gallery-item-${item.id}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-64 overflow-hidden rounded-sm cursor-pointer border border-white/5 hover:border-brand-red/40 transition-colors"
                onClick={() => openLightbox(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark & red gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/10 to-transparent opacity-70" />
                <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Maximize Icon */}
                <div className="absolute top-4 right-4 p-2 bg-brand-red/90 text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={16} />
                </div>

                {/* Title and Category info inside bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-mono text-[9px] text-brand-red font-bold uppercase tracking-widest mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="font-display font-black text-sm text-white uppercase tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm select-none"
          >
            {/* Close button */}
            <button
              id="lightbox-close"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-brand-red text-white transition-colors duration-200 z-50 focus:outline-none rounded-full"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous slide button */}
            <button
              id="lightbox-prev"
              onClick={showPrev}
              className="absolute left-6 p-3 bg-white/5 hover:bg-brand-red text-white transition-colors duration-200 z-50 focus:outline-none rounded-full"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next slide button */}
            <button
              id="lightbox-next"
              onClick={showNext}
              className="absolute right-6 p-3 bg-white/5 hover:bg-brand-red text-white transition-colors duration-200 z-50 focus:outline-none rounded-full"
              aria-label="Next Slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Image & Info panel */}
            <motion.div
              id="lightbox-content"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center"
            >
              <img
                id="lightbox-image"
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] max-w-full object-contain rounded-sm border border-white/10 shadow-[0_4px_50px_rgba(220,38,38,0.2)]"
                referrerPolicy="no-referrer"
              />
              
              {/* Photo Meta Footer inside Lightbox */}
              <div className="mt-6 text-center">
                <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">
                  {filteredItems[lightboxIndex].category} Photo ({lightboxIndex + 1} / {filteredItems.length})
                </span>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mt-1.5">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
