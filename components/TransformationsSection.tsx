"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck, Flame, Trophy } from "lucide-react";

interface TransformationsSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function TransformationsSection({ onOpenTrialModal }: TransformationsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const transformations = [
    {
      id: 1,
      name: "Rahul Sharma",
      duration: "6 Months",
      achievement: "-18 kg Fat Loss & 6-Pack Abs",
      image: "/images/trans_1.jpg",
      tag: "Fat Loss & Muscle",
    },
    {
      id: 2,
      name: "Pooja Verma",
      duration: "4 Months",
      achievement: "-14 kg Weight Loss & Glute Sculpt",
      image: "/images/trans_2.jpg",
      tag: "Body Toning",
    },
    {
      id: 3,
      name: "Karthik Raja",
      duration: "8 Months",
      achievement: "+12 kg Pure Lean Muscle Mass",
      image: "/images/trans_3.jpg",
      tag: "Muscle Hypertrophy",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      duration: "5 Months",
      achievement: "-16 kg & Posture Restoration",
      image: "/images/trans_4.jpg",
      tag: "Total Transformation",
    },
  ];

  const testimonials = [
    {
      quote:
        "Joining Brother's Fitness was the best decision I ever made. The trainers are amazing, the personalized diet chart is easy to follow, and the 1-on-1 coaching kept me 100% accountable. The results are real and visible within weeks!",
      author: "Rahul Sharma",
      achievement: "Lost 18kg • 100% Guaranteed Transformation",
      rating: 5,
    },
    {
      quote:
        "I was skeptical about gym promises until I joined Brother's Fitness. Having a dedicated 1-on-1 personal trainer every single day without paying extra exorbitant fees changed everything. My coach corrected my form and made workouts exciting!",
      author: "Pooja Verma",
      achievement: "Lost 14kg • Toned Body & Core",
      rating: 5,
    },
    {
      quote:
        "The money-back guarantee gave me confidence to start, but I never needed to ask for it because the results spoke for themselves! Gained 12kg of clean muscle under Coach David. Best gym environment in town.",
      author: "Karthik Raja",
      achievement: "Gained 12kg Muscle • Powerlifter",
      rating: 5,
    },
  ];

  const handleNext = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="transformations" className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            TRANSFORMATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Every candidate who walks into Brother&apos;s Fitness follows our proven 1-on-1 training blueprint. Here are verified physical transformations from our dedicated members.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transformations.map((t) => (
            <div
              key={t.id}
              className="group relative rounded-2xl overflow-hidden bg-black border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 shadow-xl"
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Tag & Duration */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-[#E5A919] text-black text-[10px] font-black uppercase tracking-wider shadow">
                  {t.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/80 border border-zinc-700 text-white text-[10px] font-bold">
                  {t.duration}
                </span>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h4 className="text-base font-black uppercase text-white leading-tight">
                  {t.name}
                </h4>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#E5A919] mt-1">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>{t.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial Quote Box from Reference Design */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-[#18181b]/95 to-[#0e0e10]/95 border-2 border-[#E5A919]/50 shadow-[0_0_40px_rgba(229,169,25,0.2)] text-center">
          
          {/* Glowing Quote Icon */}
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/40 flex items-center justify-center text-[#E5A919] mb-6">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          {/* Testimonial Text */}
          <p className="text-base sm:text-xl md:text-2xl font-normal text-gray-200 italic leading-relaxed mb-6">
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </p>

          {/* Reviewer & Stars */}
          <div className="space-y-2">
            <h4 className="text-lg font-black text-[#E5A919] uppercase tracking-wider">
              – {testimonials[activeTestimonial].author}
            </h4>
            <p className="text-xs text-gray-400 font-medium">
              {testimonials[activeTestimonial].achievement}
            </p>
            <div className="flex items-center justify-center gap-1 text-[#E5A919] pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E5A919]" />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full bg-black/60 border border-zinc-800 hover:border-[#E5A919] text-gray-300 hover:text-[#E5A919] transition-colors cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === i ? "w-6 bg-[#E5A919]" : "w-2 bg-zinc-700"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2.5 rounded-full bg-black/60 border border-zinc-800 hover:border-[#E5A919] text-gray-300 hover:text-[#E5A919] transition-colors cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
