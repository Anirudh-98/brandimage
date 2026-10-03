import type { Metadata } from "next";
import {
  Heart,
  Stethoscope,
  Scissors,
  Factory,
  HeartHandshake,
  Play,
} from "lucide-react";
import {
  PageShell,
  Section,
  Cards,
  Flow,
  Checks,
  Numbered,
  Notice,
  CtaBand,
} from "@/components/PageKit";

export const metadata: Metadata = {
  title: "Services - Brand Image Beauty & Wellness",
  description:
    "One platform, many benefits for every woman: information, professional services, expert guidance, training and privileges.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="One Platform – Many Benefits – For Every Woman"
      intro="A complete gateway for beauty, health, business and women empowerment. Brand Image connects women, beauty professionals, wellness experts, trusted products and opportunities on one platform."
      image="/assets/gen/thumb-services.jpg"
    >
      <Section title="Services for Everyone on the Platform">
        <Cards
          cols={3}
          items={[
            { title: "Women & Customers", icon: Heart, desc: "Information, services, wellness and privileges — beauty tips, expert advice, services and opportunities." },
            { title: "Doctors & Experts", icon: Stethoscope, desc: "Health guidance, awareness and professional support." },
            { title: "Beauty Professionals", icon: Scissors, desc: "Skills, training, certification, networking and business growth." },
            { title: "Manufacturers & Distributors", icon: Factory, desc: "Product awareness, market reach and a trusted network." },
            { title: "Women Welfare Programmes", icon: HeartHandshake, desc: "Skills, employment, self-employment and community support." },
            { title: "YouTube Channel", icon: Play, desc: "Live and recorded programmes, expert panels and product demos." },
          ]}
        />
      </Section>

      <Section title="A Win-Win Network for Beauty, Business, Wellness & Women Empowerment">
        <Flow
          steps={[
            "Learn — useful knowledge",
            "Connect — with experts & services",
            "Grow — your skills & business",
            "Serve — women & society",
            "Get Privileges — special offers & subsidies",
            "Be a Part — of a beautiful community",
          ]}
        />
      </Section>

      <Section title="Portal Services">
        <Checks
          items={[
            "Expert guidance",
            "Responsible product awareness",
            "Professional services — find a professional and discover participating parlours",
            "Training and opportunities",
            "Women's empowerment",
            "Profiles and professional registration",
            "Brand and product information",
            "Resources, training and events",
            "Programme archive",
            "Enquiries and feedback",
            "Partner privileges",
            "Telugu magazine and YouTube programmes",
          ]}
        />
      </Section>

      <Section
        title="Bridal Makeup and Customer Enquiries"
        image="/assets/gen/bridal.jpg"
        intro="Suitable bridal makeup enquiries and other customer enquiries are routed through the Brand Image call centre to available, participating professionals. Orders are subject to customer demand and service agreements."
      />

      <Section title="Simple Steps">
        <Numbered
          cols={3}
          items={[
            { title: "Visit www.brandimage.in and register for free" },
            { title: "Subscribe to our YouTube channel" },
            { title: "Check the programme schedule and magazine section" },
            { title: "Watch, learn and participate in live and recorded programmes" },
            { title: "Apply for eligible privileges and opportunities" },
          ]}
        />
      </Section>

      <Section title="What You Can Rely On">
        <Checks
          cols={3}
          items={[
            "Reliable information",
            "Expert network",
            "Responsible product awareness",
            "Convenient access",
            "Professional growth",
            "Women's empowerment",
          ]}
        />
      </Section>

      <Notice title="Our commitment">
        To connect women with reliable information, professional services,
        learning opportunities and practical pathways for personal and economic
        empowerment.
      </Notice>

      <CtaBand
        title="100% Free Enrolment"
        text="Free Login. Useful Knowledge. New Opportunities."
        href="/privileges#register"
        label="Register Free Now"
      />
    </PageShell>
  );
}
