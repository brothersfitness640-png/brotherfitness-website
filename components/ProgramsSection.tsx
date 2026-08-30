"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dumbbell, Flame, Zap, UserCheck, Activity, Heart, Users, Check, X, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      description: "Build raw muscular power, increase compound lift numbers, and strengthen bone density.",
      image: "/img/1.jpeg",
      icon: Dumbbell,
      highlights: [
        "Periodized progressive overload program",
        "Form correction on Squats, Deadlifts & Bench Press",
        "CNS neurological power development",
        "Dedicated spotter and personal form coach",
      ],
    },
    {
      id: "weight-loss",
      title: "Weight Loss",
      category: "Fat Burn & Toning",
      description: "Torch calories, shed stubborn body fat, and sculpt a lean, athletic physique with strict nutrition.",
      image: "/img/2.jpeg",
      icon: Flame,
      highlights: [
        "Metabolic conditioning and HIIT intervals",
        "Customized caloric deficit diet chart",
        "Bi-weekly body fat and inch measurements",
        "100% Money-Back Result Guarantee",
      ],
    },
    {
      id: "muscle-building",
      title: "Muscle Building",
      category: "Hypertrophy & Aesthetics",
      description: "Maximize muscle hypertrophy, achieve balanced proportions, and sculpt aesthetic definition.",
      image: "/img/3.jpeg",
      icon: Zap,
      highlights: [
        "High-volume hypertrophy programming",
        "Protein synthesis and nutrient timing protocol",
        "Mind-muscle connection & time under tension",
        "Weekly progressive overload tracking",
      ],
    },
    {
      id: "personal-training",
      title: "Personal Training",
      category: "1-on-1 Elite Coaching",
      description: "Our signature offering: dedicated 1-on-1 coaching for every candidate with customized workouts.",
      image: "/img/5.jpeg",
      icon: UserCheck,
      highlights: [
        "Assigned personal coach for every workout",
        "Real-time posture and biomechanics feedback",
        "Personalized macro nutrition blueprint",
        "100% Results or Full Money Refund",
      ],
    },
    {
      id: "crossfit-functional",
      title: "CrossFit / Functional Training",
      category: "Mobility & Stamina",
      description: "Dynamic functional movement, kettlebell circuits, plyometrics, and athletic conditioning.",
      image: "/img/6.jpeg",
      icon: Activity,
      highlights: [
        "Kettlebell, battle ropes, and TRX training",
        "Core strength and dynamic joint stability",
        "Agility, endurance, and everyday functional power",
        "Scalable for beginners to advanced athletes",
      ],
    },
    {
      id: "cardio",
      title: "Cardio Endurance",
      category: "Stamina & Heart Health",
      description: "Improve cardiovascular endurance, lung capacity, and metabolic rate with modern cardio zones.",
      image: "/img/7.jpeg",
      icon: Heart,
      highlights: [
        "High-tech treadmills, stairmasters & rowing machines",
        "Targeted heart-rate zone conditioning",
        "Low-impact and high-intensity stamina options",
        "Active recovery and fat burn acceleration",
      ],
    },
    {
      id: "group-classes",
      title: "Group Classes",
      category: "HIIT, Zumba & Yoga",
      description: "High-energy group workouts, rhythmic Zumba fitness, and restorative power yoga sessions.",
      image: "/img/8.jpeg",
      icon: Users,
      highlights: [
        "Daily scheduled group HIIT and Tabata workouts",
        "Fun calorie-burning Zumba dance sessions",
        "Restorative Yoga and flexibility flows",
        "High-energy, community-driven motivation",
      ],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#E5A919]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            PROGRAMS & TRAINING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
            Fitness for Every Goal
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Explore our specialized fitness and transformation programs. Every program includes personalized coaching and strict nutrition guidance.
          </p>
        </motion.div>

        {/* 7 Programs Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            const isFeatured = program.id === "personal-training";
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group rounded-3xl bg-[#121214] border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20 ${
                  isFeatured
                    ? "border-2 border-[#E5A919] bg-gradient-to-b from-[#1c1917] to-[#121214] sm:col-span-2 lg:col-span-1"
                    : "border-zinc-800 hover:border-[#E5A919]"
                }`}
              >
                {/* Image - Clean view without obstructing overlay labels */}
                <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    decoding="async"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                </div>

                {/* Content Section with Category Label above Title */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category Label and Popular Tag placed above the title */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/30 text-[10px] font-medium text-[#E5A919]">
                        <Icon className="w-3 h-3" />
                        <span>{program.category}</span>
                      </div>

                      {isFeatured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#E5A919] text-black text-[9px] font-medium uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-medium uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-5 line-clamp-2">
                      {program.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="flex-1 py-2.5 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                    >
                      Explore
                    </button>
                    <button
                      onClick={() => onOpenTrialModal(program.title)}
                      className="px-3 py-2.5 rounded-xl border border-zinc-800 hover:border-[#E5A919] text-gray-300 hover:text-white text-xs font-medium uppercase cursor-pointer"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#18181b] to-[#0c0c0e] border border-[#E5A919] p-6 text-white shadow-2xl">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4">
              <Image
                src={selectedProgram.image}
                alt={selectedProgram.title}
                fill
                sizes="(max-width: 640px) 100vw, 500px"
                loading="lazy"
                decoding="async"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="text-[11px] font-medium text-[#E5A919] uppercase tracking-wider">
                  {selectedProgram.category}
                </span>
                <h3 className="text-2xl font-medium uppercase text-white">
                  {selectedProgram.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              {selectedProgram.description}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-medium uppercase tracking-wider text-[#E5A919]">
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
                className="flex-1 py-3 rounded-xl bg-[#E5A919] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
              >
                Join This Program
              </button>
              <button
                onClick={() => setSelectedProgram(null)}
                className="px-4 py-3 rounded-xl border border-zinc-800 text-gray-400 hover:text-white text-xs font-medium uppercase"
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
