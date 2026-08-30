"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GuaranteeBanner from "@/components/GuaranteeBanner";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AboutGymSection from "@/components/AboutGymSection";
import ProgramsSection from "@/components/ProgramsSection";
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

        {/* 2. Core 100% Results / Money-Back Guarantee Banner */}
        <GuaranteeBanner onOpenTrialModal={handleOpenTrialModal} />

        {/* 3. Why Choose Us (Modern Equipment, Certified Trainers, Personalized Training, Flexible Memberships, Clean & Safe Environment) */}
        <WhyChooseUsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 4. About the Gym (Short intro, Gym philosophy, Mission / vision, Image of the gym, Learn More button) */}
        <AboutGymSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 5. Programs / Training (Strength Training, Weight Loss, Muscle Building, Personal Training, CrossFit/Functional, Cardio, Group Classes) */}
        <ProgramsSection onOpenTrialModal={handleOpenTrialModal} />
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
