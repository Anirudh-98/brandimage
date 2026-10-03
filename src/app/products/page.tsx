import type { Metadata } from "next";
import {
  Droplets,
  Scissors,
  Brush,
  SprayCan,
  Leaf,
  Armchair,
  Apple,
  Hourglass,
  User,
  FlaskConical,
} from "lucide-react";
import {
  PageShell,
  Section,
  Cards,
  Flow,
  Checks,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Products - Brand Image Beauty & Wellness",
  description:
    "Responsible product awareness for herbal, cosmetic, skincare, haircare and personal care products, discussed with qualified experts.",
};

export default function ProductsPage() {
  return (
    <PageShell
      eyebrow="Products"
      title="Trusted Products, Responsible Information"
      intro="Herbal, cosmetic, skincare, haircare and personal care products presented with accurate information — ingredients, appropriate use and precautions — and discussed with participating skin and cosmetic doctors and other qualified experts."
      image="/assets/gen/thumb-products.jpg"
    >
      <Section title="Product Categories">
        <Cards
          cols={5}
          items={[
            { title: "Skin Care", icon: Droplets },
            { title: "Hair Care", icon: Scissors },
            { title: "Makeup", icon: Brush },
            { title: "Personal Care", icon: SprayCan },
            { title: "Herbal & Natural", icon: Leaf },
            { title: "Salon Equipment", icon: Armchair },
            { title: "Nutrition & Wellness", icon: Apple },
            { title: "Anti-Ageing", icon: Hourglass },
            { title: "Men's Grooming", icon: User },
            { title: "Professional Use", icon: FlaskConical },
          ]}
        />
      </Section>

      <Section
        title="How Product Information Reaches You"
      >
        <Cards
          cols={5}
          items={[
            { title: "The Company", desc: "Manufacturer / Distributor — quality products, true information." },
            { title: "Experts", desc: "Dermatologists and cosmetic professionals — professional insights, safe and informed use." },
            { title: "Beauty Professionals", desc: "Parlours and beauticians — better knowledge, better services." },
            { title: "Women Customers", desc: "All age groups — confident and well-informed customers." },
            { title: "A Healthier, More Beautiful Women's World", desc: "Wellness today for a brighter tomorrow." },
          ]}
        />
      </Section>

      <Section
        title="Product Knowledge and Expert Guidance"
        image="/assets/gen/product-demo.jpg"
        intro="Scheduled orientation on herbal products, new cosmetics, product ingredients, appropriate use and precautions, with participating skin and cosmetic doctors and other qualified experts."
      >
        <Checks
          items={[
            "New cosmetic, herbal and beauty products",
            "Product ingredients, applications and precautions",
            "New beauty equipment and technologies",
            "Product demonstrations — use, application and benefits explained",
            "Free training on new products with free samples, when manufacturers provide them",
            "Verified discounts on nominated cosmetics and participating services",
          ]}
        />
      </Section>

      <Section
        title="Product Programme Protocol"
        image="/assets/gen/herbal.jpg"
        flip
        intro="Before recording, Brand Image collects the following from the participating company. Manufacturer statements are distinguished from professional commentary."
      >
        <Flow
          steps={[
            "Company profile",
            "Product name / category",
            "Intended cosmetic purpose",
            "Manufacturer-provided ingredients and usage information",
            "Label / claim information",
            "Relevant supporting documents",
          ]}
        />
        <p className="text-[14.5px] font-semibold text-ink mt-5 mb-2">
          What our programmes avoid
        </p>
        <Checks
          items={[
            "Diagnosis of viewers",
            "Prescriptions",
            "Guaranteed outcomes",
            "Unsupported superiority or safety claims",
          ]}
        />
      </Section>

      <Section title="Important Note">
        <div className="flex flex-col gap-4">
          <Notice title="Information platform, not an endorsement">
            Brand Image provides an information, awareness and digital
            communication platform. Participation does not constitute medical
            endorsement, product certification or guarantee of therapeutic
            efficacy by Brand Image. Product claims, regulatory compliance,
            manufacturing standards and supporting evidence remain the
            responsibility of the respective manufacturer/brand. Qualified
            professionals will provide information within their respective
            professional scope.
          </Notice>
          <Notice title="Disclosure">
            Educational and awareness content is separated from paid
            promotional content where appropriate, and sponsorship is disclosed.
            Brand Image does not claim product certification or medical
            endorsement unless legally and technically authorised.
          </Notice>
        </div>
      </Section>

      <CtaBand
        title="Are you a manufacturer, distributor or supplier?"
        text="Be part of a purpose-driven digital platform that connects your products with experts, beauty professionals and women customers."
        href="/business"
        label="Partner With Us"
      />
    </PageShell>
  );
}
