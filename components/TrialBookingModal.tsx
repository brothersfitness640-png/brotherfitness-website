"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Sparkles, Flame, User, Phone, Mail, Calendar, Dumbbell } from "lucide-react";

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function TrialBookingModal({
  isOpen,
  onClose,
  initialPlan = "Free 1-on-1 Trial Session",
}: TrialBookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "Fat Loss & Toning",
    timeSlot: "Morning (06:00 AM - 10:00 AM)",
    plan: initialPlan,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-gradient-to-b from-[#18181b] to-[#0c0c0e] border border-[#E5A919]/40 shadow-2xl p-6 md:p-8 text-white">
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#E5A919]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#E5A919]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-[#E5A919]/20 text-gray-400 hover:text-[#E5A919] transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#E5A919]/20 border border-[#E5A919] flex items-center justify-center text-[#E5A919] shadow-lg shadow-[#E5A919]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Trial Session Confirmed! 🎉
            </h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto">
              Thank you, <span className="text-[#E5A919] font-semibold">{formData.name}</span>! Our head trainer will contact you shortly on{" "}
              <span className="text-[#E5A919] font-medium">{formData.phone}</span> to schedule your 1-on-1 personal session & body assessment.
            </p>
            <div className="p-4 rounded-xl bg-black/40 border border-[#E5A919]/30 text-xs text-amber-200/90 flex items-center gap-3 text-left">
              <ShieldCheck className="w-6 h-6 text-[#E5A919] shrink-0" />
              <span>
                <strong>100% Result Guarantee Active:</strong> Follow our strict nutrition and custom workout program. Guaranteed measurable results or 100% money back!
              </span>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-bold text-sm tracking-wide uppercase hover:brightness-110 transition-all shadow-md shadow-[#E5A919]/30 cursor-pointer"
            >
              Done & Return to Gym
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E5A919] mb-1">
              <Sparkles className="w-4 h-4" />
              Exclusive Access
            </div>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
              Book Your Free <span className="text-[#E5A919]">1-on-1 Trial</span>
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mt-1 mb-6">
              Experience personalized training with a certified coach + get a free body composition analysis and customized workout consultation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Primary Fitness Goal</label>
                  <div className="relative">
                    <Flame className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                    >
                      <option value="Fat Loss & Toning">Fat Loss & Toning</option>
                      <option value="Muscle Hypertrophy">Muscle Hypertrophy</option>
                      <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                      <option value="Functional Fitness">Functional & Athletic Fitness</option>
                      <option value="General Health">General Health & Posture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Preferred Time Slot</label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#E5A919] transition-colors"
                    >
                      <option value="Morning (06:00 AM - 10:00 AM)">Morning (06:00 AM - 10:00 AM)</option>
                      <option value="Afternoon (11:00 AM - 04:00 PM)">Afternoon (11:00 AM - 04:00 PM)</option>
                      <option value="Evening (05:00 PM - 09:30 PM)">Evening (05:00 PM - 09:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guarantee Tag */}
              <div className="p-3 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 flex items-start gap-2.5 text-xs text-amber-300">
                <ShieldCheck className="w-4 h-4 text-[#E5A919] shrink-0 mt-0.5" />
                <span>
                  <strong>100% Results or Full Refund:</strong> Every candidate receives 1-on-1 personal training + nutrition tracking.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-extrabold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg shadow-[#E5A919]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Dumbbell className="w-4 h-4" />
                Claim Free 1-on-1 Trial Pass
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
