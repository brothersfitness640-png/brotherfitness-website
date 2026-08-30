"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, UserCheck, Award, Star, Play, ShieldCheck, CheckCircle, X } from "lucide-react";

interface WhyChooseUsSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function WhyChooseUsSection({ onOpenTrialModal }: WhyChooseUsSectionProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const stats = [
    {
      icon: Users,
      value: "1000+",
      label: "Happy Members",
    },
    {
      icon: UserCheck,
      value: "20+",
      label: "Expert Trainers",
    },
    {
      icon: Award,
      value: "10+",
      label: "Experience (Yrs)",
    },
    {
      icon: Star,
      value: "5.0 ★",
      label: "Rating (Google)",
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text + Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
                More Than Just a Gym
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                At Brother&apos;s Fitness, we offer more than just workouts. We build an individuality that supports your goals, motivates your daily journey and celebrates your physical transformation.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-gray-200">
                <CheckCircle className="w-5 h-5 text-[#E5A919] shrink-0 mt-0.5" />
                <span><strong>1-on-1 Dedicated Mentorship:</strong> Direct coaching, reps tracking, and daily form perfection.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-200">
                <CheckCircle className="w-5 h-5 text-[#E5A919] shrink-0 mt-0.5" />
                <span><strong>Precision Macro Diets:</strong> Customized South & North Indian meal blueprints without starvation.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-200">
                <CheckCircle className="w-5 h-5 text-[#E5A919] shrink-0 mt-0.5" />
                <span><strong>Unconditional Refund Guarantee:</strong> Follow our plan — if there&apos;s no result, 100% money is refunded.</span>
              </div>
            </div>

            {/* 4 Stats Grid from Reference Image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-zinc-800">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <div className="w-8 h-8 rounded-lg bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-gray-400 font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenTrialModal("Free Consultation")}
                className="px-7 py-3 rounded-full bg-[#E5A919] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E5A919]/25 cursor-pointer"
              >
                Meet Our Certified Coaches
              </button>
            </div>
          </div>

          {/* Right Column: Trainers Photo Card with Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/50 bg-black shadow-2xl group">
              <div className="relative h-[380px] sm:h-[460px] w-full">
                <Image
                  src="/images/why_choose_trainers.jpg"
                  alt="Brother's Fitness Trainers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E5A919] text-black flex items-center justify-center shadow-[0_0_40px_rgba(229,169,25,0.7)] group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Play Gym Video Tour"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black text-black ml-1" />
                </button>
              </div>

              {/* Bottom Tag Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                <div>
                  <span className="text-[11px] font-bold text-[#E5A919] uppercase tracking-wider block">
                    ELITE COACHING SQUAD
                  </span>
                  <h4 className="text-xl font-black uppercase text-white">
                    Brother&apos;s Fitness Team
                  </h4>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-black/80 border border-[#E5A919]/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
                  <span>Certified PTs</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Tour Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-2xl bg-zinc-900 border border-[#E5A919] p-6 text-white shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold uppercase mb-4 text-[#E5A919]">
              Brother&apos;s Fitness - Experience the Energy
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center">
              <Image
                src="/images/why_choose_trainers.jpg"
                alt="Gym Video preview"
                fill
                className="object-cover opacity-70"
              />
              <div className="relative z-10 text-center p-6 bg-black/70 rounded-2xl border border-[#E5A919]/40 max-w-md">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#E5A919] text-black flex items-center justify-center mb-3">
                  <Play className="w-6 h-6 fill-black ml-0.5" />
                </div>
                <h4 className="font-bold text-white mb-1">Interactive Facility Tour</h4>
                <p className="text-xs text-gray-300 mb-4">
                  Step inside our state-of-the-art conditioning floor, heavy lifting racks, and personal coaching bays.
                </p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    onOpenTrialModal("Live Gym Visit");
                  }}
                  className="px-5 py-2 rounded-full bg-[#E5A919] text-black font-extrabold text-xs uppercase"
                >
                  Schedule an In-Person Gym Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
