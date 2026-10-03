"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export interface EnquiryField {
  name: string;
  label: string;
  type?: "text" | "tel" | "email" | "number" | "textarea";
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

/* No backend yet: submitting opens the visitor's mail app with the details filled in. */
export default function EnquiryForm({
  heading,
  subject,
  to,
  fields,
  submitLabel,
}: {
  heading: string;
  subject: string;
  to: string;
  fields: EnquiryField[];
  submitLabel: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, f.options?.[0] ?? ""]))
  );
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = fields
      .map((f) => `${f.label}: ${values[f.name] || "-"}`)
      .join("\n");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  const inputClass =
    "w-full text-[15px] px-3.5 py-2.5 rounded-lg border border-rose-200 bg-white text-ink placeholder-ink/50 transition-colors focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <div className="rounded-[28px] bg-rose-100 border border-rose-200 p-6 sm:p-9">
      <h3 className="text-xl font-bold tracking-tight text-ink">
        {heading}
      </h3>
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5"
      >
        {fields.map((f) => (
          <div
            key={f.name}
            className={`flex flex-col gap-2 ${
              f.type === "textarea" ? "sm:col-span-2" : ""
            }`}
          >
            <label
              htmlFor={f.name}
              className="text-[13.5px] font-medium text-ink"
            >
              {f.label}
              {f.required && <span aria-hidden className="text-accent"> *</span>}
            </label>
            {f.options ? (
              <select
                id={f.name}
                value={values[f.name]}
                onChange={(e) =>
                  setValues({ ...values, [f.name]: e.target.value })
                }
                className={inputClass}
              >
                {f.options.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : f.type === "textarea" ? (
              <textarea
                id={f.name}
                rows={4}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name]}
                onChange={(e) =>
                  setValues({ ...values, [f.name]: e.target.value })
                }
                className={inputClass}
              />
            ) : (
              <input
                id={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                value={values[f.name]}
                onChange={(e) =>
                  setValues({ ...values, [f.name]: e.target.value })
                }
                className={inputClass}
              />
            )}
          </div>
        ))}

        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
          <button
            type="submit"
            className="self-start bg-accent hover:bg-accent-strong text-white font-semibold text-[15px] pl-6 pr-5 py-3 rounded-full whitespace-nowrap flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {submitLabel}
            <ArrowRight aria-hidden className="w-4 h-4" />
          </button>
          <p
            aria-live="polite"
            className="text-[13.5px] leading-relaxed text-ink/70"
          >
            {opened
              ? `Your email app should now be open with these details. Press send there to reach ${to}.`
              : `Submitting opens your email app with these details addressed to ${to}.`}
          </p>
        </div>
      </form>
    </div>
  );
}
