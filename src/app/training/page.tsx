import type { Metadata } from "next";
import {
  PageShell,
  Section,
  Checks,
  Rows,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Training & Certification - Brand Image Beauty & Wellness",
  description:
    "Skill development, orientation sessions, manufacturer-authorised certification and career opportunities for beauticians and women entrepreneurs.",
};

export default function TrainingPage() {
  return (
    <PageShell
      eyebrow="Training & Careers"
      title="Learn New Skills, Grow Your Business"
      intro="Skill development, certifications and jobs for beauticians, students and women entrepreneurs — through orientation sessions, professional training and manufacturer-authorised programmes."
      image="/assets/gen/thumb-training.jpg"
    >
      <Section
        title="Orientation and Skill-Development Sessions"
        image="/assets/gen/online-learning.jpg"
        intro="Scheduled introductory sessions on:"
      >
        <Checks
          cols={3}
          items={[
            "Communication skills",
            "Personality development",
            "Computer literacy",
            "Customer care",
            "New technologies",
            "Professional conduct",
          ]}
        />
      </Section>

      <Section title="Programme Formats">
        <Checks
          items={[
            "Pre-recorded expert discussions",
            "Live debates and Q&A",
            "Recurring daily/weekly relay episodes",
            "Product-awareness and demonstration sessions",
            "Customer-awareness programmes",
            "Professional training",
            "Manufacturer-authorised training",
            "Quizzes and debates",
            "Women-oriented awareness and skill-development programmes",
          ]}
        />
      </Section>

      <Section title="Content Pillars">
        <Checks
          cols={3}
          items={[
            "Skincare",
            "Haircare",
            "Makeup",
            "Herbal / natural care",
            "Product literacy",
            "Ingredients, application and precautions",
            "Beauty equipment and technology",
            "Professional techniques",
            "Customer care",
            "Communication and personality development",
            "Digital tools",
            "Business management",
            "Training and certification opportunities",
            "Women empowerment",
            "Employment and self-employment",
            "Wellness",
            "Quizzes and debates",
          ]}
        />
      </Section>

      <Section title="Training Privileges">
        <Rows
          items={[
            { label: "Free training on new products and samples", detail: "Manufacturer-sponsored product training and free samples when available." },
            { label: "Manufacturer-authorised certification", detail: "Certificates are provided only through manufacturers or authorised training partners that have approved the programme and its assessment requirements." },
            { label: "Advanced expert training", detail: "Special workshops with qualified skin and cosmetic professionals. Each session states whether it is free or paid." },
            { label: "Event-management PRO opportunities", detail: "Opportunities for trained members to work as public relations officers or event coordinators at participating events. Selection and remuneration are specified in advance." },
          ]}
        />
      </Section>

      <Section
        title="Careers With Brand Image"
        intro="Roles on the platform may include:"
      >
        <Checks
          items={[
            "Project / Operations Manager",
            "Zone / Area Coordinators",
            "Professional Relationship Executives",
            "Manufacturer / Distributor Relationship Coordinators",
            "Customer Community Coordinators",
            "YouTube / Content Coordinators",
            "Backend Editor / Producer",
            "Training / Event Coordinator",
            "CRM / Data Coordinator",
            "Finance / Admin support",
          ]}
        />
      </Section>

      <Section
        title="Employment, Business and Customer Opportunities"
        image="/assets/gen/certificate.jpg"
        flip
        intro="We publish verified employment and self-employment information, beauty-sector opportunities, training announcements and ways to express interest in bridal makeup orders or other customer enquiries routed through the Brand Image call centre."
      />

      <Notice title="Please note">
        Free registration does not guarantee discounts, employment, product
        samples or other partner-funded benefits. Terms and availability will
        be published for each programme.
      </Notice>

      <CtaBand
        title="Knowledge Today, Beautiful Tomorrow"
        text="Register free to receive training announcements and programme schedules."
        href="/privileges#register"
        label="Register Free"
      />
    </PageShell>
  );
}
