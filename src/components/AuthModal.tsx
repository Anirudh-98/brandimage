"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, LogIn, UserPlus, Info } from "lucide-react";

export type AuthMode = "login" | "register";

const REGISTER_EMAIL = "info@brandimage.in";

const inputClass =
  "w-full text-[14px] px-3.5 py-2.5 rounded-lg border border-rose-200 bg-white text-[#2A1A5E] placeholder-[#2A1A5E]/50 transition-colors focus:outline-none focus:border-[#C2005F] focus:ring-2 focus:ring-[#C2005F]/25";
const labelClass = "text-[13px] font-medium text-[#2A1A5E]";
const submitClass =
  "w-full bg-[#C2005F] hover:bg-[#A80052] text-white font-semibold text-[14px] py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2005F]";

/* Login and Register popups. There is no account backend yet: Register sends the
   details by email, and Login explains that member sign-in is not switched on. */
export default function AuthModal({
  mode,
  onModeChange,
  onClose,
}: {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const isLogin = mode === "login";

  return (
    <div
      className="fixed inset-0 z-[70] bg-[#2A1A5E]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md my-auto rounded-[24px] bg-rose-100 border border-rose-200 shadow-[0_32px_70px_-24px_rgba(42,26,94,0.55)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full flex items-center justify-center text-[#2A1A5E]/70 hover:text-[#2A1A5E] hover:bg-white/70 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="px-6 sm:px-8 pt-7 pb-7">
          <div className="flex items-center gap-2.5">
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={30}
              height={32}
              className="h-9 w-auto"
            />
            <span className="text-[18px] font-extrabold tracking-tight text-[#2A1A5E] leading-none">
              Brand <span className="text-[#E60073]">Image</span>
            </span>
          </div>

          <h2
            id="auth-modal-title"
            className="mt-5 text-2xl font-bold tracking-tight text-[#2A1A5E]"
          >
            {isLogin ? "Member login" : "Register free"}
          </h2>
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#2A1A5E]/70">
            {isLogin
              ? "Sign in to your Brand Image member account."
              : "Free Login. Useful Knowledge. New Opportunities."}
          </p>

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <p className="mt-5 text-center text-[13.5px] text-[#2A1A5E]/70">
            {isLogin ? "New to Brand Image?" : "Already a member?"}{" "}
            <button
              type="button"
              onClick={() => onModeChange(isLogin ? "register" : "login")}
              className="font-semibold text-[#C2005F] hover:underline underline-offset-2"
            >
              {isLogin ? "Register free" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-6 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-id" className={labelClass}>
          Mobile number or email
        </label>
        <input
          id="login-id"
          type="text"
          required
          autoComplete="username"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="login-password" className={labelClass}>
          Password
        </label>
        <input
          id="login-password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </div>

      {submitted && (
        <p
          role="status"
          className="flex items-start gap-2 rounded-lg bg-white border border-rose-200 px-3.5 py-3 text-[13px] leading-relaxed text-[#2A1A5E]"
        >
          <Info className="w-4 h-4 text-[#C2005F] flex-shrink-0 mt-0.5" />
          Member login is not available yet. Register free and our team will
          contact you when accounts open.
        </p>
      )}

      <button type="submit" className={submitClass}>
        <LogIn aria-hidden className="w-4 h-4" />
        Login
      </button>
    </form>
  );
}

const CATEGORIES = [
  "Customer / Wellness Member",
  "Professional Associate (parlour, salon, academy, beautician)",
  "Industry Partner (manufacturer, distributor, dealer, supplier)",
  "Expert Partner",
  "Training / Student Participant",
];

function RegisterForm() {
  const [values, setValues] = useState({
    name: "",
    mobile: "",
    email: "",
    category: CATEGORIES[0],
  });
  const [opened, setOpened] = useState(false);

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setValues({ ...values, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Full name: ${values.name}`,
      `Mobile: ${values.mobile}`,
      `Email: ${values.email || "-"}`,
      `Membership category: ${values.category}`,
    ].join("\n");
    window.location.href = `mailto:${REGISTER_EMAIL}?subject=${encodeURIComponent(
      "Brand Image Member Registration"
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-name" className={labelClass}>
          Full name <span aria-hidden className="text-[#C2005F]">*</span>
        </label>
        <input
          id="register-name"
          type="text"
          required
          autoComplete="name"
          value={values.name}
          onChange={set("name")}
          className={inputClass}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-mobile" className={labelClass}>
            Mobile <span aria-hidden className="text-[#C2005F]">*</span>
          </label>
          <input
            id="register-mobile"
            type="tel"
            required
            autoComplete="tel"
            value={values.mobile}
            onChange={set("mobile")}
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="register-email" className={labelClass}>
            Email
          </label>
          <input
            id="register-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="register-category" className={labelClass}>
          Membership category
        </label>
        <select
          id="register-category"
          value={values.category}
          onChange={set("category")}
          className={inputClass}
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <p
        aria-live="polite"
        className="text-[12.5px] leading-relaxed text-[#2A1A5E]/70"
      >
        {opened
          ? `Your email app should now be open with these details. Press send there to reach ${REGISTER_EMAIL}.`
          : `Submitting opens your email app with these details addressed to ${REGISTER_EMAIL}.`}
      </p>

      <button type="submit" className={submitClass}>
        <UserPlus aria-hidden className="w-4 h-4" />
        Register free
      </button>
    </form>
  );
}
