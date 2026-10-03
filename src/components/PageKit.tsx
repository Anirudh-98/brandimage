import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";

export const CONTACT = {
  address:
    "# 407, South Block, Archana Arcade, Secunderabad - 500 003, Telangana, India",
  phone: "8985120237",
  email: "info@brandimage.in",
  partnerEmail: "partner@brandimage.in",
  website: "www.brandimage.in",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Experts", href: "/experts" },
  { label: "Services", href: "/services" },
  { label: "Business", href: "/business" },
  { label: "Training", href: "/training" },
  { label: "Welfare", href: "/welfare" },
  { label: "Media", href: "/media" },
  { label: "Privileges", href: "/privileges" },
  { label: "Contact", href: "/contact" },
];

/*
 * Inner-page design rules:
 * 60-30-10: white canvas and muted body copy, ink headings on surface cards,
 * magenta accent kept for actions, links, icons and badges.
 * Pills for interactive elements, 16px radius for surfaces, 8px for inputs.
 */
const CONTAINER = "w-full max-w-[1400px] mx-auto px-5 sm:px-8";

/* Page wrapper: header, split hero, content, footer */
export function PageShell({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-canvas flex flex-col text-ink selection:bg-surface selection:text-accent">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-accent focus:px-4 focus:py-2 focus:rounded-full focus:shadow-md"
      >
        Skip to content
      </a>
      <Header maxWidth="max-w-[1400px]" />

      <main id="content" className="flex-1">
        <section className="relative overflow-hidden border-b border-line">
          {image && (
            <div
              aria-hidden
              className="relative h-56 sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
                priority
              />
              {/* Short fade where the photo meets the text; the rest of the photo stays clear */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-canvas to-transparent" />
            </div>
          )}
          <div
            className={`${CONTAINER} relative py-10 lg:py-24 lg:min-h-[440px] flex flex-col justify-center`}
          >
            <div className={image ? "lg:max-w-[54%]" : "max-w-[62ch]"}>
              <p className="text-[13px] font-semibold text-accent">{eyebrow}</p>
              <h1 className="mt-3 text-[32px] sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] text-balance text-ink">
                {title}
              </h1>
              <p className="mt-5 text-[15px] sm:text-base leading-relaxed text-ink/70 max-w-[60ch] text-pretty">
                {intro}
              </p>
            </div>
          </div>
        </section>

        <div
          className={`${CONTAINER} py-14 lg:py-20 flex flex-col gap-16 lg:gap-24`}
        >
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export function Section({
  id,
  title,
  intro,
  image,
  flip,
  children,
}: {
  id?: string;
  title: string;
  intro?: string;
  /* Content photo shown beside the heading and intro */
  image?: string;
  flip?: boolean;
  children?: React.ReactNode;
}) {
  const heading = (
    <>
      <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold tracking-tight leading-[1.15] text-balance max-w-[26ch] text-ink">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70 max-w-[65ch] text-pretty">
          {intro}
        </p>
      )}
    </>
  );

  return (
    <section id={id} className="scroll-mt-36">
      {image ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          <div className={flip ? "lg:order-2" : ""}>{heading}</div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-line">
            <Image
              src={image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 660px"
              className="object-cover"
            />
          </div>
        </div>
      ) : (
        heading
      )}
      {children && <div className="mt-8">{children}</div>}
    </section>
  );
}

export interface CardItem {
  title: string;
  desc?: string;
  icon?: LucideIcon;
  image?: string;
}

const COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};

/*
 * Three looks, chosen by what the items carry:
 * photos -> portrait figures, icons -> hairline list, text only -> tinted tiles.
 */
