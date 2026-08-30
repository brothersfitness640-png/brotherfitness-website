"use client";

import React from "react";
import { ShieldCheck, CheckCircle, Award, Sparkles, HeartHandshake, ArrowRight, UserCheck, Flame, Scale } from "lucide-react";
import { motion } from "framer-motion";

interface GuaranteeBannerProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function GuaranteeBanner({ onOpenTrialModal }: GuaranteeBannerProps) {
  const steps = [
    {
      num: "01",
      icon: UserCheck,
      title: "1-on-1 Dedicated Trainer",
      desc: "Every candidate gets an assigned personal coach for daily form correction & progressive overload.",
    },
    {
      num: "02",
      icon: Flame,
      title: "Customized Strict Diet",
      desc: "Calorie & macro calculated nutrition chart tailored specifically to your body type & metabolic rate.",
    },
    {
      num: "03",
      icon: Scale,
      title: "Weekly Body Tracking",
      desc: "Bi-weekly body fat %, muscle mass, and inch-loss measurements documented accurately.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Guaranteed Result or 100% Refund",
      desc: "Follow the plan for the program duration. If there's no visible improvement, we refund your full fee with zero questions.",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#070707] via-[#120f09] to-[#070707]">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#E5A919]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Box with Gold Border & Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#1c1917]/95 via-[#12100d]/95 to-black/95 border-2 border-[#E5A919]/60 shadow-[0_0_50px_rgba(229,169,25,0.25)]"
        >
          
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs sm:text-sm font-medium uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Our Unbreakable Promise</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Brothers Fitness Signature Policy</span>
            </div>
          </div>

          {/* Main Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white leading-tight"
              >
                EVERY MEMBER GETS <span className="text-[#E5A919]">PERSONAL TRAINING</span>. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                  NO RESULTS? 100% MONEY BACK.
                </span>
              </motion.h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                At Brother&apos;s Fitness, we don&apos;t just sell gym access — we engineer guaranteed physique transformations. Every single candidate is paired with a dedicated personal trainer and a strict, bio-tailored diet. If you follow our routine and diet and see no measurable physical improvement, <strong className="text-[#E5A919] font-medium">we will refund your entire membership fee. No excuses, no hassle.</strong>
              </p>
            </div>

            {/* Seal / Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-4 flex justify-center"
            >
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-dashed border-[#E5A919] p-3 flex items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#E5A919] via-[#F59E0B] to-[#B45309] text-black flex flex-col items-center justify-center p-4 shadow-2xl font-medium">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
                  <span className="text-xl sm:text-2xl tracking-tighter leading-none">100%</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest leading-tight">MONEY BACK</span>
                  <span className="text-[9px] uppercase tracking-wider font-medium">RESULT GUARANTEE</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4 Execution Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-zinc-800/80 hover:border-[#E5A919]/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-[#E5A919]/60 group-hover:text-[#E5A919]">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/20 flex items-center justify-center text-[#E5A919] group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium uppercase text-white mb-1.5 group-hover:text-[#E5A919] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <CheckCircle className="w-4 h-4 text-[#E5A919]" />
              <span>Documented body composition benchmarks on Day 1 & every 14 days.</span>
            </div>

            <button
              onClick={() => onOpenTrialModal("100% Refund Guarantee Plan")}
              className="px-6 py-2.5 rounded-full bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#E5A919]/20"
            >
              <span>Enroll In Guaranteed Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
