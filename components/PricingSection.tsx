"use client";

import React, { useState } from "react";
import { Check, Sparkles, ShieldCheck, Dumbbell, Zap, Crown } from "lucide-react";

interface PricingSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function PricingSection({ onOpenTrialModal }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      monthlyPrice: "999",
      quarterlyPrice: "2,499",
      period: "/month",
      popular: false,
      icon: Dumbbell,
      description: "Essential gym access with beginner workout guidance.",
      features: [
        "Gym Access (Full Floor)",
        "Basic Equipment & Cardio",
        "Locker Facility",
        "1 Group Class / Week",
        "General Fitness Assessment",
      ],
      notIncluded: ["Dedicated 1-on-1 PT", "Personal Diet Chart", "Result Refund Guarantee"],
    },
    {
      id: "standard",
      name: "Standard Plan",
      badge: "Popular!",
      monthlyPrice: "1,699",
      quarterlyPrice: "4,499",
      period: "/month",
      popular: true,
      icon: Zap,
      description: "Best for steady fitness progress with personal trainer support.",
      features: [
        "Full Gym Access (All Hours)",
        "All Group Classes (HIIT, Yoga, Zumba)",
        "Personal Training (2x/Month Session)",
        "Custom Nutrition Guidance",
        "Steam & Shower Access",
        "Monthly Body Fat Analysis",
      ],
      notIncluded: ["100% Result Money-Back Guarantee"],
    },
    {
      id: "premium",
      name: "Premium Plan",
      badge: "100% Result Guaranteed",
      monthlyPrice: "2,499",
      quarterlyPrice: "6,499",
      period: "/month",
      popular: false,
      isVip: true,
      icon: Crown,
      description: "Our signature transformation program with 1-on-1 coaching & money-back guarantee.",
      features: [
        "VIP All-Access Pass (Anytime)",
        "All Group Classes Included",
        "Personal Training (4x/Week Dedicated 1-on-1)",
        "Strict Macro-Counted Diet Plan + BCAAs",
        "Bi-Weekly Progress & Body Scans",
        "100% Money-Back Result Guarantee",
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            MEMBERSHIP PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Transparent pricing with no hidden charges. Invest in your body with certified trainers and proven transformation regimens.
          </p>

          {/* Billing Switch */}
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800 mt-6">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#E5A919] text-black shadow-md shadow-[#E5A919]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "quarterly"
                  ? "bg-[#E5A919] text-black shadow-md shadow-[#E5A919]/30"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Quarterly</span>
              <span className="px-1.5 py-0.2 bg-black text-[#E5A919] text-[9px] font-black rounded-full">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;
            const periodText = billingCycle === "monthly" ? "/month" : "/quarter";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#1c1917] to-[#0e0c0b] border-2 border-[#E5A919] shadow-[0_0_40px_rgba(229,169,25,0.25)] scale-105 z-20"
                    : plan.isVip
                    ? "bg-[#101012] border-2 border-[#E5A919]/50 hover:border-[#E5A919] shadow-lg"
                    : "bg-[#0d0d0f] border border-zinc-800 hover:border-zinc-700 shadow-md"
                }`}
              >
                {/* Badge if Popular or VIP */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[#E5A919] text-black text-[11px] font-black uppercase tracking-wider shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-black uppercase text-white">
                      {plan.name}
                    </h3>
                    <div className="w-10 h-10 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/20 flex items-center justify-center text-[#E5A919]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Display */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-zinc-800/80">
                    <span className="text-2xl font-bold text-[#E5A919]">₹</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-gray-400 font-medium ml-1">
                      {periodText}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <div className="w-4 h-4 rounded-full bg-[#E5A919]/20 flex items-center justify-center text-[#E5A919] shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={feature.includes("Guarantee") || feature.includes("1-on-1") ? "font-bold text-amber-300" : ""}>
                          {feature}
                        </span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-500 line-through">
                        <div className="w-4 h-4 rounded-full bg-zinc-800/50 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
                          <Check className="w-3 h-3 opacity-40" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA */}
                <div>
                  <button
                    onClick={() => onOpenTrialModal(`${plan.name} (${billingCycle})`)}
                    className={`w-full py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      plan.popular || plan.isVip
                        ? "bg-[#E5A919] hover:bg-yellow-400 text-black shadow-lg shadow-[#E5A919]/30"
                        : "bg-[#E5A919] hover:bg-yellow-400 text-black shadow-sm"
                    }`}
                  >
                    Get Started
                  </button>

                  {plan.isVip && (
                    <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-amber-300/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E5A919]" />
                      <span>Protected by 100% Refund Guarantee</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
