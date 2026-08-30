"use client";

import React, { useState } from "react";
import { Clock, User, Flame, Calendar, Dumbbell, Sparkles, Check } from "lucide-react";

interface ClassScheduleSectionProps {
  onOpenTrialModal: (plan?: string) => void;
}

export default function ClassScheduleSection({ onOpenTrialModal }: ClassScheduleSectionProps) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [activeDay, setActiveDay] = useState("Mon");

  const scheduleData: Record<string, Array<{
    time: string;
    title: string;
    trainer: string;
    intensity: string;
    slots: string;
    category: string;
  }>> = {
    Mon: [
      { time: "07:00 AM", title: "Strength & Hypertrophy", trainer: "David Lee", intensity: "High", slots: "4 Slots Left", category: "Strength" },
      { time: "09:00 AM", title: "HIIT & Fat Burn Blast", trainer: "Vikram Reddy", intensity: "Extreme", slots: "6 Slots Left", category: "Fat Loss" },
      { time: "06:00 PM", title: "Power Yoga & Core Flow", trainer: "Sarah Jen", intensity: "Medium", slots: "8 Slots Left", category: "Flexibility" },
      { time: "07:30 PM", title: "Athletic Cross-Conditioning", trainer: "Emily Davis", intensity: "High", slots: "5 Slots Left", category: "Functional" },
    ],
    Tue: [
      { time: "06:30 AM", title: "Chest & Triceps Hypertrophy", trainer: "David Lee", intensity: "High", slots: "3 Slots Left", category: "Strength" },
      { time: "08:30 AM", title: "Kettlebell Fat Shred", trainer: "Emily Davis", intensity: "High", slots: "7 Slots Left", category: "Fat Loss" },
      { time: "05:30 PM", title: "Mobility & Posture Alignment", trainer: "Sarah Jen", intensity: "Low-Medium", slots: "10 Slots Left", category: "Flexibility" },
      { time: "07:00 PM", title: "HIIT Tabata Cardio Blitz", trainer: "Vikram Reddy", intensity: "Extreme", slots: "5 Slots Left", category: "Fat Loss" },
    ],
    Wed: [
      { time: "07:00 AM", title: "Back & Biceps Deadlift Protocol", trainer: "David Lee", intensity: "High", slots: "2 Slots Left", category: "Strength" },
      { time: "09:00 AM", title: "Core & Metabolic Conditioning", trainer: "Emily Davis", intensity: "Medium", slots: "9 Slots Left", category: "Functional" },
      { time: "06:00 PM", title: "Strength Powerlifting Clinic", trainer: "David Lee", intensity: "High", slots: "4 Slots Left", category: "Strength" },
      { time: "07:30 PM", title: "Zumba Fitness & Rhythm Burn", trainer: "Aanya Sharma", intensity: "Medium", slots: "12 Slots Left", category: "Cardio" },
    ],
    Thu: [
      { time: "06:30 AM", title: "Leg Day & Squat Progression", trainer: "David Lee", intensity: "Extreme", slots: "5 Slots Left", category: "Strength" },
      { time: "08:30 AM", title: "Full Body Circuit Burn", trainer: "Vikram Reddy", intensity: "High", slots: "8 Slots Left", category: "Fat Loss" },
      { time: "05:30 PM", title: "Ashtanga Yoga & Recovery", trainer: "Sarah Jen", intensity: "Medium", slots: "11 Slots Left", category: "Flexibility" },
      { time: "07:00 PM", title: "Boxing & Speed Conditioning", trainer: "Vikram Reddy", intensity: "High", slots: "6 Slots Left", category: "Functional" },
    ],
    Fri: [
      { time: "07:00 AM", title: "Shoulders & Arms Sculpt", trainer: "David Lee", intensity: "High", slots: "4 Slots Left", category: "Strength" },
      { time: "09:00 AM", title: "High-Calorie Battle Rope Circuit", trainer: "Emily Davis", intensity: "Extreme", slots: "5 Slots Left", category: "Fat Loss" },
      { time: "06:00 PM", title: "Functional Calisthenics", trainer: "Vikram Reddy", intensity: "Medium-High", slots: "7 Slots Left", category: "Functional" },
      { time: "07:30 PM", title: "End-of-Week Cardio Jam", trainer: "Aanya Sharma", intensity: "Medium", slots: "14 Slots Left", category: "Cardio" },
    ],
    Sat: [
      { time: "08:00 AM", title: "Brothers Saturday Beast Camp", trainer: "Head Coach David", intensity: "Extreme", slots: "8 Slots Left", category: "Bootcamp" },
      { time: "10:00 AM", title: "1-on-1 PT Form Evaluation", trainer: "All Trainers", intensity: "Medium", slots: "4 Slots Left", category: "Personal" },
      { time: "05:00 PM", title: "Functional Mobility & Foam Roll", trainer: "Sarah Jen", intensity: "Low", slots: "15 Slots Left", category: "Recovery" },
      { time: "06:30 PM", title: "Weight Loss Nutrition Workshop", trainer: "Nutritionist Priya", intensity: "Educational", slots: "Open", category: "Nutrition" },
    ],
    Sun: [
      { time: "08:30 AM", title: "Sunday Power Stretching & Core", trainer: "Sarah Jen", intensity: "Low-Medium", slots: "12 Slots Left", category: "Recovery" },
      { time: "10:00 AM", title: "Open Gym & Personal Coaching", trainer: "Floor Trainers", intensity: "Custom", slots: "All Welcome", category: "Open Floor" },
      { time: "05:00 PM", title: "Weekly Body Fat & InBody Scans", trainer: "Fitness Desk", intensity: "Assessment", slots: "Available", category: "Tracking" },
    ],
  };

  const currentClasses = scheduleData[activeDay] || scheduleData["Mon"];

  return (
    <section id="schedule" className="py-20 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            CLASS SCHEDULE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Check Our Class Timetable
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Select a day to view interactive trainer sessions and group workout slots. Every member can reserve a spot in advance.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 sm:px-7 py-2.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeDay === day
                  ? "bg-[#E5A919] text-black shadow-lg shadow-[#E5A919]/30 scale-105"
                  : "bg-zinc-900/80 border border-zinc-800 text-gray-400 hover:text-white hover:border-[#E5A919]/40"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentClasses.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#141416] to-[#0c0c0e] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1"
            >
              <div>
                {/* Time & Slot Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A919]/15 text-[#E5A919] text-xs font-black">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-amber-300/80">
                    {item.slots}
                  </span>
                </div>

                {/* Class Title */}
                <h4 className="text-base font-black uppercase text-white mb-2 group-hover:text-[#E5A919] transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Trainer Info */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <User className="w-3.5 h-3.5 text-[#E5A919]" />
                  <span>Coach: <strong className="text-gray-200">{item.trainer}</strong></span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-zinc-500 mb-6">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {item.category}
                  </span>
                  <span>• Intensity: <span className="text-amber-400 font-semibold">{item.intensity}</span></span>
                </div>
              </div>

              {/* Book Button from Reference Image */}
              <button
                onClick={() => onOpenTrialModal(`${item.title} with ${item.trainer} (${activeDay} ${item.time})`)}
                className="w-full py-2.5 rounded-xl border border-[#E5A919]/60 hover:bg-[#E5A919] text-white hover:text-black font-extrabold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-[#E5A919]/30"
              >
                Book Slot
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
