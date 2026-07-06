/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Check, ShieldCheck } from "lucide-react";
import { MembershipPlan } from "../types";

const plans: MembershipPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    price: "3,500",
    period: "month",
    features: [
      "Group Training Classes",
      "Fitness Equipment Access",
      "Locker & Shower Facility",
      "3 Sessions per Week",
      "Standard Coach Guidance"
    ]
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: "5,000",
    period: "month",
    features: [
      "Unlimited Weekly Classes",
      "Full Gym Ring Access",
      "Advanced Technique Coaching",
      "Custom Conditioning Routines",
      "Supportive Member Community",
      "Daily 7:00 PM Slot Entry"
    ],
    popular: true
  },
  {
    id: "premium",
    name: "Premium Fighter Plan",
    price: "10,000",
    period: "month",
    features: [
      "Elite Fighter Seminars",
      "Priority Group Pad Work",
      "Customized Nutrition Outlines",
      "Strict Progress Track logs",
      "Exclusive Locker Reservation",
      "Priority Corner Support"
    ]
  }
];

export default function Membership() {
  const handleSelectPlan = (planName: string) => {
    // Scroll to contact form and populate message or custom selection state
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactEl.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      // Attempt to populate the contact form plan selection if exists
      const messageInput = document.getElementById("form-message") as HTMLTextAreaElement | null;
      if (messageInput) {
        messageInput.value = `Hi Universal Boxing Club! I would like to join the ${planName}. Please provide details on how to register.`;
        messageInput.focus();
      }
    }
  };

  return (
    <section id="membership" className="py-24 bg-[#090a0f] relative overflow-hidden">
      {/* Dynamic Background Circle */}
      <div className="absolute right-[-100px] top-[-100px] w-80 h-80 bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-bold tracking-[0.3em] text-brand-red uppercase">
            CHAMPION PRICING
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight mt-3">
            Membership Plans
          </h2>
          <p className="text-brand-silver mt-4">
            Invest in yourself. Select a flexible, transparent membership plan that fits your boxing stamina, budget, and physical goals.
          </p>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-6" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-sm flex flex-col justify-between p-8 ${
                plan.popular
                  ? "bg-brand-gray border-2 border-brand-red shadow-[0_4px_30px_rgba(220,38,38,0.25)] scale-105 z-10"
                  : "bg-brand-gray/40 border border-white/5 hover:border-brand-red/30 transition-all duration-300"
              }`}
            >
              {/* Popular Badge banner */}
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-red text-white text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 skew-x-[-10deg] shadow-[0_2px_10px_rgba(220,38,38,0.4)]">
                  <span className="skew-x-[10deg] block">MOST POPULAR</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-black text-lg text-brand-silver uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                
                {/* Plan Price */}
                <div className="flex items-baseline mb-6">
                  <span className="font-mono text-2xl text-brand-red font-bold">Rs.</span>
                  <span className="font-display font-black text-5xl text-white tracking-tight ml-1">
                    {plan.price}
                  </span>
                  <span className="text-brand-silver/60 text-xs font-mono lowercase ml-2">
                    / {plan.period}
                  </span>
                </div>

                {/* Features Divider */}
                <div className="w-full h-[1px] bg-white/5 mb-6" />

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-brand-silver">
                      <span className="flex-shrink-0 mt-0.5">
                        <Check size={16} className="text-brand-red" strokeWidth={3} />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Join Button */}
              <button
                id={`membership-join-btn-${plan.id}`}
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-4 font-display text-xs font-black tracking-widest uppercase skew-x-[-10deg] transition-all duration-300 ${
                  plan.popular
                    ? "bg-brand-red text-white hover:bg-brand-red-dark shadow-[0_4px_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                    : "bg-white/5 text-white hover:bg-brand-red hover:text-white hover:shadow-[0_4px_15px_rgba(220,38,38,0.25)]"
                }`}
              >
                <span className="skew-x-[10deg] block">JOIN NOW</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Security / Promise Stamp */}
        <div className="text-center mt-12 flex items-center justify-center gap-2 text-brand-silver/60 text-xs">
          <ShieldCheck size={14} className="text-brand-red" />
          <span>No registration locked contracts. Pause or upgrade plans anytime.</span>
        </div>

      </div>
    </section>
  );
}
