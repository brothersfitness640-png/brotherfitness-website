"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Flame, Dumbbell, Zap, Activity, Check, X, ShieldCheck } from "lucide-react";

interface ProgramsSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function ProgramsSection({ onOpenTrialModal }: ProgramsSectionProps) {
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);

  const programs = [
    {
      id: "strength",
      title: "Strength Training",
      category: "Heavy Lifting & Power",
      description: "Build muscle, increase raw strength and boost your peak physical performance.",
      image: "/images/program_strength.jpg",
      icon: Dumbbell,
      highlights: [
        "Progressive overload periodization",
        "Form correction on Squat, Bench & Deadlift",
        "Central nervous system power training",
        "Dedicated 1-on-1 spotter & coach",
      ],
    },
    {
      id: "fatloss",
      title: "Fat Loss",
      category: "High Calorie Burn & Tone",
      description: "Burn stubborn calories, lose visceral fat and achieve a lean, sculpted athletic body.",
      image: "/images/program_fatloss.jpg",
      icon: Flame,
      highlights: [
        "Metabolic conditioning & HIIT circuits",
        "Targeted deficit nutrition chart",
        "Weekly body composition tracking",
        "100% Results or Refund Guarantee",
      ],
    },
    {
      id: "muscle",
      title: "Muscle Building",
      category: "Hypertrophy & Aesthetics",
      description: "Gain size, muscular density, and supreme confidence with our personalized hypertrophy plan.",
      image: "/images/program_muscle.jpg",
      icon: Zap,
      highlights: [
        "High-volume hypertrophy protocols",
        "Protein synthesis & macro timing guide",
        "Time-under-tension muscle sculpting",
        "Personal coach accountability every set",
      ],
    },
    {
      id: "functional",
      title: "Functional Training",
      category: "Mobility & Core Endurance",
      description: "Improve dynamic mobility, joint flexibility, stamina, and day-to-day athletic endurance.",
      image: "/images/program_functional.jpg",
      icon: Activity,
      highlights: [
        "Kettlebell, TRX & plyometric mastery",
        "Injury prevention & posture realignment",
        "Agility, balance & core stability",
        "Customized scaling for all fitness levels",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            OUR PROGRAMS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Fitness for Every Goal
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Choose the perfect program that fits your fitness journey and lifestyle. All programs include 1-on-1 personal guidance and custom meal planning.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group relative rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20"
              >
                {/* Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/80 border border-zinc-700 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-bold text-amber-400">
                    <Icon className="w-3 h-3" />
                    <span>{program.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between text-center">
                  <div>
                    <h3 className="text-lg font-black uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-5">
                      {program.description}
                    </p>
                  </div>

                  {/* Explore Button from Reference Image */}
                  <button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full py-2.5 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#E5A919]/20 cursor-pointer"
                  >
                    Explore
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#18181b] to-[#0c0c0e] border border-[#E5A919] p-6 text-white shadow-2xl">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-[11px] font-bold text-[#E5A919] uppercase tracking-wider">
                  {selectedProgram.category}
                </span>
                <h3 className="text-2xl font-black uppercase text-white">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {selectedProgram.description}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E5A919]">
                What&apos;s Included:
              </span>
              {selectedProgram.highlights.map((h: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                  <Check className="w-4 h-4 text-[#E5A919] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 text-xs text-amber-200 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#E5A919] shrink-0" />
              <span>Includes 100% Money-Back Results Guarantee when following the assigned diet & routine.</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  onOpenTrialModal(title);
                }}
                className="flex-1 py-3 rounded-xl bg-[#E5A919] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                Join This Program
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-3 rounded-xl border border-zinc-800 text-gray-400 hover:text-white text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
