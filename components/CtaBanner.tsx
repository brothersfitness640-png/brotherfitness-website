"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles, Dumbbell } from "lucide-react";

interface CtaBannerProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function CtaBanner({ onOpenTrialModal }: CtaBannerProps) {
  return (
    <section className="py-20 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/60 bg-gradient-to-r from-black via-[#14120f] to-black shadow-[0_0_60px_rgba(229,169,25,0.3)]">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta_banner.jpg"
              alt="Start Your Fitness Journey"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-medium uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Free 1-on-1 Trial Passes Available</span>
              </div>

              {/* Exact Requested Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-tight text-white leading-tight">
                Your Stronger Self <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                  Starts Today.
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Take the decisive first step toward your ultimate physique. Receive dedicated 1-on-1 personal coaching, custom nutrition plans, and our ironclad 100% money-back result guarantee.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-amber-300 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
                <span>Zero Risk • Guaranteed Results or 100% Fee Refund</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              {/* Exact Requested Primary CTA */}
              <button
                onClick={() => onOpenTrialModal("CTA Start Journey")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Your Fitness Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => onOpenTrialModal("Free 1-on-1 Trial Pass")}
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-zinc-700 bg-black/60 hover:border-[#E5A919] text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Book Free Trial
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
