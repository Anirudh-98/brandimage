import type { Metadata } from "next";
import {
  PageShell,
  Section,
  Cards,
  Checks,
  Numbered,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Experts - Brand Image Beauty & Wellness",
  description:
    "Dermatologists, cosmetic and skin specialists, senior beauticians and industry experts on the Brand Image six-member panel.",
};

export default function ExpertsPage() {
  return (
    <PageShell
      eyebrow="Experts"
      title="Real Experts. Real Information. Real Benefits."
      intro="Experts together for real beauty and real confidence. Qualified dermatologists, skin and cosmetic professionals and senior beauticians take part in Brand Image programmes, each speaking within their own professional scope."
      image="/assets/gen/thumb-experts.jpg"
    >
      <Section title="Our Expert Panel">
        <Cards
          cols={4}
          items={[
            { title: "Dermatologist", image: "/assets/gen/speaker-dermatologist.jpg", desc: "Skin and hair health." },
            { title: "Cosmetic Doctor", image: "/assets/gen/speaker-cosmetic.jpg", desc: "Aesthetics and anti-ageing." },
            { title: "Manufacturer", image: "/assets/gen/speaker-manufacturer.jpg", desc: "Product insights." },
            { title: "Sr. Beautician / Moderator", image: "/assets/gen/speaker-beautician.jpg", desc: "Manages the discussion and relay flow." },
          ]}
        />
      </Section>

      <Section
        title="The Six-Member Panel"
        intro="The composition changes according to the topic."
      >
        <Numbered
          cols={3}
          items={[
            { title: "Product Manufacturer / Brand Representative", desc: "Product insights and company information." },
            { title: "Dermatology / Skin Doctor", desc: "Skin and hair health." },
            { title: "Cosmetic / Skin Specialist Doctor", desc: "Aesthetics and anti-ageing." },
            { title: "Senior Beautician / Moderator", desc: "Controls agenda, questions, time and professional discipline." },
            { title: "Distributor / Dealer / Market Representative", desc: "Market availability." },
            { title: "Beauty Professional / Industry Expert", desc: "Salon services and trends — or another relevant participant." },
          ]}
        />
      </Section>

      <Section
        title="The Hexagon Studio"
        image="/assets/gen/hexagon-studio.jpg"
        intro="A central hexagon discussion table is the distinctive production concept. A centrally mounted 360°/multi-angle Wi-Fi/cloud camera system, professional lighting and clear audio can support routine recording and live programmes without a conventional cameraman, subject to technical testing. A backend editor handles editing, captions, branding, quality checks and publishing. A Senior Beautician/Moderator manages the discussion and relay flow."
      />

      <Section title="Expert Programmes">
        <Checks
          items={[
            "Expert panel discussions and expert talks",
            "Expert interaction programmes",
            "Live question-and-answer sessions",
            "Product-awareness programmes and demonstrations",
            "Senior beautician discussions",
            "Professional training programmes",
            "Advanced expert training — special workshops with qualified skin and cosmetic professionals; each session states whether it is free or paid",
            "Customer-awareness programmes",
          ]}
        />
      </Section>

      <Section title="What Our Experts Talk About">
        <Checks
          cols={3}
          items={[
            "Beauty",
            "Skin Health",
            "Safe Products",
            "Expert Advice",
            "Customer Care",
            "Women Empowerment",
          ]}
        />
      </Section>

      <Section title="Professional Scope">
        <div className="flex flex-col gap-4">
          <Notice title="Experts are not unconditional endorsers">
            Doctors and other professionals must remain within their
            professional scope and should not be presented as unconditional
            product endorsers. Participation by a doctor, dermatologist,
            cosmetic expert or senior professional should be understood
            according to that person&apos;s professional scope and should not
            automatically be treated as an unconditional endorsement of any
            product.
          </Notice>
          <Notice title="Education and promotion are kept distinct">
            The platform will distinguish between educational/awareness
            programmes and commercial/promotional programmes wherever
            appropriate. We believe that knowledge, responsible communication
            and professional participation can create stronger relationships
            than conventional one-way advertising alone.
          </Notice>
        </div>
      </Section>

      <CtaBand
        title="Join as an Expert Partner"
        text="Qualified professionals are welcome to take part in Brand Image programmes."
        href="/contact"
        label="Get in Touch"
      />
    </PageShell>
  );
}
