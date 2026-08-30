"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Compass, Sparkles, ArrowRight, ShieldCheck, Dumbbell, Award } from "lucide-react";

interface AboutGymSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function AboutGymSection({ onOpenTrialModal }: AboutGymSectionProps) {
  return (
    <section id="about-gym" className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of the Gym */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/50 shadow-2xl group bg-black">
              <div className="relative h-[400px] sm:h-[480px] w-full">
                <Image
                  src="/images/why_choose_trainers.jpg"
                  alt="Brother's Fitness Gym and Coaches"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Floating Guarantee Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 border border-[#E5A919]/40 backdrop-blur-md flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-medium text-[#E5A919] uppercase tracking-wider block">
                    FOUNDED IN EXCELLENCE
                  </span>
                  <h4 className="text-base font-medium text-white uppercase">
                    Brother&apos;s Fitness Club
                  </h4>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#E5A919] text-black text-xs font-medium uppercase">
                  10+ Yrs Legacy
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short Introduction, Philosophy, Mission & Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                ABOUT THE GYM
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Redefining Personal Fitness
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Brother&apos;s Fitness was established with a singular mission: to eliminate the confusion and intimidation of traditional gyms by providing <strong className="text-white">dedicated 1-on-1 personal coaching to every single candidate</strong> who steps through our doors.
              </p>
            </div>

            {/* Gym Philosophy */}
            <div className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5A919] uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Consistency, science-backed progressive overload, and personalized nutrition create guaranteed, lasting transformations — not extreme starvation or solitary workouts.
              </p>
            </div>

            {/* Mission / Vision */}
            <div className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-medium text-[#E5A919] uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Our Mission & Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                To empower members of all fitness levels with expert guidance, world-class equipment, and a 100% money-back result commitment.
              </p>
            </div>

            {/* Actions: Learn More & Free Trial */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="px-7 py-3 rounded-full bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E5A919]/25 flex items-center gap-2"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => onOpenTrialModal("About Gym Trial")}
                className="px-7 py-3 rounded-full border border-zinc-700 hover:border-[#E5A919] text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Book a Gym Visit
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
