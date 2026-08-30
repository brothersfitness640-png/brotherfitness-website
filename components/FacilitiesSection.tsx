"use client";

import React from "react";
import Image from "next/image";
import { Dumbbell, Activity, Heart, ShieldCheck, ShowerHead, Lock, Car, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface FacilitiesSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function FacilitiesSection({ onOpenTrialModal }: FacilitiesSectionProps) {
  const facilities = [
    {
      id: "strength-area",
      title: "Strength Area",
      desc: "Olympic power cages, plate-loaded machines, and dedicated deadlift platforms.",
      image: "/images/facility_equipment.jpg",
      icon: Dumbbell,
      badge: "Heavy Lifting",
    },
    {
      id: "cardio-area",
      title: "Cardio Area",
      desc: "Commercial treadmills, stairmasters, assault bikes, and rowing machines with interactive screens.",
      image: "/images/facility_spacious.jpg",
      icon: Heart,
      badge: "Stamina & Heart",
    },
    {
      id: "free-weights",
      title: "Free Weights Zone",
      desc: "Extensive dumbbell sets ranging from 2.5kg to 60kg, ez-curl bars, and multi-angle benches.",
      image: "/images/program_strength.jpg",
      icon: Dumbbell,
      badge: "Hypertrophy",
    },
    {
      id: "functional-training",
      title: "Functional Training",
      desc: "Dedicated turf track, kettlebells, medicine balls, battle ropes, and TRX suspension bays.",
      image: "/images/program_functional.jpg",
      icon: Activity,
      badge: "Agility & Core",
    },
    {
      id: "changing-rooms",
      title: "Changing Rooms & Lockers",
      desc: "Spacious, private, and secure digital lockers with clean changing areas and grooming mirrors.",
      image: "/images/facility_pt.jpg",
      icon: Lock,
      badge: "Secure & Clean",
    },
    {
      id: "shower-facilities",
      title: "Shower Facilities",
      desc: "Hot & cold luxury rain showers, hygienic amenities, and continuous fresh ventilation.",
      image: "/images/facility_nutrition.jpg",
      icon: ShowerHead,
      badge: "Hygiene Standard",
    },
    {
      id: "parking",
      title: "Dedicated Parking",
      desc: "Ample, hassle-free on-site parking for both two-wheelers and four-wheelers with 24/7 security.",
      image: "/images/why_choose_trainers.jpg",
      icon: Car,
      badge: "Free & Safe",
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E5A919]/10 rounded-full blur-[180px] pointer-events-none" />

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
            FACILITIES & EQUIPMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
            World-Class Infrastructure
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Equipped with state-of-the-art strength machinery, hygienic private amenities, and dedicated workout zones engineered for peak performance.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/85 border border-zinc-700 backdrop-blur-md flex items-center gap-1.5 text-[10px] font-medium text-amber-400">
                    <Icon className="w-3 h-3 text-[#E5A919]" />
                    <span>{fac.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-medium uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-[#E5A919]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Available to all members</span>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Quick Tour CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.56 }}
            whileHover={{ y: -6 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-[#1c1917] to-black border-2 border-[#E5A919] flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E5A919] text-black flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-medium uppercase text-white mb-2">
                Experience in Person
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Take a complimentary guided walkthrough of our lifting floor, cardio decks, and recovery bays.
              </p>
            </div>

            <button
              onClick={() => onOpenTrialModal("Facility Tour Pass")}
              className="mt-6 w-full py-3 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all shadow-md shadow-[#E5A919]/30 cursor-pointer"
            >
              Book Free Gym Tour
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

