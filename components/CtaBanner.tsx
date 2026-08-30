"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Dumbbell, Sparkles } from "lucide-react";

interface CtaBannerProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function CtaBanner({ onOpenTrialModal }: CtaBannerProps) {
  return (
    <section className="py-16 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card with Gold Border & Glow */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/60 bg-gradient-to-r from-black via-[#14120f] to-black shadow-[0_0_60px_rgba(229,169,25,0.3)]">
          
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cta_banner.jpg"
              alt="Ready to Transform Your Life"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover opacity-35"
            />
            {/* Gradients to keep text legible */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/85" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Limited Free 1-on-1 Trial Passes Available</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                READY TO TRANSFORM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                  YOUR LIFE?
                </span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Join Brother&apos;s Fitness today and take the first step towards a stronger, healthier you. Get your personal coach, customized diet plan, and our 100% money-back result guarantee.
              </p>

              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-amber-300 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
                <span>No Risk • 100% Refundable if no improvement occurs</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenTrialModal("CTA Transformation Pass")}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-black text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenTrialModal("Free Trial Pass")}
                className="w-full sm:w-auto px-6 py-4 rounded-full border border-zinc-700 bg-black/60 hover:border-[#E5A919] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
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
