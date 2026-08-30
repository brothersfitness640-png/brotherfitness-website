"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, User, X, BookOpen, Clock } from "lucide-react";

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 1,
      title: "5 Tips to Maximize Your Workouts",
      category: "Training Advice",
      date: "August 2026",
      readTime: "4 min read",
      author: "Coach David",
      image: "/images/blog_tips.jpg",
      excerpt: "Master the fundamental rules of progressive overload, optimal resting intervals, and mind-muscle connection for maximum hypertrophy.",
      content: [
        "1. Prioritize Form Over Ego-Lifting: Lifting with correct joint mechanics ensures targeted tension on the muscle fibers rather than tendons, cutting injury risk by 90%.",
        "2. Follow Progressive Overload: Add 1-2 reps or small micro-plates every single week. Tracking your numbers in a gym journal is mandatory.",
        "3. Mind-Muscle Connection: Focus on the squeeze and control the eccentric (negative) portion of every repetition for at least 2-3 seconds.",
        "4. Optimal Rest Periods: Rest 2-3 minutes on heavy compound movements (Squats, Deadlifts) and 60-90 seconds on isolation accessories.",
        "5. Post-Workout Nutrition & Sleep: The muscle does not grow in the gym; it grows during 7-8 hours of deep sleep with adequate protein intake.",
      ],
    },
    {
      id: 2,
      title: "Best Pre & Post Workout Meals",
      category: "Nutrition & Diet",
      date: "August 2026",
      readTime: "5 min read",
      author: "Nutritionist Priya",
      image: "/images/blog_meals.jpg",
      excerpt: "Fuel your intense sessions with complex carbs and supercharge muscle protein synthesis with lean proteins and electrolytes.",
      content: [
        "Pre-Workout Timing (60-90 mins before): Complex carbohydrates (oatmeal with banana, brown rice with chicken, or whole wheat toast with peanut butter) provide sustained glycogen without energy crashes.",
        "Hydration & Electrolytes: Consume 500ml water with a pinch of Himalayan pink salt 30 minutes before stepping onto the gym floor to enhance muscle pump and endurance.",
        "Post-Workout Window (Within 45 mins): Fast-digesting whey protein isolate or plant protein paired with high-glycemic fruit (banana or berries) to spike insulin and deliver amino acids straight to depleted muscle tissue.",
        "The Brothers Fitness Rule: Every client receives a customized macro breakdown (protein, carbs, healthy fats) calculated precisely for their basal metabolic rate.",
      ],
    },
    {
      id: 3,
      title: "How to Stay Motivated & Consistent",
      category: "Mindset & Habits",
      date: "August 2026",
      readTime: "3 min read",
      author: "Coach Vikram",
      image: "/images/blog_motivation.jpg",
      excerpt: "Why relying on fleeting motivation fails and how building an unbreakable daily workout discipline creates permanent body transformations.",
      content: [
        "1. Treat Workout Like a Fixed Meeting: Schedule your gym slot in your calendar with the same non-negotiable priority as a business meeting.",
        "2. Lean on Your 1-on-1 Personal Trainer: On days when energy is low, knowing your coach is waiting for you on the gym floor ensures 100% attendance.",
        "3. Track Non-Scale Victories: Celebrate lifting heavier weights, feeling lighter on your feet, climbing stairs without fatigue, and clothes fitting better.",
        "4. The 5-Minute Rule: If you don't feel like training, just promise yourself to warm up for 5 minutes. 99% of the time, the momentum carries you through.",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#0c0c0e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-[#E5A919] block mb-2">
            LATEST FROM BLOG
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Tips, News & More
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Expert fitness insights, nutritional protocols, and motivation directly from Brother&apos;s certified master trainers.
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <div
              key={art.id}
              className="group rounded-2xl bg-[#121214] border border-zinc-800 hover:border-[#E5A919] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#E5A919]/20"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-black/30 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 border border-zinc-700 text-[#E5A919] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                  {art.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#E5A919]" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#E5A919]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase text-white mb-2.5 group-hover:text-[#E5A919] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-6">
                    {art.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <button
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5A919] hover:text-yellow-300 uppercase tracking-wider transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-zinc-950 border border-[#E5A919] p-6 sm:p-8 text-white shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="sticky top-0 float-right p-2 rounded-full bg-zinc-900 hover:bg-[#E5A919] text-gray-300 hover:text-black transition-colors z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={selectedArticle.image}
                alt={selectedArticle.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 rounded-full bg-[#E5A919] text-black text-[10px] font-black uppercase tracking-wider mb-2 inline-block">
                  {selectedArticle.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 pb-4 border-b border-zinc-800">
              <span>By <strong>{selectedArticle.author}</strong></span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="space-y-4 text-sm text-gray-300 leading-relaxed mb-8">
              {selectedArticle.content.map((p: string, i: number) => (
                <p key={i} className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                  {p}
                </p>
              ))}
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full py-3 rounded-xl bg-[#E5A919] text-black font-black text-xs uppercase tracking-wider cursor-pointer"
            >
              Done Reading
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
