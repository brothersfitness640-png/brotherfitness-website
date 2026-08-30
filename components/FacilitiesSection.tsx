"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Dumbbell, Maximize, UserCheck, Coffee, Sparkles, CheckCircle2 } from "lucide-react";

interface FacilitiesSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function FacilitiesSection({ onOpenTrialModal }: FacilitiesSectionProps) {
  const [activeFacility, setActiveFacility] = useState<number | null>(null);

  const facilities = [
    {
      id: 1,
      title: "Premium Equipment",
      desc: "Top quality imported biomechanical machines for every muscle group.",
      image: "/images/facility_equipment.jpg",
      icon: Dumbbell,
      features: ["Imported Olympic Barbells", "Pin-loaded Resistance Stacks", "Heavy Dumbbells up to 60kg", "Power Racks & Deadlift Platforms"],
    },
    {
      id: 2,
      title: "Spacious Workouts",
      desc: "Large, clean, and air-conditioned high-ceiling workout areas with rubber shock flooring.",
      image: "/images/facility_spacious.jpg",
      icon: Maximize,
      features: ["10,000+ Sq.Ft Open Floor", "Dedicated Functional Turf", "HEPA Filtered Fresh Air", "Separate Cardio & Free Weights Zone"],
    },
    {
      id: 3,
      title: "Personal Training Zone",
      desc: "Exclusive 1-on-1 coaching bays for uninterrupted form correction & tracking.",
      image: "/images/facility_pt.jpg",
      icon: UserCheck,
      features: ["Dedicated 1-on-1 PT Bays", "Bi-Weekly InBody Scans", "Progressive Reps & Weight Tracking", "100% Result / Refund Guarantee"],
    },
    {
      id: 4,
      title: "Nutrition & Fuel Bar",
      desc: "Fresh protein shakes, pre-workout energy drinks, healthy meals, and certified supplements.",
      image: "/images/facility_nutrition.jpg",
      icon: Coffee,
      features: ["Custom Whey & Vegan Shakes", "Pre & Post Workout Fuel", "Certified Genuine Supplements", "Custom Macro Meal Preps"],
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            OUR FACILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Equipped with state-of-the-art strength machinery, dedicated 1-on-1 coaching zones, and luxury recovery amenities.
          </p>
        </div>

        {/* 4 Facilities Cards Grid matching Reference Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                onClick={() => setActiveFacility(activeFacility === fac.id ? null : fac.id)}
                className="group relative rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20 cursor-pointer"
              >
                {/* Facility Image */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={fac.image}
                    alt={fac.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/80 border border-[#E5A919]/50 flex items-center justify-center text-[#E5A919]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base font-black uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">
                      {fac.desc}
                    </p>
                  </div>

                  {/* Micro features list */}
                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/80">
                    {fac.features.slice(0, 2).map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3 h-3 text-[#E5A919] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenTrialModal("Gym Tour & Trial Pass")}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-black text-xs uppercase tracking-wider shadow-lg shadow-[#E5A919]/25 hover:brightness-110 transition-all cursor-pointer"
          >
            Visit Our Gym For a Free 1-on-1 Tour
          </button>
        </div>

      </div>
    </section>
  );
}
