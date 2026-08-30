"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Contact Page Inquiry");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Fat Loss & Toning",
    timeSlot: "Morning (06:00 AM - 10:00 AM)",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: "How does the 100% Results or Money-Back Guarantee work?",
      a: "When you join our transformation program, our head trainer crafts a personalized progressive workout routine and a strict macro-counted nutrition chart. We document your starting metrics (body fat %, measurements, weight). If you maintain at least 90% workout attendance and adhere to the prescribed diet chart for the program duration and see no measurable physical improvement, we refund 100% of your membership fees without hassle.",
    },
    {
      q: "Is 1-on-1 Personal Training truly provided to every member?",
      a: "Yes! Brother's Fitness was founded specifically because most commercial gyms leave members confused and unguided. Every member is assigned a dedicated personal trainer who monitors your form on every set, prevents injury, and ensures progressive overload.",
    },
    {
      q: "Do I receive a customized diet plan suited to my food preferences?",
      a: "Absolutely. Our certified sports nutritionist analyzes your daily routine, metabolic rate, and dietary preference (Vegetarian, Non-Vegetarian, Vegan, Eggitarian, South/North Indian) to craft delicious, macro-balanced meal charts that fit your lifestyle.",
    },
    {
      q: "What is included in the Free 1-on-1 Trial Session?",
      a: "Your trial includes a full InBody composition scan (body fat %, visceral fat, muscle mass), a 1-on-1 workout session with a senior trainer, form assessment, and a 15-minute goal consultation completely free of charge.",
    },
    {
      q: "What are Brother's Fitness gym timings?",
      a: "We are open 7 days a week from 5:00 AM to 10:00 PM (Monday through Sunday), allowing you to train comfortably early in the morning or late after work.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] selection:bg-[#E5A919] selection:text-black">
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />

      <main className="pt-28 pb-20">
        
        {/* Page Hero Header */}
        <section className="relative py-14 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5A919]/10 rounded-full blur-[140px] pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5A919]/20 border border-[#E5A919] text-[#E5A919] text-xs font-black uppercase tracking-widest">
              WE ARE HERE FOR YOUR TRANSFORMATION
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white">
              CONTACT <span className="text-[#E5A919]">BROTHER&apos;S FITNESS</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Book your free 1-on-1 trial session, consult with our master trainers, or ask any question about our 100% money-back result guarantee.
            </p>
          </div>
        </section>

        {/* Contact Info Cards + Interactive Form Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Col: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Guarantee Highlight Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1c1917] to-[#0c0a09] border-2 border-[#E5A919]/60 shadow-xl space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5A919] flex items-center justify-center text-black font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase text-white">
                      100% Result Guarantee
                    </h3>
                    <span className="text-xs text-[#E5A919] font-bold">
                      Zero Risk Fitness Commitment
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Follow our strict diet and assigned 1-on-1 personal workout routines. If you don&apos;t see real physical improvement, your full fees will be refunded.
                </p>
              </div>

              {/* Direct Info Box */}
              <div className="p-6 rounded-3xl bg-[#121214] border border-zinc-800 space-y-5">
                <h3 className="text-lg font-black uppercase text-white pb-3 border-b border-zinc-800">
                  Gym Details & Location
                </h3>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Gym Address</span>
                    <p className="text-sm font-semibold text-white">
                      123 Fitness Street, Elite Commercial Complex, Main Road, City
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Phone / Mobile</span>
                    <a href="tel:+919876543210" className="text-sm font-bold text-[#E5A919] hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Email Address</span>
                    <a href="mailto:info@brotherfitness.com" className="text-sm font-medium text-gray-200 hover:text-white">
                      info@brotherfitness.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E5A919]/15 flex items-center justify-center text-[#E5A919] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase block">Gym Timings</span>
                    <p className="text-sm font-medium text-gray-200">
                      Mon - Sun: 5:00 AM – 10:00 PM (Open All 7 Days)
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20Brothers%20Fitness%2C%20I%20want%20to%20know%20more%20about%20your%201-on-1%20Personal%20Training%20and%20100%25%20Result%20Guarantee!"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-green-500/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Interactive Inquiry & Trial Pass Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#141416] to-[#0c0c0e] border border-zinc-800 shadow-2xl relative">
                
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#E5A919]/20 border border-[#E5A919] flex items-center justify-center text-[#E5A919] shadow-lg shadow-[#E5A919]/30">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase text-white">
                      Message & Pass Confirmed!
                    </h3>
                    <p className="text-gray-300 text-sm max-w-md mx-auto">
                      Thank you <span className="text-[#E5A919] font-bold">{formData.name}</span>! Our head coach will call you on <span className="text-[#E5A919] font-bold">{formData.phone}</span> within 2 hours to confirm your free 1-on-1 trial slot.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-8 py-3 rounded-full bg-[#E5A919] text-black font-black text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E5A919] mb-1">
                      <Sparkles className="w-4 h-4" />
                      Get In Touch
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
                      Send a Message & <span className="text-[#E5A919]">Claim Trial Pass</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mb-6">
                      Fill out the form below to reserve your 1-on-1 personal workout trial and get your body assessment scheduled.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Phone Number</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Fitness Goal</label>
                          <select
                            value={formData.goal}
                            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                          >
                            <option value="Fat Loss & Toning">Fat Loss & Toning</option>
                            <option value="Muscle Building">Muscle Building</option>
                            <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                            <option value="Functional Fitness">Functional & Athletic Fitness</option>
                            <option value="General Health">General Health & Posture</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Preferred Time Slot</label>
                          <select
                            value={formData.timeSlot}
                            onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                          >
                            <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                            <option value="Afternoon (11:00 AM - 04:00 PM)">Afternoon (11:00 AM - 04:00 PM)</option>
                            <option value="Evening (05:00 PM - 09:30 PM)">Evening (05:00 PM - 09:30 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-300 uppercase mb-1">Any Specific Questions / Medical History</label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about any specific fitness goals or questions..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 text-xs text-amber-300 flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-[#E5A919] shrink-0" />
                        <span>Protected under Brother&apos;s 100% Results or Full Money-Back Policy.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#E5A919]/30 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit & Request Free Trial Pass</span>
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#121214] border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white hover:text-[#E5A919] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#E5A919] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-zinc-900 pt-3">
                    {faq.a}
                  </div>
                )}
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

      <WhatsAppButton onOpenTrialModal={() => setIsTrialModalOpen(true)} />
    </div>
  );
}
