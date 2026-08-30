"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GuaranteeBanner from "@/components/GuaranteeBanner";
import LazySection from "@/components/LazySection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Viewport-lazy and dynamically split sections
const WhyChooseUsSection = dynamic(() => import("@/components/WhyChooseUsSection"), {
  ssr: true,
});
const AboutGymSection = dynamic(() => import("@/components/AboutGymSection"), {
  ssr: true,
});
const ProgramsSection = dynamic(() => import("@/components/ProgramsSection"), {
  ssr: true,
});
const FacilitiesSection = dynamic(() => import("@/components/FacilitiesSection"), {
  ssr: true,
});
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), {
  ssr: true,
});
const CtaBanner = dynamic(() => import("@/components/CtaBanner"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});
const TrialBookingModal = dynamic(() => import("@/components/TrialBookingModal"), {
  ssr: false,
});

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
        {/* 1. Hero Section (Above the fold - immediate load) */}
        <HeroSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 2. 100% Results / Money-Back Guarantee Banner (Above the fold / immediate) */}
        <GuaranteeBanner onOpenTrialModal={handleOpenTrialModal} />

        {/* 3. Why Choose Us (Loaded when approaching viewport) */}
        <LazySection minHeight="450px" id="why-choose-us">
          <WhyChooseUsSection onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>

        {/* 4. About the Gym (Loaded when approaching viewport) */}
        <LazySection minHeight="500px" id="about-gym">
          <AboutGymSection onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>

        {/* 5. Programs / Training (Loaded when approaching viewport) */}
        <LazySection minHeight="600px" id="programs">
          <ProgramsSection onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>

        {/* 6. Facilities / Equipment (Loaded when approaching viewport) */}
        <LazySection minHeight="550px" id="facilities">
          <FacilitiesSection onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>

        {/* 7. Testimonials (Loaded when approaching viewport) */}
        <LazySection minHeight="450px" id="testimonials">
          <TestimonialsSection onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>

        {/* 8. Call-to-Action Banner (Loaded when approaching viewport) */}
        <LazySection minHeight="350px">
          <CtaBanner onOpenTrialModal={handleOpenTrialModal} />
        </LazySection>
      </main>

      {/* Footer (Loaded when approaching viewport) */}
      <LazySection minHeight="300px">
        <Footer />
      </LazySection>

      {/* Lead Capture / 1-on-1 Trial Modal (Loaded on demand) */}
      {isTrialModalOpen && (
        <TrialBookingModal
          isOpen={isTrialModalOpen}
          onClose={handleCloseTrialModal}
          initialPlan={selectedPlan}
        />
      )}

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppButton onOpenTrialModal={handleOpenTrialModal} />
    </div>
  );
}

