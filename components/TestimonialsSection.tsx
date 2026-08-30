"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialsSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function TestimonialsSection({ onOpenTrialModal }: TestimonialsSectionProps) {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Lost 18kg • 6-Pack Abs",
      rating: 5,
      photo: "/images/trans_1.jpg",
      review:
        "Joining Brother's Fitness was the best decision I ever made. The 1-on-1 personal coaching kept me accountable every single day, and the customized macro diet was effortless to follow. Real, visible results in 12 weeks!",
    },
    {
      id: 2,
      name: "Pooja Verma",
      role: "Lost 14kg • Core & Toning",
      rating: 5,
      photo: "/images/trans_2.jpg",
      review:
        "Having a dedicated trainer for every workout session without paying huge extra personal trainer charges was a game changer. The gym is super clean, motivating, and the results are 100% genuine.",
    },
    {
      id: 3,
      name: "Karthik Raja",
      role: "Gained 12kg Lean Muscle Mass",
      rating: 5,
      photo: "/images/trans_3.jpg",
      review:
        "The 100% money-back result guarantee gave me complete confidence to start. Coach David corrected my deadlift and bench posture completely. The best gym environment in the city!",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Lost 16kg • Posture Restored",
      rating: 5,
      photo: "/images/trans_4.jpg",
      review:
        "From day one, the trainers took care of my previous back injury and scaled all exercises safely. Today I am at my lowest body fat and highest stamina ever. Highly recommend Brother's Fitness!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#070707] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
            Real People. Real Results.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Read verified feedback from our members who achieved life-changing body transformations with our 1-on-1 personal coaching.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-[#E5A919] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5A919]" />
                  ))}
                </div>

                {/* Short Review Text */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Reviewer Profile: Photo, Name & Role */}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E5A919]/80 shrink-0 bg-zinc-900">
                  <Image
                    src={rev.photo}
                    alt={rev.name}
                    fill
                    sizes="48px"
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-[#E5A919] transition-colors leading-tight">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-amber-300/90 font-normal block mt-0.5">
                    {rev.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-4 rounded-2xl bg-gradient-to-r from-[#1c1917] to-[#0c0c0e] border border-[#E5A919]/40 flex flex-wrap items-center justify-center gap-3 text-center text-xs text-gray-300"
        >
          <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
          <span>Over <strong>500+ members transformed</strong> backed by our <strong>100% Money-Back Result Guarantee</strong>.</span>
        </motion.div>

      </div>
    </section>
  );
}

