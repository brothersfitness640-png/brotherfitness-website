"use client";

import React from "react";
import Image from "next/image";
import { Users, Award, FileText, Apple, ArrowRight, ShieldCheck, Dumbbell, Sparkles, UserCheck } from "lucide-react";

interface HeroSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function HeroSection({ onOpenTrialModal }: HeroSectionProps) {
  const highlights = [
    {
      icon: Award,
      title: "10+ Years",
      desc: "Gym Experience",
    },
    {
      icon: Users,
      title: "500+ Members",
      desc: "Transformed Lives",
    },
    {
      icon: UserCheck,
      title: "Certified Trainers",
      desc: "1-on-1 Dedicated Coaches",
    },
    {
      icon: ShieldCheck,
      title: "100% Guaranteed",
      desc: "Results or Full Refund",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-12 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E5A919]/20 to-black border border-[#E5A919]/40 text-[#E5A919] text-xs md:text-sm font-medium tracking-wide uppercase shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>Personal Training For Every Member</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium uppercase tracking-tight text-white leading-[1.05]">
              STRONGER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#E5A919] to-[#D97706] drop-shadow-[0_0_25px_rgba(229,169,25,0.4)]">
                EVERYDAY
              </span> <br />
              BETTER YOU
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg font-normal max-w-xl leading-relaxed">
              Transform your body, elevate your mind and become the strongest version of yourself with customized 1-on-1 coaching.
            </p>

            {/* Guarantee Highlight Callout */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#1c1917]/90 to-[#0c0a09]/90 border border-[#E5A919]/40 flex items-center gap-3.5 max-w-xl shadow-lg shadow-black/60">
              <div className="w-10 h-10 rounded-xl bg-[#E5A919]/20 border border-[#E5A919] flex items-center justify-center shrink-0 text-[#E5A919]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-medium text-white uppercase tracking-wider text-[11px] block text-[#E5A919]">
                  🔥 100% Results Or Money-Back Guarantee
                </span>
                <span className="text-gray-300">
                  Follow our strict diet & daily workout plan — if no visible improvement occurs, <strong className="text-white">your full fee is refunded.</strong>
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenTrialModal("Personal Training Membership")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenTrialModal("Free 1-on-1 Trial Session")}
                className="px-8 py-3.5 rounded-full border-2 border-zinc-700 bg-black/40 hover:border-[#E5A919] hover:bg-[#E5A919]/10 text-white font-medium text-sm uppercase tracking-wider transition-all cursor-pointer"
              >
                Book a Free Trial
              </button>
            </div>

            {/* 4 Feature Badges from Reference Image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 w-full max-w-2xl border-t border-zinc-800/80">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-start p-2.5 rounded-xl bg-zinc-950/60 border border-zinc-900 hover:border-[#E5A919]/40 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#E5A919]/10 flex items-center justify-center text-[#E5A919] mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-white leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[10px] text-gray-400 leading-tight">
                      {item.desc}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Hero Visual: Large Prominent Full Artwork Image */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end relative w-full mt-6 lg:mt-0">
            {/* Ambient Background Halo Glow */}
            <div className="absolute w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#E5A919]/20 blur-[130px] pointer-events-none" />

            <div className="relative w-full max-w-[620px] lg:max-w-[720px] xl:max-w-[820px] h-[460px] sm:h-[580px] lg:h-[660px] xl:h-[720px] flex items-center justify-center group">
              <Image
                src="/img/heronew.png"
                alt="Brother's Fitness Hero Artwork"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 820px"
                className="object-contain drop-shadow-[0_0_55px_rgba(229,169,25,0.45)] group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

