"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Bell,
  Check,
  X,
  Droplets,
  Scissors,
  Brush,
  SprayCan,
  Armchair,
  Leaf,
  Apple,
  Hourglass,
  User,
  FlaskConical,
} from "lucide-react";

export default function ContentGrid() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [reminderSet, setReminderSet] = useState(false);

  const testimonials = [
    {
      name: "Sowmya P.",
      role: "Beauty Professional, Hyderabad",
      quote:
        "“The platform helped me learn new techniques and grow my business. I now have more clients and confidence.”",
      image: "/assets/gen/story-portrait.jpg",
    },
    {
      name: "Pooja Sharma",
      role: "Salon Owner, Bengaluru",
      quote:
        "“Connecting directly with certified manufacturers increased my margins and helped me access genuine skin products.”",
      image: "/assets/gen/story-portrait.jpg",
    },
    {
      name: "Ananya Deshmukh",
      role: "Cosmetology Trainee, Mumbai",
      quote:
        "“The video masterclasses and live panel debates with expert dermatologists gave me the skills to start my own studio.”",
      image: "/assets/gen/story-portrait.jpg",
    },
  ];

  const popularCategories = [
    {
      name: "Skin Care",
      icon: Droplets,
      color: "text-orange-500",
      bgColor: "bg-orange-50 border-orange-200/60",
    },
    {
      name: "Hair Care",
      icon: Scissors,
      color: "text-pink-600",
      bgColor: "bg-pink-50 border-pink-200/60",
    },
    {
      name: "Makeup",
      icon: Brush,
      color: "text-rose-600",
      bgColor: "bg-rose-50 border-rose-200/60",
    },
    {
      name: "Personal Care",
      icon: SprayCan,
      color: "text-purple-600",
      bgColor: "bg-purple-50 border-purple-200/60",
    },
    {
      name: "Salon Equipment",
      icon: Armchair,
      color: "text-fuchsia-600",
      bgColor: "bg-fuchsia-50 border-fuchsia-200/60",
    },
    {
      name: "Herbal & Natural",
      icon: Leaf,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 border-emerald-200/60",
    },
    {
      name: "Nutrition & Wellness",
      icon: Apple,
      color: "text-red-500",
      bgColor: "bg-amber-50 border-amber-200/60",
    },
    {
      name: "Anti-Ageing",
      icon: Hourglass,
      color: "text-amber-600",
      bgColor: "bg-yellow-50 border-yellow-200/60",
    },
    {
      name: "Men's Grooming",
      icon: User,
      color: "text-blue-700",
      bgColor: "bg-blue-50 border-blue-200/60",
    },
    {
      name: "Professional Use",
      icon: FlaskConical,
      color: "text-teal-600",
      bgColor: "bg-teal-50 border-teal-200/60",
    },
  ];

  const speakers = [
    { name: "Dermatologist", image: "/assets/gen/speaker-dermatologist.jpg" },
    { name: "Cosmetic Doctor", image: "/assets/gen/speaker-cosmetic.jpg" },
    { name: "Manufacturer", image: "/assets/gen/speaker-manufacturer.jpg" },
    { name: "Sr. Beautician", image: "/assets/gen/speaker-beautician.jpg" },
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-2 lg:px-2.5 py-1 lg:flex-[1.55] lg:min-h-[138px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(0,1fr)] lg:h-full gap-2 items-stretch">
        {/* ============================================================== */}
        {/* Column 1: Featured Video (lg:col-span-3) */}
        {/* ============================================================== */}
        <div className="lg:col-span-3 bg-white rounded-lg border border-pink-100 shadow-sm overflow-hidden flex flex-col lg:min-h-0">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#FDEAF4] to-[#F3E8FF] px-3 py-1 border-b border-pink-100 flex items-center justify-between">
            <h4 className="font-bold text-[12px] xl:text-[13px] text-[#3B1F7A]">
              Featured Video
            </h4>
          </div>

          {/* Video Thumbnail Area */}
          <div className="p-1.5 flex-1 min-h-0 flex flex-col">
            <div
              onClick={() => setVideoModalOpen(true)}
              className="relative w-full aspect-[1.8/1] lg:aspect-auto lg:flex-1 lg:min-h-0 rounded-lg overflow-hidden cursor-pointer group shadow-2xs bg-slate-900"
            >
              <Image
                src="/assets/gen/featured-video.jpg"
                alt="Skin Care Myths vs Facts"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover object-right group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B1F7A]/70 via-[#3B1F7A]/20 to-transparent" />
              <p className="absolute top-[14%] left-[9%] text-white font-bold leading-tight text-[13px] xl:text-[16px] [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                Skin Care Myths
                <span className="block">vs Facts</span>
              </p>
              <p className="absolute bottom-0 inset-x-0 bg-black/55 text-white text-[9.5px] xl:text-[10.5px] font-medium text-center py-0.5">
                Expert Advice for Healthy &amp; Glowing Skin
              </p>

              {/* YouTube Play Icon Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-7 bg-red-600 group-hover:bg-red-700 text-white rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="w-4 h-4 fill-white translate-x-0.5" />
                </div>
              </div>

              {/* Left & Right navigation arrows */}
              <button
                type="button"
                aria-label="Previous featured video"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next featured video"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white/80 hover:bg-white text-gray-800 flex items-center justify-center shadow-xs"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* Column 2: Popular Categories (lg:col-span-3) */}
        {/* ============================================================== */}
        <div className="lg:col-span-3 bg-white rounded-lg border border-pink-100 shadow-sm overflow-hidden flex flex-col lg:min-h-0">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#FDEAF4] to-[#F3E8FF] px-3 py-1 border-b border-pink-100">
            <h4 className="font-bold text-[12px] xl:text-[13px] text-[#3B1F7A]">
              Popular Categories
            </h4>
          </div>

          {/* 10 Category Tiles: 2 rows x 5 cols */}
          <div className="p-2 grid grid-cols-5 lg:grid-rows-[repeat(2,minmax(0,1fr))] gap-1.5 flex-1 min-h-0 content-center lg:content-stretch">
            {popularCategories.map((cat) => (
              <div
                key={cat.name}
                className={`${cat.bgColor} border rounded-lg p-1 lg:p-0.5 xl:px-1 xl:tall:py-1 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-xs hover:scale-105 transition-all duration-150 h-[56px] lg:h-auto lg:min-h-0 overflow-hidden`}
              >
                <cat.icon
                  className={`w-5 h-5 lg:w-4 lg:h-4 xl:tall:w-6 xl:tall:h-6 xl:tall:mb-0.5 flex-shrink-0 ${cat.color}`}
                />
                <span className="text-[8px] lg:text-[7.5px] xl:text-[9px] font-bold text-slate-800 leading-[1.1] line-clamp-2 max-w-full break-words">
                  {cat.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* Column 3: Success Stories (lg:col-span-3) */}
        {/* ============================================================== */}
        <div className="lg:col-span-3 bg-white rounded-lg border border-pink-100 shadow-sm overflow-hidden flex flex-col lg:min-h-0">
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#FDEAF4] to-[#F3E8FF] px-3 py-1 border-b border-pink-100 flex items-center justify-between">
            <h4 className="font-bold text-[12px] xl:text-[13px] text-[#3B1F7A]">
              Success Stories
            </h4>
          </div>

          {/* Testimonial Content: Portrait + Quote */}
          <div className="p-2 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex gap-2.5 items-stretch flex-1 min-h-0">
              {/* Sowmya Portrait */}
              <div className="relative w-[34%] min-h-[72px] rounded-lg overflow-hidden flex-shrink-0 border border-pink-200 shadow-2xs">
                <Image
                  src={testimonials[currentStoryIndex].image}
                  alt={testimonials[currentStoryIndex].name}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>

              {/* Quote */}
              <div className="flex-1 min-w-0 self-center">
                <p className="text-[9.5px] xl:text-[11px] text-slate-700 italic leading-[1.3] font-medium line-clamp-4 xl:tall:line-clamp-none">
                  {testimonials[currentStoryIndex].quote}
                </p>
                <div className="mt-1.5">
                  <span className="block text-[10px] font-bold text-[#E60073]">
                    — {testimonials[currentStoryIndex].name}
                  </span>
                  <span className="block text-[8.5px] text-slate-500">
                    {testimonials[currentStoryIndex].role}
                  </span>
                </div>
              </div>
            </div>

            {/* Carousel navigation dots & Next Arrow */}
            <div className="flex items-center justify-between mt-1 pt-1 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentStoryIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentStoryIndex === idx
                        ? "bg-[#E60073] w-4"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() =>
                  setCurrentStoryIndex(
                    (currentStoryIndex + 1) % testimonials.length
                  )
                }
                className="w-4 h-4 rounded-full bg-pink-100 hover:bg-pink-200 text-[#E60073] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-3 h-3 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Column 4: Upcoming Live Programme (lg:col-span-3) */}
        {/* ============================================================== */}
        <div className="lg:col-span-3 bg-white rounded-lg border border-pink-100 shadow-sm overflow-hidden flex flex-col lg:min-h-0">
          {/* Header Bar with Live Badge */}
          <div className="bg-gradient-to-r from-[#FDEAF4] to-[#F3E8FF] px-3 py-1 border-b border-pink-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <Calendar className="w-3.5 h-3.5 text-[#1E4FA3]" />
              <h4 className="font-bold text-[12px] xl:text-[13px] text-[#3B1F7A] truncate">
                Upcoming Live Programme
              </h4>
            </div>
            <span className="bg-red-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full flex items-center gap-1 shadow-2xs animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LIVE
            </span>
          </div>

          {/* Event Content */}
          <div className="p-2 flex-1 min-h-0 flex flex-col justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
              <h5 className="font-bold text-[11px] sm:text-[11.5px] text-slate-800 leading-tight">
                Expert Panel Discussion
              </h5>
              <p className="text-[10px] text-[#E60073] font-semibold leading-tight mb-1">
                Safe Skin Care for Every Age
              </p>
              <div className="flex flex-wrap items-center gap-x-2 text-[9.5px] text-slate-500 font-medium">
                <span>Date: 15 Oct 2026</span>
                <span>•</span>
                <span>Time: 4:00 PM</span>
              </div>
              </div>
              {/* Set Reminder Button */}
            <button
              onClick={() => setReminderSet(!reminderSet)}
              className={`flex items-center gap-1 flex-shrink-0 whitespace-nowrap text-[10px] font-bold px-2.5 py-1 rounded-full transition-all shadow-2xs ${
                reminderSet
                  ? "bg-emerald-600 text-white"
                  : "bg-[#572B8A] hover:bg-[#45216e] text-white"
              }`}
            >
              {reminderSet ? (
                <>
                  <Check className="w-3 h-3 stroke-[3]" />
                  <span className="lg:hidden xl:inline">Reminder Set</span>
                </>
              ) : (
                <>
                  <Bell className="w-3 h-3" />
                  <span className="lg:hidden xl:inline">Set Reminder</span>
                </>
              )}
            </button>
            </div>

            {/* 4 Speaker Portraits */}
            <div className="grid grid-cols-4 gap-1.5 mt-1">
              {speakers.map((spk) => (
                <div key={spk.name} className="flex flex-col items-center">
                  <div className="relative w-8 h-8 xl:w-10 xl:h-10 xl:tall:w-12 xl:tall:h-12 rounded-lg overflow-hidden border border-purple-200 shadow-2xs">
                    <Image
                      src={spk.image}
                      alt={spk.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[7.5px] xl:text-[8.5px] font-semibold text-slate-700 text-center leading-[1.1] mt-0.5 line-clamp-2">
                    {spk.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Video Modal Demo for Featured Video */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl overflow-hidden max-w-xl w-full shadow-2xl">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-pink-50">
              <h3 className="font-bold text-[#E60073] text-sm flex items-center gap-2">
                <Play className="w-4 h-4 fill-[#E60073]" />
                Featured Video: Skin Care Myths vs Facts
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-gray-400 hover:text-gray-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 text-center">
              <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex flex-col items-center justify-center text-white mb-3">
                <Image
                  src="/assets/gen/featured-video.jpg"
                  alt="Doctor skin video"
                  fill
                  className="object-cover opacity-70"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg mb-2">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                  <span className="font-bold text-sm">
                    Skin Care Myths vs Facts
                  </span>
                  <span className="text-xs text-pink-200">
                    Expert Advice for Healthy &amp; Glowing Skin
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-3">
                Watch certified dermatologists bust common cosmetic myths and
                guide you through science-backed daily skin routines.
              </p>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="bg-[#E60073] hover:bg-[#cc0066] text-white text-xs font-bold px-5 py-1.5 rounded-full"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
