"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GuaranteeBanner from "@/components/GuaranteeBanner";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutGymSection from "@/components/AboutGymSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import TrialBookingModal from "@/components/TrialBookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function HomePage() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Free 1-on-1 Trial Session");

  const handleOpenTrialModal = (plan?: string) => {
    if (plan) setSelectedPlan(plan);
    setIsTrialModalOpen(true);
  };

  const handleCloseTrialModal = () => {
    setIsTrialModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#F3F4F6] relative selection:bg-[#E5A919] selection:text-black">
      {/* Top Header Navbar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 2. 100% Results / Money-Back Guarantee Banner */}
        <GuaranteeBanner onOpenTrialModal={handleOpenTrialModal} />

        {/* 3. Why Choose Us */}
        <WhyChooseUsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 4. About the Gym */}
        <AboutGymSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 5. Programs / Training */}
        <ProgramsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 6. Facilities / Equipment (Strength, Cardio, Free weights, Functional, Changing rooms, Shower, Parking) */}
        <FacilitiesSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 7. Testimonials (Customer reviews with Photo, Name, Rating ⭐⭐⭐⭐⭐, Short review) */}
        <TestimonialsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 8. Call-to-Action Banner ("Your Stronger Self Starts Today." -> "Start Your Fitness Journey →") */}
        <CtaBanner onOpenTrialModal={handleOpenTrialModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture / 1-on-1 Trial Modal */}
      <TrialBookingModal
        isOpen={isTrialModalOpen}
        onClose={handleCloseTrialModal}
        initialPlan={selectedPlan}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton onOpenTrialModal={handleOpenTrialModal} />
    </div>
  );
}