export function Cards({ items, cols = 3 }: { items: CardItem[]; cols?: number }) {
  const hasImage = items.some((item) => item.image);
  const hasIcon = items.some((item) => item.icon);

  if (hasImage) {
    return (
      <div className={`grid grid-cols-2 ${COLS[cols]} gap-x-5 gap-y-8`}>
        {items.map((item) => (
          <figure key={item.title} className="group">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-surface">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </div>
            <figcaption className="mt-4">
              <h3 className="text-[15px] font-semibold leading-snug">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mt-1 text-[14px] leading-relaxed text-ink/70">
                  {item.desc}
                </p>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  if (hasIcon) {
    return (
      <div className={`grid grid-cols-1 ${COLS[cols]} gap-x-8 gap-y-8`}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="border-t border-line pt-5">
              {Icon && (
                <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              )}
              <h3 className="mt-3 text-[15px] font-semibold leading-snug">
                {item.title}
              </h3>
              {item.desc && (
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink/70">
                  {item.desc}
                </p>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 ${COLS[cols]} gap-4`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl p-6 bg-surface border border-line"
        >
          <h3 className="text-lg font-semibold leading-snug tracking-tight">
            {item.title}
          </h3>
          {item.desc && (
            <p className="mt-2 text-[14px] leading-relaxed text-ink/70">
              {item.desc}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/* Arrow-linked sequence, e.g. Learn -> Connect -> Grow */
export function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-2.5">
      {steps.map((step, idx) => (
        <li key={step} className="flex items-center gap-2">
          <span className="bg-surface border border-line text-[13.5px] font-medium px-3.5 py-2 rounded-lg">
            {step}
          </span>
          {idx < steps.length - 1 && (
            <ArrowRight
              aria-hidden
              className="w-4 h-4 text-ink/30 flex-shrink-0"
            />
          )}
        </li>
      ))}
    </ol>
  );
}

export function Checks({ items, cols = 2 }: { items: string[]; cols?: number }) {
  return (
    <ul className={`grid grid-cols-1 ${COLS[cols]} gap-x-10 gap-y-3.5`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14.5px]">
          <Check
            aria-hidden
            className="w-4 h-4 text-accent flex-shrink-0 mt-1"
            strokeWidth={2.5}
          />
          <span className="leading-relaxed text-ink/70">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Numbered({
  items,
  cols = 2,
}: {
  items: { title: string; desc?: string }[];
  cols?: number;
}) {
  return (
    <ol className={`grid grid-cols-1 ${COLS[cols]} gap-x-10 gap-y-8`}>
      {items.map((item, idx) => (
        <li key={item.title} className="flex items-start gap-4">
          <span className="text-[26px] leading-none font-semibold tabular-nums text-accent w-9 flex-shrink-0">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-[15px] font-semibold leading-snug">
              {item.title}
            </h3>
            {item.desc && (
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink/70">
                {item.desc}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* Label / detail pairs, two columns with an accent rule instead of table rows */
export function Rows({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7">
      {items.map((item) => (
        <div key={item.label} className="border-l-2 border-line pl-5">
          <dt className="text-[15px] font-semibold leading-snug">
            {item.label}
          </dt>
          <dd className="mt-1.5 text-[14px] leading-relaxed text-ink/70">
            {item.detail}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Notice({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="rounded-2xl bg-surface border border-line p-6 sm:p-7">
      <h3 className="text-[15px] font-semibold">{title}</h3>
      <div className="mt-2 text-[14px] leading-relaxed text-ink/70 max-w-[80ch]">
        {children}
      </div>
    </aside>
  );
}

export function CtaBand({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div className="rounded-[28px] bg-ink text-white px-7 py-9 sm:px-12 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-7 shadow-[0_28px_60px_-28px_rgba(42,26,94,0.55)]">
      <div>
        <h2 className="text-2xl sm:text-[28px] font-bold tracking-tight leading-[1.15] text-balance max-w-[24ch]">
          {title}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-white/80 max-w-[55ch]">
          {text}
        </p>
      </div>
      <Link
        href={href}
        className="self-start md:self-auto bg-accent hover:bg-accent-strong ring-1 ring-white/25 text-white font-semibold text-[15px] pl-6 pr-5 py-3 rounded-full whitespace-nowrap flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {label}
        <ArrowRight aria-hidden className="w-4 h-4" />
      </Link>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-surface border-t border-line">
      <div
        className={`${CONTAINER} py-12 grid grid-cols-1 md:grid-cols-12 gap-10`}
      >
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/assets/logo-mark.png"
              alt=""
              width={38}
              height={40}
              className="mr-2.5 h-11 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="text-[22px] font-extrabold tracking-tight">
                Brand <span className="text-[#E60073]">Image</span>
              </span>
              <span className="mt-1 text-[10.5px] font-semibold tracking-[0.2em] uppercase">
                Beauty &amp; Wellness
              </span>
            </span>
          </Link>
          <p className="font-script text-xl text-accent mt-5">
            Learn • Connect • Grow • Serve • Empower
          </p>
          <p className="text-[13.5px] text-ink/70 mt-1">
            Natural Care | Scientific Guidance | Real Wellness
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14px]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-ink/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="md:col-span-4 flex flex-col gap-3 text-[14px] text-ink/70">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
            <span className="leading-relaxed">{CONTACT.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-accent flex-shrink-0" />
            <a
              href={`tel:${CONTACT.phone}`}
              className="hover:text-accent transition-colors"
            >
              {CONTACT.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-accent flex-shrink-0" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-accent transition-colors"
            >
              {CONTACT.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Globe className="w-4 h-4 text-accent flex-shrink-0" />
            <span>{CONTACT.website}</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
