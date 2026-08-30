"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomDropdown from "@/components/CustomDropdown";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Dumbbell,
  Navigation,
  HelpCircle,
  Calendar,
  Building2,
  Check,
} from "lucide-react";

export default function ContactPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Contact Page Inquiry");

  const initialFormState = {
    name: "",
    phone: "",
    email: "",
    branch: "1st Branch (Kunchanapalli - 522501)",
    goal: "Fat Loss & Body Toning",
    timeSlot: "Morning (05:00 AM - 09:00 AM)",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Contact Page Booking Form",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry.");
      }

      setIsSubmitted(true);
      setCountdown(5);

      // 5-second countdown to return to normal state
      let remaining = 5;
      const interval = setInterval(() => {
        remaining -= 1;
        setCountdown(remaining);
        if (remaining <= 0) {
          clearInterval(interval);
          setIsSubmitted(false);
          setFormData(initialFormState);
        }
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("There was an error sending your booking. Please try again or message us on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Brothers Fitness, I would like to book a Free 1-on-1 Trial Session!\n\nName: ${formData.name || "Member"}\nPhone: ${formData.phone || "Not provided"}\nBranch: ${formData.branch}\nGoal: ${formData.goal}\nPreferred Time: ${formData.timeSlot}`
  );

  const branches = [
    {
      id: "branch-1",
      number: "1st Branch",
      title: "Kunchanapalli / Tadepalli",
      landmark: "Ground Floor, Bank of Baroda Building, Near Aravinda High School",
      address: "Door no: 3-273/2, Ground floor, Bank of Baroda building, near Aravinda High School, Kunchanapalli village, Tadepalli (Mandal), Guntur (District)",
      pincode: "522501",
      mapsQuery: "https://www.google.com/maps/search/?api=1&query=Brothers+Fitness+Kunchanapalli+Bank+of+Baroda+Tadepalli",
    },
    {
      id: "branch-2",
      number: "2nd Branch",
      title: "KL University Road / Vaddeswaram",
      landmark: "KL University Main Road, Revenue Ward No 20",
      address: "20-9-121/2, KL University Road, Vaddeswaram, Revenue Ward No 20, Mangalagiri Tadepalli",
      pincode: "522502",
      mapsQuery: "https://www.google.com/maps/search/?api=1&query=Brothers+Fitness+KL+University+Road+Vaddeswaram+Mangalagiri",
    },
  ];

  const faqs = [
    {
      q: "How does the 100% Results or Money-Back Guarantee work?",
      a: "When you join our personal training program, our coaches assign a personalized workout routine and strict macro diet chart. If you follow the prescribed plan daily and see no measurable physical improvement, your full membership fee will be refunded without deductions.",
    },
    {
      q: "Is 1-on-1 Personal Training truly provided to every member?",
      a: "Yes! Brother's Fitness is famous specifically for dedicated 1-on-1 personal training for each candidate. A dedicated coach is by your side on every set to correct your posture, teach progressive overload, and prevent injuries.",
    },
    {
      q: "What is included in the Free 1-on-1 Trial Session?",
      a: "Your trial includes a full body assessment, a 1-on-1 guided workout with a senior trainer, form correction, and a 15-minute customized diet consultation — 100% free with zero obligation.",
    },
    {
      q: "Can I choose between the two branches?",
      a: "Yes, you can register and train at either our 1st Branch in Kunchanapalli (Pincode: 522501) or our 2nd Branch on KL University Road, Vaddeswaram (Pincode: 522502). Both offer world-class equipment and personal coaching.",
    },
    {
      q: "What are Brother's Fitness gym timings?",
      a: "We are open 7 days a week from 5:00 AM to 10:00 PM (Monday to Sunday), giving you full flexibility to train early in the morning or late evening.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#E5A919] selection:text-black">
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Page Hero Header */}
        <section className="relative py-12 text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5A919]/10 rounded-full blur-[150px] pointer-events-none"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-medium uppercase tracking-widest"
            >
              <Sparkles className="w-3.5 h-3.5" />
              WE ARE HERE FOR YOUR TRANSFORMATION
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-medium uppercase tracking-tight text-white"
            >
              CONTACT <span className="text-[#E5A919]">BROTHER&apos;S FITNESS</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
            >
              Book your free 1-on-1 trial session, visit either of our two premier branches, or talk directly with our head coaches on WhatsApp.
            </motion.p>
          </motion.div>
        </section>

        {/* 4 Fast Contact Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Primary WhatsApp (First Mobile Number) */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              href="https://wa.me/919505560783?text=Hi%20Brothers%20Fitness%2C%20I%20want%20to%20know%20more%20about%20your%201-on-1%20Personal%20Training%20and%20100%25%20Result%20Guarantee!"
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#25D366] transition-all group flex items-center gap-4 shadow-lg hover:shadow-green-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  Direct WhatsApp
                </span>
                <span className="text-sm font-medium text-white group-hover:text-[#25D366] transition-colors">
                  +91 95055 60783
                </span>
                <span className="text-[10px] text-green-400 block mt-0.5">● Instant Replies</span>
              </div>
            </motion.a>

            {/* 2. Phone Call (Both Numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all group flex items-center gap-4 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  Call Gym Hotlines
                </span>
                <div className="flex flex-col text-xs font-medium text-white">
                  <a href="tel:+919505560783" className="hover:text-[#E5A919] transition-colors">
                    +91 95055 60783
                  </a>
                  <a href="tel:+918885553402" className="hover:text-[#E5A919] transition-colors">
                    +91 88855 53402
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 3. Official Email */}
            <motion.a
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              href="mailto:brothers.fitness640@gmail.com"
              className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all group flex items-center gap-4 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  Official Email
                </span>
                <span className="text-xs font-medium text-white group-hover:text-[#E5A919] transition-colors truncate block">
                  brothers.fitness640@gmail.com
                </span>
              </div>
            </motion.a>

            {/* 4. Operating Timings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-[#121214] border border-zinc-800 flex items-center gap-4 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E5A919]/15 border border-[#E5A919]/30 flex items-center justify-center text-[#E5A919] shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider block">
                  Gym Working Hours
                </span>
                <span className="text-xs font-medium text-white block">
                  Mon – Sun: 5:00 AM – 10:00 PM
                </span>
                <span className="text-[10px] text-amber-400 block mt-0.5">Open All 7 Days</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Branches Showcase & Inquiry Form Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Col (5 cols): 2 Branches & 100% Guarantee Box */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Guarantee Highlight Box */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-[#1c1917] to-[#0c0a09] border-2 border-[#E5A919]/70 shadow-2xl space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A919] flex items-center justify-center text-black font-medium">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium uppercase text-white">
                      100% Result Guarantee
                    </h3>
                    <span className="text-xs text-[#E5A919] font-medium">
                      Zero Risk Fitness Commitment
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Follow our strict diet chart and assigned daily 1-on-1 personal training. If you see no measurable physical improvement, <strong className="text-white">your full membership fee is refunded</strong>.
                </p>
              </motion.div>

              {/* Branch 1 Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-medium uppercase">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>1st Branch</span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Pincode: 522501</span>
                </div>

                <div>
                  <h4 className="text-lg font-medium uppercase text-white mb-1">
                    Kunchanapalli / Tadepalli Branch
                  </h4>
                  <p className="text-xs text-amber-300/90 font-medium mb-2">
                    {branches[0].landmark}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {branches[0].address}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-3">
                  <a
                    href="tel:+919505560783"
                    className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-[#E5A919] hover:text-black text-gray-300 text-xs font-medium uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Branch</span>
                  </a>
                  <a
                    href={branches[0].mapsQuery}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl border border-zinc-800 hover:border-[#E5A919] text-gray-300 hover:text-white text-xs font-medium uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#E5A919]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>

              {/* Branch 2 Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/40 text-[#E5A919] text-xs font-medium uppercase">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>2nd Branch</span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">Pincode: 522502</span>
                </div>

                <div>
                  <h4 className="text-lg font-medium uppercase text-white mb-1">
                    KL University Road / Vaddeswaram Branch
                  </h4>
                  <p className="text-xs text-amber-300/90 font-medium mb-2">
                    {branches[1].landmark}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {branches[1].address}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 flex items-center gap-3">
                  <a
                    href="tel:+919505560783"
                    className="flex-1 py-2.5 rounded-xl bg-zinc-900 hover:bg-[#E5A919] hover:text-black text-gray-300 text-xs font-medium uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Branch</span>
                  </a>
                  <a
                    href={branches[1].mapsQuery}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl border border-zinc-800 hover:border-[#E5A919] text-gray-300 hover:text-white text-xs font-medium uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#E5A919]" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </motion.div>

            </div>

            {/* Right Col (7 cols): Interactive Inquiry & Free Trial Pass Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#141416] to-[#0c0c0e] border border-zinc-800 shadow-2xl relative">
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-5">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#E5A919]/20 border-2 border-[#E5A919] flex items-center justify-center text-[#E5A919] shadow-lg shadow-[#E5A919]/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-medium uppercase text-white">
                      Inquiry & Trial Pass Received!
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-[#E5A919]">{formData.name}</strong>! An email confirmation has been sent to our head trainer. We have reserved your free 1-on-1 trial slot at <strong className="text-white">{formData.branch}</strong>.
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-amber-300">
                      <span>Returning to form in {countdown}s...</span>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/919505560783?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-green-500/25 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Open WhatsApp for Instant Confirmation</span>
                      </a>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData(initialFormState);
                        }}
                        className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-zinc-700 text-gray-300 hover:text-white text-xs font-medium uppercase tracking-wider cursor-pointer"
                      >
                        Reset Form Now
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A919]/15 border border-[#E5A919]/30 text-[#E5A919] text-xs font-medium uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Claim Your Free Pass</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-medium uppercase tracking-tight text-white">
                        Book a Free 1-on-1 Trial Session
                      </h2>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        Fill out the details below. Our team will get back to you immediately with slot confirmation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-300 uppercase mb-1">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-300 uppercase mb-1">
                            Phone Number (WhatsApp) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 9876543210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                          />
                        </div>
                      </div>

                      {/* Email & Preferred Branch */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-300 uppercase mb-1.5 tracking-wider">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                          />
                        </div>

                        <CustomDropdown
                          label="Select Branch"
                          required
                          options={[
                            { value: "1st Branch (Kunchanapalli - 522501)", label: "1st Branch (Kunchanapalli - 522501)", sublabel: "Bank of Baroda Building, Near Aravinda High School" },
                            { value: "2nd Branch (KL University Rd - 522502)", label: "2nd Branch (KL University Rd - 522502)", sublabel: "KL University Main Road, Vaddeswaram" },
                          ]}
                          value={formData.branch}
                          onChange={(val) => setFormData({ ...formData, branch: val })}
                        />
                      </div>

                      {/* Goal & Preferred Time Slot */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <CustomDropdown
                          label="Primary Fitness Goal"
                          options={[
                            "Fat Loss & Body Toning",
                            "Muscle Building & Hypertrophy",
                            "1-on-1 Dedicated Personal Coaching",
                            "Strength & Functional Training",
                            "General Stamina & Health",
                          ]}
                          value={formData.goal}
                          onChange={(val) => setFormData({ ...formData, goal: val })}
                        />

                        <CustomDropdown
                          label="Preferred Time"
                          options={[
                            "Morning (05:00 AM - 09:00 AM)",
                            "Mid-Day (10:00 AM - 04:00 PM)",
                            "Evening (05:00 PM - 10:00 PM)",
                          ]}
                          value={formData.timeSlot}
                          onChange={(val) => setFormData({ ...formData, timeSlot: val })}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 uppercase mb-1">
                          Message or Medical Details (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about previous gym experience, injuries, or specific transformation goals..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors resize-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] hover:brightness-110 disabled:opacity-70 text-black font-medium text-sm uppercase tracking-wider transition-all shadow-xl shadow-[#E5A919]/30 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>Sending Confirmation...</span>
                          </>
                        ) : (
                          <>
                            <span>Reserve My Free 1-on-1 Trial Pass</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-gray-400 text-center pt-1">
                        🔒 Zero spam. We protect your privacy. Backed by our 100% money-back result guarantee.
                      </p>
                    </form>
                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium uppercase tracking-tight text-white">
              Got Questions? We&apos;ve Got Answers.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-2xl bg-[#121214] border border-zinc-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-sm sm:text-base text-white hover:text-[#E5A919] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#E5A919] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-zinc-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />

      {/* Trial Modal */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialPlan={selectedPlan}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton onOpenTrialModal={() => setIsTrialModalOpen(true)} />
    </div>
  );
}
