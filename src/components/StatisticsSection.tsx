"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  Users,
  Building2,
  Heart,
  GraduationCap,
  HeartHandshake,
  Trophy,
  Check,
  X,
} from "lucide-react";

export default function StatisticsSection() {
  const [privilegeModalOpen, setPrivilegeModalOpen] = useState(false);

  const stats = [
    {
      value: "500+",
      label: "Beauty Products",
      icon: Sparkles,
      bgColor: "bg-amber-400",
    },
    {
      value: "200+",
      label: "Expert Doctors",
      icon: Stethoscope,
      bgColor: "bg-[#1E4FA3]",
    },
    {
      value: "10,000+",
      label: "Beauty Professionals",
      icon: Users,
      bgColor: "bg-[#159447]",
    },
    {
      value: "2,000+",
      label: "Manufacturers & Distributors",
      icon: Building2,
      bgColor: "bg-[#3B1F7A]",
    },
    {
      value: "1 Million+",
      label: "Happy Customers",
      icon: Heart,
      bgColor: "bg-[#E60073]",
    },
    {
      value: "1000+",
      label: "Training Opportunities",
      icon: GraduationCap,
      bgColor: "bg-sky-500",
    },
    {
      value: "",
      label: "Women Empowerment & Welfare Programmes",
      isSpecial: true,
      icon: HeartHandshake,
      bgColor: "bg-[#E60073]",
    },
  ];

  const privilegesList = [
    "Discounts on Products",
    "Special Training Offers",
    "Certification Support",
    "Business Opportunities",
    "Access to Expert Events",
  ];

  return (
    <section className="w-full max-w-[1920px] mx-auto px-2 lg:px-2.5 py-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch">
        {/* Left Side: Statistics Strip */}
        <div className="lg:col-span-8 bg-gradient-to-r from-[#FDEAF4] via-[#FFF5FA] to-[#F6E9FB] rounded-lg border border-pink-100 shadow-sm px-2 py-1.5 flex items-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-1 gap-y-2 w-full">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex items-center gap-1.5 min-w-0">
                  <div
                    className={`w-8 h-8 xl:w-9 xl:h-9 rounded-full ${stat.bgColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
                  >
                    <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    {stat.value && (
                      <span className="font-extrabold text-[14px] xl:text-[17px] text-[#3B1F7A] leading-none">
                        {stat.value}
                      </span>
                    )}
                    <span
                      className={`leading-tight ${
                        stat.isSpecial
                          ? "text-[10px] xl:text-[11.5px] font-bold text-[#3B1F7A]"
                          : "text-[8.5px] xl:text-[9.5px] font-medium text-slate-600 mt-0.5"
                      }`}
                    >
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Member Privileges Banner */}
        <div
          onClick={() => setPrivilegeModalOpen(true)}
          className="lg:col-span-4 rounded-lg overflow-hidden shadow-sm relative cursor-pointer hover:shadow-md transition-shadow group min-h-[64px] bg-[#8A0F5C]"
        >
          <Image
            src="/assets/gen/privileges-bg.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover object-[center_78%] group-hover:scale-[1.02] transition-transform duration-200"
          />
          <div className="relative h-full flex items-center justify-center gap-3 xl:gap-5 px-[19%] py-1">
            <p className="font-extrabold uppercase text-white text-[13px] xl:text-[16px] leading-[1.1] tracking-wide [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
              Member
              <span className="block">Privileges</span>
            </p>
            <ul className="flex flex-col">
              {privilegesList.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 text-[8px] xl:text-[9.5px] font-semibold text-white leading-[1.3] whitespace-nowrap [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]"
                >
                  <Check className="w-2.5 h-2.5 text-emerald-300 stroke-[4] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Member Privileges Modal */}
      {privilegeModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl">
            <div className="bg-gradient-to-r from-[#780D4C] to-[#C81D77] p-5 text-white relative">
              <button
                onClick={() => setPrivilegeModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-300">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-lg tracking-wide uppercase">
                    Member Privileges
                  </h3>
                  <p className="text-xs text-pink-100">
                    Exclusive Benefits for Brand Image Network Members
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-3">
              {privilegesList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs font-semibold">{item}</span>
                </div>
              ))}

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-500">
                  Join 10,000+ professionals today
                </span>
                <Link
                  href="/privileges"
                  className="bg-[#E60073] hover:bg-[#cc0066] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm"
                >
                  View All Privileges
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
