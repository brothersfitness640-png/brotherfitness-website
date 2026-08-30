"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GuaranteeBanner from "@/components/GuaranteeBanner";
import ProgramsSection from "@/components/ProgramsSection";
import PricingSection from "@/components/PricingSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ClassScheduleSection from "@/components/ClassScheduleSection";
import TransformationsSection from "@/components/TransformationsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import BlogSection from "@/components/BlogSection";
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
      {/* Top Navbar */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      <main>
        {/* 1. Hero Section matching reference image */}
        <HeroSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 2. Core USP Guarantee Banner: 1-on-1 PT & 100% Money-Back Guarantee */}
        <GuaranteeBanner onOpenTrialModal={handleOpenTrialModal} />

        {/* 3. Our Programs: Fitness for Every Goal */}
        <ProgramsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 4. Membership Plans: Choose Your Plan (₹999, ₹1,699, ₹2,499) */}
        <PricingSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 5. Why Choose Us: More Than Just a Gym */}
        <WhyChooseUsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 6. Class Schedule: Check Our Class Timetable */}
        <ClassScheduleSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 7. Transformations: Real People. Real Results */}
        <TransformationsSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 8. World-Class Facilities */}
        <FacilitiesSection onOpenTrialModal={handleOpenTrialModal} />

        {/* 9. Latest From Blog: Tips, News & More */}
        <BlogSection />

        {/* 10. High-Impact CTA Banner: Ready to Transform Your Life? */}
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
