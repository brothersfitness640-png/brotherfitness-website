"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Sparkles, User, Phone, Mail } from "lucide-react";
import CustomDropdown from "@/components/CustomDropdown";

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
    branch: "1st Branch (Kunchanapalli - 522501)",
    goal: "Fat Loss & Toning",
    timeSlot: "Morning (05:00 AM - 09:00 AM)",
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

  const branchOptions = [
    { value: "1st Branch (Kunchanapalli - 522501)", label: "1st Branch (Kunchanapalli - 522501)", sublabel: "Ground Floor, Bank of Baroda Building" },
    { value: "2nd Branch (KL University Rd - 522502)", label: "2nd Branch (KL University Rd - 522502)", sublabel: "KL University Main Road, Vaddeswaram" },
  ];

  const goalOptions = [
    "Fat Loss & Toning",
    "Muscle Hypertrophy & Building",
    "1-on-1 Dedicated Personal Training",
    "Strength & Functional Training",
    "General Health & Posture Correction",
  ];

  const timeSlotOptions = [
    "Morning (05:00 AM - 09:00 AM)",
    "Mid-Day (10:00 AM - 04:00 PM)",
    "Evening (05:00 PM - 10:00 PM)",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-visible rounded-3xl bg-gradient-to-b from-[#18181b] to-[#0c0c0e] border border-[#E5A919]/40 shadow-2xl p-6 sm:p-8 text-white">
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
            <h3 className="text-2xl font-medium tracking-tight text-white uppercase">
              Trial Session Confirmed! 🎉
            </h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-[#E5A919] font-medium">{formData.name}</span>! Our head trainer will contact you shortly on{" "}
              <span className="text-[#E5A919] font-medium">{formData.phone}</span> to schedule your 1-on-1 personal session & body assessment at <span className="text-white font-medium">{formData.branch}</span>.
            </p>
            <div className="p-4 rounded-2xl bg-black/40 border border-[#E5A919]/30 text-xs text-amber-200/90 flex items-center gap-3 text-left">
              <ShieldCheck className="w-6 h-6 text-[#E5A919] shrink-0" />
              <span>
                <strong className="font-medium text-white">100% Result Guarantee Active:</strong> Follow our strict nutrition and custom workout program. Guaranteed measurable results or 100% money back!
              </span>
            </div>
            <button
              onClick={handleReset}
              className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] to-[#F59E0B] text-black font-medium text-sm tracking-wide uppercase hover:brightness-110 transition-all shadow-md shadow-[#E5A919]/30 cursor-pointer"
            >
              Done & Return to Gym
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E5A919] mb-1">
              <Sparkles className="w-4 h-4" />
              Exclusive Access
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium uppercase tracking-tight text-white">
              Book Your Free <span className="text-[#E5A919]">1-on-1 Trial</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1 mb-5">
              Experience personal training with a certified coach + free body analysis.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-gray-300 uppercase mb-1 tracking-wider">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase mb-1 tracking-wider">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 95055 60783"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 uppercase mb-1 tracking-wider">Email (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/60 border border-zinc-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5A919] transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                </div>
              </div>

              {/* Custom Dropdown: Branch */}
              <CustomDropdown
                label="Select Gym Branch"
                required
                options={branchOptions}
                value={formData.branch}
                onChange={(val) => setFormData({ ...formData, branch: val })}
              />

              {/* Custom Dropdown: Goal & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <CustomDropdown
                  label="Fitness Goal"
                  options={goalOptions}
                  value={formData.goal}
                  onChange={(val) => setFormData({ ...formData, goal: val })}
                />

                <CustomDropdown
                  label="Preferred Time"
                  options={timeSlotOptions}
                  value={formData.timeSlot}
                  onChange={(val) => setFormData({ ...formData, timeSlot: val })}
                />
              </div>

              {/* Guarantee Tag */}
              <div className="p-2.5 rounded-xl bg-[#E5A919]/10 border border-[#E5A919]/30 flex items-center gap-2 text-xs text-amber-300">
                <ShieldCheck className="w-4 h-4 text-[#E5A919] shrink-0" />
                <span>100% Results or Full Refund Money-Back Guarantee</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A919] via-[#F59E0B] to-[#D97706] text-black font-medium text-xs sm:text-sm tracking-wider uppercase hover:brightness-110 transition-all shadow-xl shadow-[#E5A919]/30 cursor-pointer"
              >
                Confirm Free 1-on-1 Trial
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
