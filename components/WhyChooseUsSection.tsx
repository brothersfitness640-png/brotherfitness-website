"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, UserCheck, HeartHandshake, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Shield } from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function WhyChooseUsSection({ onOpenTrialModal }: WhyChooseUsSectionProps) {
  const features = [
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      desc: "Imported, biomechanically engineered Olympic strength machines and premium free weights designed to maximize muscle tension while protecting your joints.",
    },
    {
      icon: UserCheck,
      title: "Certified Trainers",
      desc: "Experienced, nationally accredited fitness trainers dedicated to guiding your form, progressive overload, and injury prevention on every set.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Training",
      desc: "Our signature hallmark: every member receives dedicated 1-on-1 personal coaching and custom macro-calculated diet plans tailored to their body type.",
    },
    {
      icon: Sparkles,
      title: "Flexible Memberships",
      desc: "Affordable, transparent pricing without hidden lock-ins. Choose monthly or quarterly plans backed by our 100% money-back result guarantee.",
    },
    {
      icon: ShieldCheck,
      title: "Clean & Safe Environment",
      desc: "Immaculate hygiene, sanitized equipment after every session, air-conditioned workout bays, and a motivating, positive fitness atmosphere.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
            The Brother&apos;s Fitness Advantage
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We don&apos;t just provide a workout space — we provide a complete transformation system with unmatched personal guidance, modern machinery, and guaranteed results.
          </p>
        </div>

        {/* 5 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20 ${
                  idx === 2 ? "md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#1c1917] to-[#121214] border-[#E5A919]/40" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-[#E5A919] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Standard for every member</span>
                </div>
              </div>
            );
          })}

          {/* Quick Trial Card in Grid */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#E5A919]/20 via-black to-black border-2 border-[#E5A919] flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E5A919] flex items-center justify-center text-black mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium uppercase text-white mb-2">
                100% Money-Back Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Follow our strict diet and daily 1-on-1 routine. If no physical improvement is achieved, get 100% of your membership fees refunded.
              </p>
            </div>

            <button
              onClick={() => onOpenTrialModal("Why Choose Us Trial")}
              className="mt-6 w-full py-3 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all shadow-md shadow-[#E5A919]/30 cursor-pointer"
            >
              Claim Free 1-on-1 Pass
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
