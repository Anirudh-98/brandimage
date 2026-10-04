"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, CheckCircle2, ChevronRight, X } from "lucide-react";

const leftChecks = [
  "Expert Guidance",
  "Safe & Genuine Products",
  "Professional Services",
  "Training & Opportunities",
  "Women Empowerment",
];

const rightChecks = [
  "Expert Debates",
  "Product Demonstrations",
  "Q & A Sessions",
  "Training Videos",
  "Success Stories",
];

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="w-full max-w-[1920px] mx-auto lg:flex-[2.4] lg:min-h-[140px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:h-full bg-white">
        {/* Left Panel: Good Skin, Healthy You, Confident Tomorrow */}
        <div className="order-2 lg:order-1 lg:col-span-3 relative h-[210px] lg:h-full overflow-hidden bg-[#FCE7F3]">
          <Image
            src="/assets/gen/hero-left.jpg"
            alt="Smiling woman with healthy, glowing skin"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover object-left"
            priority
          />
          <div className="absolute inset-y-0 right-0 w-[58%] lg:w-[60%] xl:w-[56%] flex flex-col items-center justify-center gap-1.5 xl:tall:gap-3 px-1.5 py-1.5">
            <p className="text-center font-extrabold uppercase leading-[1.15] text-[13px] lg:text-[10px] xl:text-[13px] xl:tall:text-[15px] text-[#159447]">
              Good Skin
              <span className="block text-[#3B1F7A]">Healthy You</span>
              <span className="block">Confident Tomorrow</span>
            </p>
            <ul className="bg-white/85 backdrop-blur-xs rounded-lg shadow-sm px-2 py-1 xl:tall:py-2 flex flex-col gap-0.5 xl:tall:gap-1.5">
              {leftChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 text-[10.5px] lg:text-[8.5px] xl:text-[10px] xl:tall:text-[11.5px] font-semibold text-slate-800 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3 h-3 xl:tall:w-3.5 xl:tall:h-3.5 text-white fill-[#159447] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Panel: Studio Panel Discussion */}
        <div className="order-1 lg:order-2 sm:col-span-2 lg:col-span-6 relative h-[230px] sm:h-[280px] lg:h-full overflow-hidden bg-slate-100">
          <video
            src="/herovideo.mp4"
            poster="/assets/gen/hero-center.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Brand Image studio panel discussion"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Panel: Beauty Talks Live & Pre-Recorded */}
        <div className="order-3 lg:col-span-3 relative h-[210px] lg:h-full overflow-hidden bg-[#F3E8FF]">
          <Image
            src="/assets/gen/hero-right.jpg"
            alt="Woman watching Beauty Talks on her phone"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover object-right"
            priority
          />
          <div className="absolute inset-y-0 left-0 w-[60%] flex flex-col justify-center gap-1 xl:tall:gap-2.5 pl-3 lg:pl-2 xl:pl-3 pr-1 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-7 h-5 xl:tall:w-9 xl:tall:h-6 rounded-md bg-red-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Play className="w-3 h-3 fill-white text-white" />
              </span>
              <p className="font-extrabold uppercase leading-none text-[#E60073] text-[15px] lg:text-[11.5px] xl:text-[15px] xl:tall:text-[18px] whitespace-nowrap">
                Beauty Talks
                <span className="block text-[8px] xl:text-[9px] xl:tall:text-[10.5px] mt-0.5">
                  Live &amp; Pre-Recorded
                </span>
              </p>
            </div>
            <ul className="flex flex-col gap-0.5 xl:tall:gap-1.5">
              {rightChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 text-[10.5px] lg:text-[8.5px] xl:text-[10px] xl:tall:text-[11.5px] font-semibold text-slate-800 whitespace-nowrap"
                >
                  <CheckCircle2 className="w-3 h-3 xl:tall:w-3.5 xl:tall:h-3.5 text-white fill-[#E60073] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setVideoModalOpen(true)}
              className="self-start bg-[#E60073] hover:bg-[#cc0066] text-white font-bold text-[11px] xl:tall:text-[13px] pl-3 pr-1 py-0.5 xl:tall:py-1 rounded-full shadow-md flex items-center gap-2 transition-colors"
            >
              Watch Now
              <span className="w-4 h-4 xl:tall:w-5 xl:tall:h-5 rounded-full bg-white text-[#E60073] flex items-center justify-center">
                <ChevronRight className="w-3 h-3 stroke-[3]" />
              </span>
            </button>
          </div>
          <p className="hidden xl:tall:block absolute bottom-1.5 right-2 text-right font-extrabold uppercase leading-[1.2] text-[10px] xl:text-[11px] text-[#3B1F7A] [text-shadow:0_0_6px_white,0_0_6px_white]">
            Learn
            <br />
            Connect
            <br />
            Grow
            <br />
            Serve
            <br />
            Empower
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-pink-50">
              <h3 className="font-bold text-[#E60073] text-base flex items-center gap-2">
                <Play className="w-4 h-4 fill-[#E60073]" />
                Beauty Talks: Live &amp; Pre-Recorded Sessions
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-700 p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-center">
              <div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden flex flex-col items-center justify-center text-white mb-4 shadow-inner">
                <Image
                  src="/assets/gen/hero-center.jpg"
                  alt="Brand Image studio"
                  fill
                  sizes="640px"
                  className="object-cover opacity-60"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#E60073] flex items-center justify-center text-white shadow-lg mb-2">
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </div>
                  <span className="font-bold text-sm tracking-wide">
                    Expert Panel Discussions
                  </span>
                  <span className="text-xs text-pink-200">
                    360° WiFi Cloud Camera • Auto Recording / Live Streaming
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Expert debates, product demonstrations, Q &amp; A sessions,
                training videos and success stories — real discussions and real
                solutions for real people.
              </p>
              <Link
                href="/media"
                className="inline-block bg-[#E60073] hover:bg-[#cc0066] text-white text-xs font-bold px-6 py-2 rounded-full"
              >
                See All Programmes
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
