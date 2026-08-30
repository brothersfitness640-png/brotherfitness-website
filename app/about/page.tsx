"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ShieldCheck, Dumbbell, Users, Target, Award, HeartHandshake, CheckCircle2, ArrowRight, Sparkles, Scale } from "lucide-react";

export default function AboutPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("About Page Consultation");

  const handleOpenTrialModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  const coaches = [
    {
      name: "David Lee",
      role: "Head Strength & Hypertrophy Coach",
      experience: "12+ Years Exp",
      specialty: "Powerlifting, Muscle Hypertrophy & Biomechanics",
      image: "/images/program_strength.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Chief Sports Nutritionist",
      experience: "8+ Years Exp",
      specialty: "Clinical Dietetics, Macro Cycling & Fat Loss",
      image: "/images/blog_meals.jpg",
    },
    {
      name: "Vikram Reddy",
      role: "Senior Conditioning Coach",
      experience: "10+ Years Exp",
      specialty: "HIIT, Athletic Cross-Training & Mobility",
      image: "/images/program_muscle.jpg",
    },
    {
      name: "Emily Davis",
      role: "Functional & Calisthenics Trainer",
      experience: "7+ Years Exp",
      specialty: "Posture Correction, Core Power & Flexibility",
      image: "/images/program_fatloss.jpg",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "1-on-1 Universal Coaching",
      desc: "We rejected the traditional gym model where members are left lost on machines. At Brother's Fitness, every member receives personalized 1-on-1 coaching.",
    },
    {
      icon: ShieldCheck,
      title: "100% Result / Money-Back Promise",
      desc: "We stand with absolute confidence behind our methodology. Follow our diet and workout chart — if you don't transform, 100% of your fee is refunded.",
    },
    {
      icon: Scale,
      title: "Science-Backed Nutrition",
      desc: "No starvation fads. We build macro-counted, delicious nutrition charts matching your daily lifestyle, culture, and metabolism.",
    },
    {
      icon: Award,
      title: "World-Class Equipment",
      desc: "Equipped with imported biomechanically optimized machines to safeguard joints and maximize muscle activation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#E5A919] selection:text-black">
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      <main className="pt-28 pb-20">
        
        {/* Page Hero Header */}
        <section className="relative py-16 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-black uppercase tracking-widest">
              DISCOVER OUR STORY & MISSION
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              ABOUT <span className="text-[#E5A919]">BROTHER&apos;S FITNESS</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We started Brother&apos;s Fitness with one unwavering belief: <strong className="text-white">Every individual deserves personal attention, expert mentorship, and real, guaranteed results.</strong>
            </p>
          </div>
        </section>

        {/* The Founders' Story & Philosophy */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-[#E5A919]/50 shadow-2xl">
                <Image
                  src="/images/why_choose_trainers.jpg"
                  alt="Brothers Fitness Founders and Trainers"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/80 border border-[#E5A919]/40 backdrop-blur-md">
                  <span className="text-xs font-bold text-[#E5A919] uppercase tracking-wider block">
                    FOUNDED IN PASSION
                  </span>
                  <h4 className="text-lg font-black text-white uppercase">
                    Built by Athletes, For Everyone
                  </h4>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E5A919]">
                <Sparkles className="w-4 h-4" />
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
                WHY WE GUARANTEE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                  PERSONAL TRAINING FOR ALL
                </span>
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Most commercial gyms operate on a broken model: they sell thousands of memberships hoping 80% of people will stop showing up. When beginners enter without personalized guidance, they feel intimidated, perform exercises with bad posture, fail to see changes, and eventually quit.
              </p>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-white">Brother&apos;s Fitness changed the rules.</strong> We built a gym where every single candidate receives assigned 1-on-1 personal coaching, progressive reps tracking, and a bio-individualized diet plan as standard.
              </p>

              {/* Highlight Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#1c1917] to-black border border-[#E5A919]/50 shadow-lg">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A919]/20 border border-[#E5A919] flex items-center justify-center text-[#E5A919] shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase text-[#E5A919] mb-1">
                      Our Ironclad Money-Back Guarantee
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      If a member commits to our daily workout sessions and follows our strict customized diet chart for the program duration and sees no measurable physical transformation, <strong className="text-white">we refund 100% of their fees.</strong> We stake our reputation on your results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenTrialModal("About Page Free Trial")}
                  className="px-8 py-3.5 rounded-full bg-[#E5A919] hover:bg-yellow-400 text-black font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E5A919]/25 flex items-center gap-2 cursor-pointer"
                >
                  <span>Experience Brother&apos;s Fitness (Free Trial)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 4 Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
              OUR STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
              What Sets Brother&apos;s Fitness Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black uppercase text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certified Coaches Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-900">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
              EXPERT COACHES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-4">
              Meet Your Personal Mentors
            </h2>
            <p className="text-gray-400 text-sm">
              Our coaching staff consists of nationally certified fitness professionals and certified sports nutritionists with a proven track record.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] overflow-hidden transition-all shadow-xl"
              >
                <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#E5A919] text-black text-[10px] font-black uppercase">
                    {coach.experience}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-black uppercase text-white">
                    {coach.name}
                  </h3>
                  <span className="text-xs text-[#E5A919] font-bold block mb-2">
                    {coach.role}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed border-t border-zinc-800 pt-2">
                    <strong className="text-gray-300">Focus:</strong> {coach.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />

      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialPlan={selectedPlan}
      />

      <WhatsAppButton onOpenTrialModal={handleOpenTrialModal} />
    </div>
  );
}
