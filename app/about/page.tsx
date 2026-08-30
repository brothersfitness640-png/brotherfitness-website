"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ShieldCheck,
  Dumbbell,
  Users,
  Target,
  Award,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Flame,
  Zap,
  Activity,
  Heart,
  Compass,
  Check,
  Star,
  Quote,
  Clock,
  MapPin,
  MessageCircle,
  Building2,
  Calendar,
  Lock,
  ShowerHead,
  Car,
} from "lucide-react";

export default function AboutPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("About Page Consultation");
  const [activeGalleryTab, setActiveGalleryTab] = useState<string>("all");

  const handleOpenTrialModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  // 6 Core Values
  const values = [
    {
      icon: Target,
      title: "Discipline",
      desc: "We instill consistent daily training habits and dietary focus that build mental grit alongside physical power.",
    },
    {
      icon: Flame,
      title: "Consistency",
      desc: "Transformations are forged through regular effort. Our 1-on-1 accountability ensures you never fall off track.",
    },
    {
      icon: Users,
      title: "Community",
      desc: "A brotherhood of fitness enthusiasts uplifting each other in a supportive, zero-judgment atmosphere.",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "State-of-the-art equipment, certified master coaches, and scientific training methods that deliver elite outcomes.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      desc: "Transparent coaching, honest health guidance, and our ironclad 100% money-back result commitment.",
    },
    {
      icon: Zap,
      title: "Results",
      desc: "Measurable changes you can see in the mirror and in your health metrics, backed by customized tracking.",
    },
  ];

  // Why Choose Us - 6 Points
  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Trainers",
      desc: "Nationally accredited coaches with 8+ years of experience dedicated to guiding your form and posture.",
    },
    {
      icon: Dumbbell,
      title: "Modern Equipment",
      desc: "Biomechanically engineered Olympic strength machines, free weights up to 60kg, and commercial cardio stations.",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Programs",
      desc: "Signature 1-on-1 coaching for every candidate with custom macro meal blueprints tailored to your routine.",
    },
    {
      icon: Heart,
      title: "Friendly Environment",
      desc: "A clean, hygienic, air-conditioned space where beginners and advanced lifters feel equally respected and motivated.",
    },
    {
      icon: Building2,
      title: "Flexible Memberships",
      desc: "Transparent pricing with access to both our Kunchanapalli and KL University Road branches.",
    },
    {
      icon: ShieldCheck,
      title: "Results-Focused Training",
      desc: "100% Results or Money-Back Guarantee: If you follow our diet and workout routine with no improvement, receive a full refund.",
    },
  ];

  // 5-Step Fitness Approach
  const fitnessApproach = [
    {
      step: "01",
      title: "Comprehensive Assessment",
      desc: "InBody composition scan measuring body fat percentage, muscle mass, metabolic rate, and posture evaluation.",
    },
    {
      step: "02",
      title: "Custom Goal Setting",
      desc: "Establishing realistic, timeline-oriented milestones (e.g. 10kg fat loss or 5kg muscle gain in 90 days).",
    },
    {
      step: "03",
      title: "Workout Planning",
      desc: "Designing a periodized, progressive workout split suited to your recovery capacity and biomechanics.",
    },
    {
      step: "04",
      title: "Strict Nutrition Guidance",
      desc: "Custom calorie & macro meal chart crafted by our sports nutritionist without extreme starvation.",
    },
    {
      step: "05",
      title: "Progress Tracking & Review",
      desc: "Bi-weekly body measurements, weight checks, and progressive overload tracking to guarantee physical progress.",
    },
  ];

  // Trainers Roster
  const trainers = [
    {
      name: "David Lee",
      role: "Head Strength & Biomechanics Coach",
      experience: "12+ Years Experience",
      certs: "CSCS • K11 Certified Master Trainer",
      specialty: "Powerlifting, Hypertrophy & Injury Rehabilitation",
      image: "/img/1.jpeg",
    },
    {
      name: "Priya Sharma",
      role: "Chief Sports Nutritionist & PT",
      experience: "8+ Years Experience",
      certs: "ISSA Certified Nutritionist • ACE-CPT",
      specialty: "Clinical Macro Cycling, Fat Loss & Female Toning",
      image: "/img/2.jpeg",
    },
    {
      name: "Vikram Reddy",
      role: "Senior Conditioning & PT Coach",
      experience: "10+ Years Experience",
      certs: "CrossFit Level 2 • ACSM Certified",
      specialty: "Metabolic HIIT, Functional Athletics & Agility",
      image: "/img/3.jpeg",
    },
    {
      name: "Karthik Varma",
      role: "Master Transformation Trainer",
      experience: "9+ Years Experience",
      certs: "NSCA-CPT • Biomechanics Specialist",
      specialty: "Body Composition Recomposition & Core Strength",
      image: "/img/5.jpeg",
    },
  ];

  // Facilities
  const facilities = [
    {
      title: "Strength Training Area",
      desc: "Olympic power cages, plate-loaded machines, and heavy deadlift platforms.",
      icon: Dumbbell,
      image: "/img/1.jpeg",
    },
    {
      title: "Cardio Section",
      desc: "Commercial treadmills, stairmasters, assault bikes, and rowing machines.",
      icon: Heart,
      image: "/img/7.jpeg",
    },
    {
      title: "Functional Training Turf",
      desc: "Kettlebells, battle ropes, plyo boxes, and TRX suspension bays.",
      icon: Activity,
      image: "/img/6.jpeg",
    },
    {
      title: "Changing Rooms & Showers",
      desc: "Clean digital lockers, grooming mirrors, and hot/cold rain shower facilities.",
      icon: ShowerHead,
      image: "/img/4.jpeg",
    },
    {
      title: "Free Parking & Security",
      desc: "Dedicated on-site 24/7 monitored parking for two-wheelers and four-wheelers.",
      icon: Car,
      image: "/img/8.jpeg",
    },
  ];

  // Transformations
  const transformations = [
    {
      name: "Rahul Sharma",
      metric: "Lost 18kg in 14 Weeks",
      desc: "Followed the 1-on-1 coaching program and strict diet chart. Achieved a chiseled 6-pack with zero rebound.",
      image: "/images/trans_1.jpg",
    },
    {
      name: "Pooja Verma",
      metric: "Lost 14kg • Core Restored",
      desc: "Struggled with postpartum weight for years. The personalized nutrition and dedicated coach transformed her energy.",
      image: "/images/trans_2.jpg",
    },
    {
      name: "Karthik Raja",
      metric: "Gained 12kg Lean Muscle",
      desc: "Skinny-to-muscular transformation with heavy compound lifting and high-protein nutrition guidance.",
      image: "/images/trans_3.jpg",
    },
    {
      name: "Sneha Reddy",
      metric: "Lost 16kg • Pain Free",
      desc: "Rehabilitated lower back discomfort while shedding 16kg of body fat safely under coach supervision.",
      image: "/images/trans_4.jpg",
    },
  ];

  // Gallery items
  const galleryItems = [
    { src: "/img/1.jpeg", category: "gym", title: "Heavy Strength Floor" },
    { src: "/img/2.jpeg", category: "equipment", title: "Weight Loss & Conditioning" },
    { src: "/img/3.jpeg", category: "members", title: "Muscle Building Zone" },
    { src: "/img/4.jpeg", category: "gym", title: "Brother's Fitness Main Floor" },
    { src: "/img/5.jpeg", category: "trainers", title: "1-on-1 Coaching in Action" },
    { src: "/img/6.jpeg", category: "equipment", title: "Functional Athletics Bay" },
    { src: "/img/7.jpeg", category: "gym", title: "Cardio Endurance Deck" },
    { src: "/img/8.jpeg", category: "events", title: "Group Training & Community" },
  ];

  const filteredGallery =
    activeGalleryTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeGalleryTab);

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#E5A919] selection:text-black">
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      <main className="pt-28 pb-20">
        
        {/* ========================================================
            1. PAGE HERO / BANNER
        ======================================================== */}
        <section className="relative py-20 text-center overflow-hidden">
          {/* Background image & gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/4.jpeg"
              alt="About Brother's Fitness"
              fill
              priority
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/90 via-[#070707]/80 to-[#070707]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A919]/15 rounded-full blur-[160px] pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-5"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-medium uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4" />
              10+ Years of Transformation Excellence
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium uppercase tracking-tight text-white leading-[1.08]"
            >
              ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                BROTHER&apos;S FITNESS CLUB
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Pioneering dedicated 1-on-1 personal training for every candidate, backed by customized nutrition blueprints and our ironclad 100% money-back result guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button
                onClick={() => handleOpenTrialModal("About Hero Free Trial")}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/30 flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Free Trial Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border border-zinc-700 bg-black/50 hover:border-[#E5A919] text-white font-medium text-xs uppercase tracking-wider transition-all"
              >
                Visit Our Branches
              </Link>
            </motion.div>
          </motion.div>
        </section>


        {/* ========================================================
            2. OUR STORY
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 relative"
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/60 shadow-2xl bg-black group">
                  <div className="relative h-[420px] sm:h-[500px] w-full">
                    <Image
                      src="/img/4.jpeg"
                      alt="Founding of Brother's Fitness"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/85 border border-[#E5A919]/40 backdrop-blur-md flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-medium text-[#E5A919] uppercase tracking-wider block">
                        ESTABLISHED 2014
                      </span>
                      <h4 className="text-base font-medium text-white uppercase">
                        From Vision to Fitness Movement
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#E5A919] text-black text-xs font-medium uppercase">
                      2 Branches
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-6 space-y-6"
              >
                <div>
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                    OUR STORY & FOUNDING
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                    How Brother&apos;s Fitness Started
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    Brother&apos;s Fitness was founded over a decade ago with a disruptive belief: <strong className="text-white">no gym member should ever be left alone and lost in a gym</strong>. Too many commercial gyms sign members up and forget about them, leading to dropped routines and frustration.
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Our founders created Brother&apos;s Fitness as a true brotherhood of transformation — assigning a dedicated personal coach and custom diet to every candidate. From our flagship 1st Branch in Kunchanapalli to our 2nd Branch on KL University Road, our community has grown to over 1,000+ active members and 5,000+ life-changing body transformations.
                  </p>
                </div>

                {/* Milestones grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1"
                  >
                    <span className="text-2xl font-medium text-[#E5A919]">2014</span>
                    <h5 className="text-xs font-medium uppercase text-white">First Branch Founded</h5>
                    <p className="text-[11px] text-gray-400">Launched in Kunchanapalli with 1-on-1 PT.</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-2xl bg-[#141416] border border-zinc-800 space-y-1"
                  >
                    <span className="text-2xl font-medium text-[#E5A919]">5,000+</span>
                    <h5 className="text-xs font-medium uppercase text-white">Transformations</h5>
                    <p className="text-[11px] text-gray-400">Documented weight loss and muscle building.</p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ========================================================
            3. WHO WE ARE (Asymmetric Feature Spotlight Layout)
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#E5A919]/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Spotlight Box (5 cols) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#1c1917] via-[#121214] to-black border-2 border-[#E5A919] shadow-2xl relative space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-medium uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>WHO WE ARE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-tight text-white leading-tight">
                  Built On One Promise: <br />
                  <span className="text-[#E5A919]">No Member Left Behind</span>
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Brother&apos;s Fitness was created to completely rewrite the broken gym experience. We eliminated crowded, unguided floors by pairing every candidate with dedicated 1-on-1 coaching from day one.
                </p>

                <div className="p-4 rounded-2xl bg-black/60 border border-zinc-800 space-y-1">
                  <span className="text-xs font-medium text-amber-300 uppercase tracking-wider block">
                    Our Core Differentiator
                  </span>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    1-on-1 Personal Training is built into the core membership — not an expensive luxury addon.
                  </p>
                </div>

                <button
                  onClick={() => handleOpenTrialModal("Who We Are Trial")}
                  className="w-full py-3.5 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#E5A919]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Experience the Brother&apos;s Difference</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Right Stacked Horizontal Feature Rows (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Feature 01 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ x: 6 }}
                  className="p-6 rounded-3xl bg-[#121214] border-l-4 border-l-[#E5A919] border-y border-r border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors">
                        Universal 1-on-1 Personal Training
                      </h3>
                      <span className="text-xs font-medium text-[#E5A919]/60">01</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Every candidate is paired with a dedicated personal trainer who supervises posture, tracks progressive overload, and prevents injuries during every workout session.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 02 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ x: 6 }}
                  className="p-6 rounded-3xl bg-[#121214] border-l-4 border-l-[#E5A919] border-y border-r border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors">
                        100% Results or Full Money-Back Refund
                      </h3>
                      <span className="text-xs font-medium text-[#E5A919]/60">02</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      We stand behind our coaching. If you adhere to our prescribed diet chart and daily workout routine with no physical improvement, your full fee is refunded.
                    </p>
                  </div>
                </motion.div>

                {/* Feature 03 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 6 }}
                  className="p-6 rounded-3xl bg-[#121214] border-l-4 border-l-[#E5A919] border-y border-r border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col sm:flex-row items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors">
                        Science-Backed Biomechanics & Nutrition
                      </h3>
                      <span className="text-xs font-medium text-[#E5A919]/60">03</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Customized calorie & macro meal blueprints combined with periodized strength training routines designed specifically around your body type and metabolism.
                    </p>
                  </div>
                </motion.div>

              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            4. MISSION & VISION
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#18181b] to-[#0c0c0e] border border-zinc-800 hover:border-[#E5A919] transition-all space-y-4 shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919]">
                  <Target className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E5A919] block">
                  OUR MISSION
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white">
                  Empowering Every Member to Peak Fitness
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  To eliminate gym confusion and intimidation by making elite 1-on-1 personal training, customized macro nutrition, and dedicated coach accountability accessible to every individual seeking lasting health and physique transformations.
                </p>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#18181b] to-[#0c0c0e] border border-zinc-800 hover:border-[#E5A919] transition-all space-y-4 shadow-2xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919]">
                  <Sparkles className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E5A919] block">
                  OUR VISION
                </span>
                <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white">
                  The Gold Standard in Result-Guaranteed Gyms
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  To establish Brother&apos;s Fitness as the most trusted transformation destination across the region — recognized for zero-compromise coaching standards, state-of-the-art facilities, and unconditional 100% money-back result integrity.
                </p>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ========================================================
            5. OUR VALUES (Bento Grid with Watermark Numbers & Top Gold Rims)
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                CORE PRINCIPLES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Our Guiding Values
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                The foundational pillars behind every rep, every diet chart, and every success story at Brother&apos;s Fitness.
              </p>
            </motion.div>

            {/* 6-Item Bento Grid with Faint Large Numbers and Top Glowing Accent Line */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                const numberStr = `0${idx + 1}`;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="p-7 rounded-3xl bg-[#111113] border border-zinc-800 hover:border-[#E5A919] transition-all relative overflow-hidden group flex flex-col justify-between shadow-xl"
                  >
                    {/* Top Glow Accent Strip */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E5A919] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />

                    {/* Faint Background Number Watermark */}
                    <span className="absolute bottom-2 right-4 text-7xl font-medium text-white/[0.03] group-hover:text-[#E5A919]/[0.08] transition-colors pointer-events-none select-none">
                      {numberStr}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-medium text-[#E5A919] bg-[#E5A919]/10 px-2.5 py-0.5 rounded-full border border-[#E5A919]/20">
                          {numberStr}
                        </span>
                      </div>

                      <h3 className="text-lg font-medium uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                        {val.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 mt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-[#E5A919]">
                      <Check className="w-3.5 h-3.5" />
                      <span>Foundational Value</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ========================================================
            6. WHY CHOOSE US (3-Column Visual Center Sandwich Layout)
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#E5A919]/10 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                THE BROTHER&apos;S FITNESS EDGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Why Choose Brother&apos;s Fitness
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Explore our distinct advantages structured for maximum member safety, progression, and satisfaction.
              </p>
            </motion.div>

            {/* 3-Column Split: 3 Left Feature Bars | Center Tall Visual | 3 Right Feature Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column (4 cols: 3 feature bars) */}
              <div className="lg:col-span-4 space-y-4">
                {whyChooseUs.slice(0, 3).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all group flex items-start gap-3.5 shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Center Column (4 cols: Tall Gym Visual Showcase Card) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-4 relative flex items-center justify-center"
              >
                <div className="relative w-full h-[430px] rounded-3xl overflow-hidden border-2 border-[#E5A919] shadow-2xl bg-black group">
                  <Image
                    src="/img/5.jpeg"
                    alt="Brother's Fitness 1-on-1 Coaching Floor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex justify-center">
                    <span className="px-3 py-1 rounded-full bg-black/85 border border-[#E5A919]/60 text-[10px] font-medium uppercase tracking-wider text-[#E5A919] backdrop-blur-md">
                      ★ Universal 1-on-1 Personal Training ★
                    </span>
                  </div>

                  {/* Bottom Guarantee Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/90 border border-[#E5A919]/70 backdrop-blur-md text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-[#E5A919] uppercase mb-0.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>100% Refund Guarantee</span>
                    </div>
                    <p className="text-[10px] text-gray-300">
                      Follow our strict diet & daily routine — guaranteed results or 100% fee refunded.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (4 cols: 3 feature bars) */}
              <div className="lg:col-span-4 space-y-4">
                {whyChooseUs.slice(3, 6).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: -4 }}
                      className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all group flex items-start gap-3.5 shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================
            7. OUR FITNESS APPROACH (5 Methodology Steps)
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                TRAINING METHODOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Our 5-Step Fitness Approach
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                A scientific, step-by-step framework that turns your fitness ambition into guaranteed, measurable reality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {fitnessApproach.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all relative flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <span className="text-3xl font-medium text-amber-400/30 group-hover:text-[#E5A919] transition-colors block mb-3">
                      {item.step}
                    </span>
                    <h3 className="text-sm font-medium uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-zinc-800 flex items-center gap-1 text-[10px] text-[#E5A919]">
                    <Check className="w-3 h-3" />
                    <span>Step {idx + 1}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            8. OUR TRAINERS
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                EXPERT COACHES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Meet Your Personal Trainers
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Experienced, certified master trainers dedicated to your daily posture, safety, and progressive overload.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trainers.map((coach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/80 border border-zinc-700 text-[10px] font-medium text-[#E5A919]">
                      {coach.experience}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                    <div>
                      <h3 className="text-lg font-medium uppercase text-white group-hover:text-[#E5A919] transition-colors">
                        {coach.name}
                      </h3>
                      <span className="text-xs text-amber-300/90 font-medium block">
                        {coach.role}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-gray-400">
                      <p><strong className="text-gray-300">Certs:</strong> {coach.certs}</p>
                      <p><strong className="text-gray-300">Specialty:</strong> {coach.specialty}</p>
                    </div>

                    <button
                      onClick={() => handleOpenTrialModal(`Training with ${coach.name}`)}
                      className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-[#E5A919] hover:text-black text-gray-300 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Book 1-on-1 Session
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            9. OUR FACILITIES
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                WORLD-CLASS GYM FLOOR
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Our Facilities & Amenities
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Spacious, air-conditioned workout zones and hygienic amenities engineered for focused, uninterrupted training.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((fac, idx) => {
                const Icon = fac.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all overflow-hidden flex flex-col justify-between group shadow-lg"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                      <Image
                        src={fac.image}
                        alt={fac.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-base font-medium uppercase text-white">
                          {fac.title}
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        {fac.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.48 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#1c1917] to-black border-2 border-[#E5A919] flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E5A919] text-black flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium uppercase text-white mb-2">
                    Tour Both Branches
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Visit our 1st Branch in Kunchanapalli (522501) or our 2nd Branch on KL University Road (522502) for a guided walkthrough.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 w-full py-3 rounded-xl bg-[#E5A919] hover:bg-yellow-400 text-black font-medium text-xs uppercase tracking-wider text-center transition-all block"
                >
                  View Branch Locations
                </Link>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ========================================================
            10. ACHIEVEMENTS / MILESTONES
        ======================================================== */}
        <section className="py-16 bg-gradient-to-r from-[#1c1917] via-black to-[#1c1917] border-y border-[#E5A919]/30 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#E5A919] block mb-2">
                  10+
                </span>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white block">
                  Years of Excellence
                </span>
                <span className="text-[11px] text-gray-400">Serving fitness seekers since 2014</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#E5A919] block mb-2">
                  1,000+
                </span>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white block">
                  Active Members
                </span>
                <span className="text-[11px] text-gray-400">Across 2 premier branches</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#E5A919] block mb-2">
                  20+
                </span>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white block">
                  Certified Trainers
                </span>
                <span className="text-[11px] text-gray-400">1-on-1 Dedicated Coaching</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#E5A919] block mb-2">
                  5,000+
                </span>
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-white block">
                  Transformations
                </span>
                <span className="text-[11px] text-gray-400">100% Results Guaranteed</span>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ========================================================
            11. MEMBER TRANSFORMATIONS
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                PROVEN RESULTS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Member Transformations
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Real before-and-after success stories achieved through our universal 1-on-1 personal coaching model.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {transformations.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-[#E5A919]/60 text-[10px] font-medium text-[#E5A919]">
                      {item.metric}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-base font-medium uppercase text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            12. COMMUNITY / GYM CULTURE
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 space-y-6"
              >
                <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block">
                  COMMUNITY & CULTURE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white leading-tight">
                  More Than a Gym. <br />
                  <span className="text-[#E5A919]">A Brotherhood of Strength.</span>
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  At Brother&apos;s Fitness, our culture is defined by encouragement, mutual respect, and friendly competition. From seasonal 90-day transformation challenges and powerlifting workshops to high-energy group workouts, you are always surrounded by people who want you to succeed.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121214] border border-zinc-800">
                    <Flame className="w-5 h-5 text-[#E5A919] shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">Seasonal 90-Day Body Transformation Challenges</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121214] border border-zinc-800">
                    <Users className="w-5 h-5 text-[#E5A919] shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">Supportive, motivating peer community for beginners</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#121214] border border-zinc-800">
                    <Award className="w-5 h-5 text-[#E5A919] shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">Monthly milestone recognition and athlete awards</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-6 grid grid-cols-2 gap-4"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800 group">
                  <Image src="/img/8.jpeg" alt="Community workout" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800 group mt-6">
                  <Image src="/img/5.jpeg" alt="1-on-1 coaching" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800 group">
                  <Image src="/img/3.jpeg" alt="Lifting session" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative h-56 rounded-2xl overflow-hidden border border-zinc-800 group mt-6">
                  <Image src="/img/6.jpeg" alt="Functional training" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ========================================================
            13. TESTIMONIALS
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-14"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                WHAT MEMBERS SAY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Member Reviews
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Read authentic reviews from members who transformed their health and physique at Brother&apos;s Fitness.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#121214] border border-zinc-800 space-y-4 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5A919] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A919]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;The dedicated 1-on-1 personal coaching without charging thousands extra made all the difference. Coach David corrected my form and pushed me safely. Lost 18kg!&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5A919]">
                    <Image src="/images/trans_1.jpg" alt="Rahul" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Rahul Sharma</h4>
                    <span className="text-[11px] text-amber-300">Lost 18kg • Kunchanapalli Branch</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#121214] border border-zinc-800 space-y-4 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5A919] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A919]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;Super clean facilities and polite trainers. Having a customized macro diet suited to South Indian food made the fat loss journey so easy and sustainable.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5A919]">
                    <Image src="/images/trans_2.jpg" alt="Pooja" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Pooja Verma</h4>
                    <span className="text-[11px] text-amber-300">Lost 14kg • KL University Rd Branch</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="p-7 rounded-3xl bg-[#121214] border border-zinc-800 space-y-4 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#E5A919] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A919]" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;The 100% money refund guarantee gave me complete confidence. Today I am stronger, leaner, and confident. Best gym in Guntur/Tadepalli region!&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#E5A919]">
                    <Image src="/images/trans_3.jpg" alt="Karthik" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Karthik Raja</h4>
                    <span className="text-[11px] text-amber-300">Gained 12kg Lean Muscle</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* ========================================================
            14. GALLERY (Gym, Equipment, Trainers, Members, Events)
        ======================================================== */}
        <section className="py-20 bg-[#070707] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
                INSIDE BROTHER&apos;S FITNESS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium uppercase tracking-tight text-white mb-4">
                Gym Photo Gallery
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Explore our world-class gym floor, Olympic equipment, expert trainers, and energetic member community.
              </p>

              {/* Gallery Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                {[
                  { id: "all", label: "All Photos" },
                  { id: "gym", label: "Gym Floor" },
                  { id: "equipment", label: "Equipment" },
                  { id: "trainers", label: "Trainers" },
                  { id: "members", label: "Members" },
                  { id: "events", label: "Events" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGalleryTab(tab.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      activeGalleryTab === tab.id
                        ? "bg-[#E5A919] text-black shadow-md shadow-[#E5A919]/30"
                        : "bg-zinc-900 text-gray-400 hover:text-white border border-zinc-800"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative h-64 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#E5A919] transition-all group bg-black"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-xs font-medium uppercase text-white">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================
            15. CALL-TO-ACTION (CTA)
        ======================================================== */}
        <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-2 border-[#E5A919]/60 bg-gradient-to-r from-black via-[#14120f] to-black shadow-[0_0_60px_rgba(229,169,25,0.3)] p-8 sm:p-12 md:p-16 text-center"
            >
              
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-medium uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Transformation With Zero Risk</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-tight text-white leading-tight">
                  Ready to Start Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-[#E5A919] to-amber-500">
                    Fitness Journey?
                  </span>
                </h2>

                <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                  Join the Brother&apos;s Fitness community today. Receive dedicated 1-on-1 coaching, strict customized nutrition, and our 100% money-back result guarantee.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <button
                    onClick={() => handleOpenTrialModal("About CTA Join Now")}
                    className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/40 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleOpenTrialModal("About CTA Free Trial")}
                    className="px-8 py-4 rounded-full border border-zinc-700 bg-black/60 hover:border-[#E5A919] text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Book a Free Trial
                  </button>

                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full border border-zinc-700 hover:border-[#E5A919] text-gray-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-[#E5A919]" />
                  <span>100% Results or Full Money-Back Refund Guarantee</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </main>

      <Footer />

      {/* 1-on-1 Trial Modal */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialPlan={selectedPlan}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton onOpenTrialModal={() => handleOpenTrialModal("Floating WhatsApp")} />
    </div>
  );
}
