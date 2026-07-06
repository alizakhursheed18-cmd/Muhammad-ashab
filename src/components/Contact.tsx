/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, PhoneCall, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate successful form submission to the club
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const whatsappNumber = "923221232815";
  const formattedPhone = "+92 322 1232815";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Universal Boxing Club! I am interested in booking a free trial class. Please let me know the registration steps."
  )}`;

  return (
    <section id="contact" className="py-24 bg-[#090a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            ENTER THE RING
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Contact & Location
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Contact Info + Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Column 1: Info Cards & Quick Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Business Card details */}
            <div className="bg-brand-gray/30 border border-white/5 p-8 rounded-sm space-y-6">
              <div>
                <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mb-2">
                  Universal Boxing Club
                </h3>
                <p className="text-brand-silver/60 text-xs font-mono uppercase tracking-widest">
                  Karachi's Premier Boxing Gym
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                    Address Location
                  </h4>
                  <p className="text-brand-silver text-sm leading-relaxed">
                    V5P8+5P9, Shahra-e-Faisal, Moria Khan Goth, Shah Faisal Colony, Shah Faisal Town, Karachi, Pakistan.
                  </p>
                  <span className="inline-block mt-1 text-xs text-brand-red font-bold uppercase tracking-wide">
                    📍 Located inside Falaknaz Tower
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm mt-1">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                    Phone Contact
                  </h4>
                  <a
                    id="contact-phone-link"
                    href={`tel:${whatsappNumber}`}
                    className="text-brand-silver hover:text-brand-red font-mono text-sm tracking-widest transition-colors"
                  >
                    {formattedPhone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-red/10 text-brand-red rounded-sm mt-1">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                    Business Hours
                  </h4>
                  <p className="text-brand-silver text-sm">
                    Open Daily
                  </p>
                  <p className="text-brand-red font-bold text-sm font-display uppercase tracking-wider mt-0.5">
                    7:00 PM Onwards
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs (Call Now, WhatsApp) */}
            <div className="grid grid-cols-2 gap-4">
              <a
                id="contact-call-btn"
                href={`tel:${whatsappNumber}`}
                className="flex items-center justify-center gap-2.5 py-4 font-display text-xs font-black tracking-widest text-white uppercase bg-brand-red hover:bg-brand-red-dark shadow-[0_4px_15px_rgba(220,38,38,0.3)] skew-x-[-10deg] transition-all duration-300"
              >
                <PhoneCall size={14} className="skew-x-[10deg]" />
                <span className="skew-x-[10deg]">Call Now</span>
              </a>
              <a
                id="contact-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 font-display text-xs font-black tracking-widest text-white uppercase bg-emerald-600 hover:bg-emerald-700 shadow-[0_4px_15px_rgba(16,185,129,0.3)] skew-x-[-10deg] transition-all duration-300"
              >
                <MessageCircle size={14} className="skew-x-[10deg]" />
                <span className="skew-x-[10deg]">WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-7 bg-brand-gray/30 border border-white/5 p-8 rounded-sm relative flex flex-col justify-between">
            <div>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-wider mb-2">
                Send Us a Message
              </h3>
              <p className="text-brand-silver/70 text-xs mb-6">
                Fill out the secure registration contact form below and our cornermen will get back to you regarding class slots or schedules.
              </p>

              {isSubmitted ? (
                <motion.div
                  id="contact-success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-red/10 border border-brand-red/30 p-8 rounded-sm text-center my-8 space-y-4"
                >
                  <div className="w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold font-display animate-bounce">
                    ✓
                  </div>
                  <h4 className="font-display font-black text-lg text-white uppercase tracking-wider">
                    Registration Logged!
                  </h4>
                  <p className="text-brand-silver text-xs leading-relaxed max-w-sm mx-auto">
                    Thank you, champion! We've received your request. Coach Syed or Coach Talha will reach out to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-xs font-mono text-brand-red hover:underline font-bold uppercase tracking-widest"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form id="contact-club-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="form-name" className="block text-[10px] font-mono font-bold text-brand-silver uppercase tracking-widest mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Zain Ahmed"
                      required
                      className="w-full bg-brand-dark/60 border border-white/5 px-4 py-3 rounded-sm text-sm text-white placeholder-brand-silver/35 focus:outline-none focus:border-brand-red/50 transition-colors"
                    />
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form-email" className="block text-[10px] font-mono font-bold text-brand-silver uppercase tracking-widest mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. zain@gmail.com"
                        required
                        className="w-full bg-brand-dark/60 border border-white/5 px-4 py-3 rounded-sm text-sm text-white placeholder-brand-silver/35 focus:outline-none focus:border-brand-red/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="form-phone" className="block text-[10px] font-mono font-bold text-brand-silver uppercase tracking-widest mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0322 1232815"
                        required
                        className="w-full bg-brand-dark/60 border border-white/5 px-4 py-3 rounded-sm text-sm text-white placeholder-brand-silver/35 focus:outline-none focus:border-brand-red/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="form-message" className="block text-[10px] font-mono font-bold text-brand-silver uppercase tracking-widest mb-1.5">
                      How Can We Help You?
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness levels or which classes (Kids, Beginners, Advanced) you want to register for..."
                      required
                      className="w-full bg-brand-dark/60 border border-white/5 px-4 py-3 rounded-sm text-sm text-white placeholder-brand-silver/35 focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 font-display text-xs font-black tracking-widest text-white uppercase bg-brand-red hover:bg-brand-red-dark disabled:opacity-50 skew-x-[-10deg] shadow-[0_4px_15px_rgba(220,38,38,0.25)] transition-all duration-300 focus:outline-none cursor-pointer"
                  >
                    <Send size={14} className="skew-x-[10deg]" />
                    <span className="skew-x-[10deg]">
                      {loading ? "SUBMITTING REQUEST..." : "SUBMIT REGISTRATION"}
                    </span>
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

        {/* Interactive Google Map Embed Frame */}
        <div id="map-embed-container" className="max-w-6xl mx-auto mt-16 rounded-sm overflow-hidden border border-white/5 shadow-2xl relative h-96">
          <iframe
            id="google-map-iframe"
            title="Universal Boxing Club Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.303102434057!2d67.14103507621008!3d24.891822977908885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f67c3365929%3A0xe54d682498db257!2sFalaknaz%20Tower%2C%20Shahrah-e-Faisal%20Rd%2C%20Moria%20Khan%20Goth%20Faisal%20Cantt.%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719875631405!5m2!1sen!2s"
            className="absolute inset-0 w-full h-full border-0 grayscale invert brightness-90 contrast-125"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}
