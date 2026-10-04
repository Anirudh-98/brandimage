import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Leaf,
  Stethoscope,
  Sparkles,
  Handshake,
  GraduationCap,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

interface FeatureCardItem {
  href: string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  iconBg: string;
  arrowBg: string;
}

const cards: FeatureCardItem[] = [
  {
    href: "/products",
    title: "Products",
    description: "Explore trusted beauty, skin & wellness products",
    image: "/assets/gen/thumb-products.jpg",
    icon: Leaf,
    iconBg: "bg-[#159447]",
    arrowBg: "bg-[#1E4FA3]",
  },
  {
    href: "/experts",
    title: "Experts",
    description:
      "Consult with dermatologists, cosmetic specialists & wellness experts",
    image: "/assets/gen/thumb-experts.jpg",
    icon: Stethoscope,
    iconBg: "bg-[#3B1F7A]",
    arrowBg: "bg-[#3B1F7A]",
  },
  {
    href: "/services",
    title: "Services",
    description: "Find certified beauty parlours and wellness centres near you",
    image: "/assets/gen/thumb-services.jpg",
    icon: Sparkles,
    iconBg: "bg-[#B5179E]",
    arrowBg: "bg-[#159447]",
  },
  {
    href: "/business",
    title: "Business Network",
    description: "Connect with manufacturers, distributors and dealers",
    image: "/assets/gen/thumb-business.jpg",
    icon: Handshake,
    iconBg: "bg-[#0EA5E9]",
    arrowBg: "bg-[#1E4FA3]",
  },
  {
    href: "/training",
    title: "Training & Certification",
    description: "Skill development for beauticians and women entrepreneurs",
    image: "/assets/gen/thumb-training.jpg",
    icon: GraduationCap,
    iconBg: "bg-[#1E4FA3]",
    arrowBg: "bg-[#E60073]",
  },
  {
    href: "/welfare",
    title: "Women Welfare",
    description:
      "Jobs, self-employment, government schemes and community programmes",
    image: "/assets/gen/thumb-welfare.jpg",
    icon: Users,
    iconBg: "bg-[#E60073]",
    arrowBg: "bg-[#E11D48]",
  },
  {
    href: "/media",
    title: "Video Channel",
    description:
      "Watch expert talks, product demos, live sessions and success stories",
    image: "/assets/gen/thumb-video.jpg",
    icon: Video,
    iconBg: "bg-[#6B21A8]",
    arrowBg: "bg-[#572B8A]",
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full max-w-[1920px] mx-auto px-2 lg:px-2.5 pt-1.5 pb-1 lg:flex-[1.35] lg:min-h-[100px]">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:grid-rows-[minmax(0,1fr)] lg:h-full gap-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.href}
              href={card.href}
              className="group bg-white rounded-lg border border-pink-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden hover:-translate-y-0.5 lg:min-h-0"
            >
              {/* Thumbnail */}
              <div className="relative w-full h-[90px] lg:h-auto lg:flex-1 lg:min-h-0 overflow-hidden bg-gray-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Icon tile + text + arrow */}
              <div className="p-1.5 flex items-start gap-1.5">
                <div
                  className={`w-6 h-6 xl:w-7 xl:h-7 rounded-md ${card.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                >
                  <Icon className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[11px] xl:text-[12.5px] text-[#0B132B] leading-tight line-clamp-2 group-hover:text-[#E60073] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[8.5px] xl:text-[9.5px] text-slate-600 leading-[1.25] line-clamp-2 xl:tall:line-clamp-3 mt-0.5">
                    {card.description}
                  </p>
                </div>
                <div
                  className={`self-end w-4 h-4 xl:w-5 xl:h-5 rounded-full ${card.arrowBg} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform flex-shrink-0`}
                >
                  <ChevronRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
