"use client";

import React from "react";
import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

interface WhatsAppButtonProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function WhatsAppButton({ onOpenTrialModal }: WhatsAppButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating Free Trial Pill */}
      <button
        onClick={() => onOpenTrialModal("Floating Trial Pass")}
        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-black/90 border border-[#E5A919] text-[#E5A919] hover:bg-[#E5A919] hover:text-black text-xs font-black uppercase tracking-wider shadow-xl shadow-black/80 transition-all cursor-pointer group"
      >
        <Sparkles className="w-3.5 h-3.5 animate-bounce text-amber-400 group-hover:text-black" />
        <span>Book Free 1-on-1 PT</span>
      </button>

      {/* Floating WhatsApp Action */}
      <a
        href="https://wa.me/919505560783?text=Hi%20Brothers%20Fitness%2C%20I%20want%20to%20know%20more%20about%20your%201-on-1%20Personal%20Training%20and%20100%25%20Result%20Guarantee!"
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
      </a>
    </div>
  );
}
