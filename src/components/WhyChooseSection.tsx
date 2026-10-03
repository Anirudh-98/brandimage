"use client";

import React, { useState } from "react";
import {
  FileText,
  Users2,
  ShieldCheck,
  Laptop,
  Clock,
  TrendingUp,
  HeartHandshake,
  Smile,
  ChevronRight,
  X,
  CheckCircle2,
} from "lucide-react";

export default function WhyChooseSection() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "Beauty Professional",
  });

  const features = [
    {
      label1: "Reliable",
      label2: "Information",
      icon: FileText,
      bgColor: "bg-[#E60073]",
    },
    {
      label1: "Expert",
      label2: "Network",
      icon: Users2,
      bgColor: "bg-[#3B1F7A]",
    },
    {
      label1: "Verified",
      label2: "Products",
      icon: ShieldCheck,
      bgColor: "bg-[#159447]",
    },
    {
      label1: "Convenient",
      label2: "Access",
      icon: Laptop,
      bgColor: "bg-purple-600",
    },
    {
      label1: "Saves Time",
      label2: "& Cost",
      icon: Clock,
      bgColor: "bg-[#1E4FA3]",
    },
    {
      label1: "Business",
      label2: "Growth",
      icon: TrendingUp,
      bgColor: "bg-amber-500",
    },
    {
      label1: "Women",
      label2: "Empowerment",
      icon: HeartHandshake,
      bgColor: "bg-[#E60073]",
    },
    {
      label1: "A Healthier",
      label2: "& Happier You",
      icon: Smile,
      bgColor: "bg-sky-600",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setJoinModalOpen(false);
    }, 2000);
  };

  return (
    <section className="w-full max-w-[1920px] mx-auto px-2 lg:px-2.5 pt-1 pb-1.5">
      {/* Horizontal Why Choose Bar */}
      <div className="bg-gradient-to-r from-[#FDEAF4] via-white to-[#F6E9FB] rounded-lg border border-pink-100 shadow-sm flex flex-col lg:flex-row items-stretch justify-between gap-2 overflow-hidden">
        {/* Left Dark Block: Why Choose Brand Image */}
        <div className="bg-[#2A1A5E] text-white pl-4 pr-8 py-2 flex items-center justify-center lg:justify-start flex-shrink-0 w-full lg:w-auto lg:[clip-path:polygon(0_0,100%_0,calc(100%-18px)_100%,0_100%)]">
          <h3 className="font-semibold text-[13px] xl:text-[15px] leading-tight tracking-wide">
            Why Choose
            <span className="block">Brand Image</span>
          </h3>
        </div>

        {/* Center: 8 Feature Items with Round Icons */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-1.5 sm:gap-2 flex-1 w-full justify-items-center items-center py-1 px-1">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-1.5 p-1 rounded-lg hover:bg-slate-50 transition-colors w-full justify-center lg:justify-start"
              >
                <div
                  className={`w-8 h-8 xl:w-9 xl:h-9 rounded-full ${item.bgColor} flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[9.5px] xl:text-[11px] font-semibold text-[#3B1F7A]">
                    {item.label1}
                  </span>
                  <span className="text-[9.5px] xl:text-[11px] font-semibold text-[#3B1F7A]">
                    {item.label2}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Pink CTA: Join Now */}
        <button
          onClick={() => setJoinModalOpen(true)}
          className="bg-[#E60073] hover:bg-[#cc0066] text-white rounded-full px-6 py-1.5 m-1 flex items-center gap-4 shadow-md hover:shadow-lg transition-all flex-shrink-0 group lg:w-auto justify-center"
        >
          <div className="flex flex-col text-left leading-tight">
            <span className="font-extrabold text-[13px] sm:text-[14px] text-white tracking-wide">
              Join Now
            </span>
            <span className="text-[9.5px] text-pink-100 font-medium whitespace-nowrap">
              Be a Part of Our Network
            </span>
          </div>
          <div className="w-6 h-6 rounded-full bg-white text-[#E60073] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
            <ChevronRight className="w-4 h-4 stroke-[3]" />
          </div>
        </button>
      </div>

      {/* Join Network Registration Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl overflow-hidden max-w-md w-full shadow-2xl">
            <div className="bg-gradient-to-r from-[#E60073] to-[#572B8A] p-5 text-white relative">
              <button
                onClick={() => setJoinModalOpen(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="font-extrabold text-lg">Join Brand Image Network</h3>
              <p className="text-xs text-pink-100 mt-0.5">
                Connect with beauty specialists, doctors, and manufacturers.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-base text-slate-800">
                  Welcome to the Network!
                </h4>
                <p className="text-xs text-slate-600">
                  Our regional coordinator will reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-5 space-y-3.5 bg-rose-100"
              >
                <div>
                  <label className="block text-xs font-semibold text-[#2A1A5E] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anjali Gupta"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full text-xs p-2.5 border border-rose-200 bg-white text-slate-800 rounded-lg focus:outline-none focus:border-[#C2005F] focus:ring-2 focus:ring-[#C2005F]/25"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A1A5E] mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-xs p-2.5 border border-rose-200 bg-white text-slate-800 rounded-lg focus:outline-none focus:border-[#C2005F] focus:ring-2 focus:ring-[#C2005F]/25"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2A1A5E] mb-1">
                    I am a:
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full text-xs p-2.5 border border-rose-200 bg-white text-slate-800 rounded-lg focus:outline-none focus:border-[#C2005F] focus:ring-2 focus:ring-[#C2005F]/25"
                  >
                    <option>Beauty Professional / Salon Owner</option>
                    <option>Dermatologist / Cosmetic Doctor</option>
                    <option>Product Manufacturer / Distributor</option>
                    <option>Cosmetology Student / Trainee</option>
                    <option>Individual Customer</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#C2005F] hover:bg-[#A80052] text-white font-bold text-xs py-2.5 rounded-full shadow-md transition-colors"
                  >
                    Submit &amp; Join Free
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
