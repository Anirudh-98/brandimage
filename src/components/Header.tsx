"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthModal, { type AuthMode } from "@/components/AuthModal";
import {
  Search,
  Home,
  Info,
  Package,
  UserCheck,
  Sparkles,
  Handshake,
  GraduationCap,
  HeartHandshake,
  Video,
  Award,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Header({
  maxWidth = "max-w-[1920px]",
}: {
  maxWidth?: string;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState("English");
  const [langOpen, setLangOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode | null>(null);
  const pathname = usePathname();
  // The larger tagline only fits when the header spans the full window
  const wide = maxWidth === "max-w-[1920px]";

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "About Us", icon: Info, href: "/about" },
    { label: "Products", icon: Package, href: "/products" },
    { label: "Experts", icon: UserCheck, href: "/experts" },
    { label: "Services", icon: Sparkles, href: "/services" },
    { label: "Business", icon: Handshake, href: "/business" },
    { label: "Training", icon: GraduationCap, href: "/training" },
    { label: "Welfare", icon: HeartHandshake, href: "/welfare" },
    { label: "Media", icon: Video, href: "/media" },
    { label: "Privileges", icon: Award, href: "/privileges" },
    { label: "Contact", icon: PhoneCall, href: "/contact" },
  ].map((item) => ({ ...item, active: pathname === item.href }));

  return (
    <header className="w-full bg-gradient-to-r from-white via-[#FFF5FA] to-[#FDEAF4] border-b border-pink-100 sticky top-0 z-50">
      <div
        className={`${maxWidth} mx-auto px-3 sm:px-4 lg:px-4 py-1.5 flex flex-col lg:flex-row items-center lg:items-stretch gap-2 lg:gap-5`}
      >
        {/* Left: Brand Image Logo & Sub-tagline */}
        <div className="flex flex-col items-start justify-center select-none flex-shrink-0 max-w-full">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-14 flex-shrink-0">
              <Image
                src="/assets/logo-mark.png"
                alt="Brand Image Logo"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline leading-none">
                <span className="text-[26px] xl:text-[32px] font-extrabold text-[#3B1F7A] tracking-tight">
                  Brand
                </span>
                <span className="text-[26px] xl:text-[32px] font-extrabold text-[#E60073] tracking-tight ml-1.5">
                  Image
                </span>
              </div>
              <span className="text-[10px] xl:text-[11.5px] font-bold text-[#3B1F7A] tracking-[0.22em] uppercase mt-0.5">
                BEAUTY &amp; WELLNESS
              </span>
            </div>
          </Link>

          {/* Tagline under logo */}
          <div className="text-[8px] min-[400px]:text-[9px] xl:text-[10px] font-semibold text-[#3B1F7A] tracking-tight mt-1 flex flex-wrap items-center gap-x-1 gap-y-0.5 sm:flex-nowrap sm:whitespace-nowrap">
            <span>Knowledge</span>
            <span className="text-pink-400">|</span>
            <span>Experts</span>
            <span className="text-pink-400">|</span>
            <span className="text-[#E60073]">Trusted Products</span>
            <span className="text-pink-400">|</span>
            <span className="text-[#E60073]">Healthier Women</span>
            <span className="text-pink-400">|</span>
            <span>Brighter Tomorrow</span>
          </div>
        </div>

        {/* Right: tagline + search + CTA, with navigation beneath */}
        <div className="flex-1 min-w-0 w-full flex flex-col justify-between gap-1">
          <div className="flex items-center justify-between gap-3">
            {/* Script Tagline */}
            <h1
              className={`hidden xl:block font-script font-bold text-[#E60073] leading-[1.1] text-left text-[20px] flex-shrink-0 ${
                wide ? "2xl:text-[27px]" : ""
              }`}
            >
              <span className="block italic lg:pl-10">A Complete Gateway for</span>
              <span className="block whitespace-nowrap">
                Beauty, Health, Business &amp; Women Empowerment
              </span>
            </h1>

            <div className="flex items-center gap-2 flex-1 min-w-0">
              {/* Search */}
              <div className="relative flex items-center flex-1 max-w-[340px] min-w-0">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Products, Experts, Services, Training, Videos..."
                  className="w-full text-[11.5px] py-1.5 pl-3 pr-10 border border-gray-300 rounded-md bg-white focus:outline-none focus:border-[#E60073] focus:ring-1 focus:ring-[#E60073] text-gray-700 placeholder-gray-400"
                />
                <button
                  type="button"
                  aria-label="Search"
                  className="absolute right-0 top-0 h-full w-9 rounded-r-md bg-[#E60073] hover:bg-[#cc0066] text-white flex items-center justify-center transition-colors"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {/* Login / Register, directly after the search bar */}
              <div className="hidden lg:flex items-center gap-1.5 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setAuthMode("login")}
                  className="flex items-center gap-1 border-2 border-[#3B1F7A] text-[#3B1F7A] hover:bg-[#3B1F7A] hover:text-white font-bold text-[11.5px] xl:text-[12px] px-3 py-1 rounded-full transition-colors whitespace-nowrap"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthMode("register")}
                  className="flex items-center gap-1 border-2 border-[#3B1F7A] bg-[#3B1F7A] hover:bg-[#2A1A5E] hover:border-[#2A1A5E] text-white font-bold text-[11.5px] xl:text-[12px] px-3 py-1 rounded-full shadow-sm transition-colors whitespace-nowrap"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  Register
                </button>
              </div>

              {/* Language + Join CTA */}
              <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-auto">
                <div className="hidden sm:flex items-center gap-2 text-[10.5px] font-semibold text-slate-700">
                  <div className="relative">
                    <button
                      onClick={() => setLangOpen(!langOpen)}
                      className="flex items-center gap-1 border border-gray-300 bg-white rounded px-1.5 py-0.5 text-[10.5px] text-slate-700 hover:border-gray-400"
                    >
                      <span>{language}</span>
                      <ChevronDown className="w-3 h-3 text-gray-500" />
                    </button>
                    {langOpen && (
                      <div className="absolute right-0 mt-1 bg-white border border-gray-200 rounded shadow-md py-1 z-30 min-w-[90px]">
                        {["English", "Hindi", "Telugu", "Tamil"].map((l) => (
                          <div
                            key={l}
                            onClick={() => {
                              setLanguage(l);
                              setLangOpen(false);
                            }}
                            className="px-3 py-1 text-[11px] text-gray-700 hover:bg-pink-50 hover:text-[#E60073] cursor-pointer"
                          >
                            {l}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <Link
                  href="/privileges#register"
                  className="bg-[#E60073] hover:bg-[#cc0066] text-white font-bold text-[12px] xl:text-[13px] px-4 py-1 rounded-full shadow-sm hover:shadow-md transition-all whitespace-nowrap"
                >
                  Join Our Network
                </Link>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="lg:hidden p-1.5 text-gray-600 hover:text-[#E60073]"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Navigation Row: icon above label */}
          <nav className="hidden lg:block">
            <ul className="flex items-end justify-between xl:justify-end xl:gap-3 2xl:gap-6">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex flex-col items-center gap-0.5 px-2 xl:px-2.5 pt-1 pb-0.5 rounded-md text-[10px] xl:text-[10.5px] font-semibold transition-colors ${
                        item.active
                          ? "bg-[#FCE7F3] text-[#E60073] border-b-2 border-[#E60073]"
                          : "text-[#3B1F7A] hover:text-[#E60073] hover:bg-pink-50 border-b-2 border-transparent"
                      }`}
                    >
                      <Icon
                        className={`w-4 h-4 ${
                          item.active ? "text-[#E60073]" : "text-[#3B1F7A]"
                        }`}
                      />
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthMode("login");
              }}
              className="flex items-center justify-center gap-1.5 border-2 border-[#3B1F7A] text-[#3B1F7A] font-bold text-[13px] py-2 rounded-full"
            >
              <LogIn className="w-4 h-4" />
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setAuthMode("register");
              }}
              className="flex items-center justify-center gap-1.5 border-2 border-[#3B1F7A] bg-[#3B1F7A] text-white font-bold text-[13px] py-2 rounded-full"
            >
              <UserPlus className="w-4 h-4" />
              Register
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[12px] font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-left ${
                    item.active
                      ? "bg-[#FCE7F3] text-[#E60073] font-bold"
                      : "text-slate-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4 text-[#E60073]" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {authMode && (
        <AuthModal
          mode={authMode}
          onModeChange={setAuthMode}
          onClose={() => setAuthMode(null)}
        />
      )}
    </header>
  );
}
